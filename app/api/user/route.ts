import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {email, username, password} = body;

    const emailExists = await db.user.findUnique({
      where: {
        email: email
      }
    });

    if (emailExists) {
      return NextResponse.json({user: null, message: "Email already exists"}, {status: 409});
    }

    const usernameExists = await db.user.findUnique({
      where: {
        username: username
      }
    });

    if (usernameExists) {
      return NextResponse.json({user: null, message: "Username already exists"}, {status: 409});
    }
    
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })

    const {password: newUserPassword, ...rest} = newUser;

    return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      return NextResponse.json({ user: session.user });
    }
    throw new Error();
  } catch(error) {
    return NextResponse.json({message: "Something went wrong!"}, {status: 500})
  }
}