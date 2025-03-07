import { generatePasswordResetToken } from "@/lib/tokenUtils";
import { getUserByEmail } from "@/lib/userUtils";
import { NextResponse } from "next/server";
import { sendPasswordResetEmail } from "../send/send-password-reset";

export const POST = async (req: Request) => {
  /* This function is used to send password reset email to the user */

  try {
    const { email } = await req.json();

    // Gets the user by email and checks if the user exist in the database
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return NextResponse.json({ message: "Korisnik ne postoji" }, { status: 409 });
    }

    // Check if the user is verified
    if (!existingUser.emailVerified) {
      return NextResponse.json({ message: "Korisnik nije potvrdio svoju email adresu" }, { status: 409 });
    }

    // Generates a new password reset token
    const passwordResetToken = await generatePasswordResetToken(email);

    // Sends the password reset token to the user's email address
    await sendPasswordResetEmail(email, passwordResetToken.token);

    return NextResponse.json({ message: "Uspjeh" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Dogodila se greška"}, { status: 409 });
  }
}