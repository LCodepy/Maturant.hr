import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { generateVerificationToken } from "@/lib/tokenUtils";
import { sendVerificationEmail } from "../send/send-verification";

export async function POST(req: Request) {
  /* This function is used in sign up to create a new user in the database */

  try {
    const body = await req.json();
    const { email, username, password } = body;

    // Check if email already exists
    const emailExists = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailExists) {
      return NextResponse.json(
        { user: null, message: "Korisnik s ovim email-om već postoji" },
        { status: 409 }
      );
    }

    // Check if username already exists
    const usernameExists = await db.user.findUnique({
      where: {
        username: username,
      },
    });

    if (usernameExists) {
      return NextResponse.json(
        {
          user: null,
          message: "Korisnik s ovim korisničkim imenom već postoji",
        },
        { status: 409 }
      );
    }

    // Hash the password and create a new user in database
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser; // Get everything in the user object except the password

    // generate a new verification token for the user
    const verificationToken = await generateVerificationToken(email);

    // Send the verification token to the users email
    await sendVerificationEmail(email, verificationToken.token);

    return NextResponse.json(
      { user: rest, message: "Novi korisnik je uspješno napravljen" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Dogodila se pogreška" },
      { status: 409 }
    );
  }
}

export async function GET() {
  /* Responds with the current signed in user object */
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      return NextResponse.json({ user: session.user });
    }
    throw new Error();
  } catch (error) {
    return NextResponse.json(
      { message: "Dogodila se pogreška" },
      { status: 409 }
    );
  }
}
