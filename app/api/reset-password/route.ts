"use server";

import { db } from "@/lib/db"
import { getPasswordResetTokenByToken } from "@/lib/tokenUtils";
import { getUserByEmail } from "@/lib/userUtils"
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  /* This function is used to change the users password */

  const { token, newPassword } = await req.json();

  // If the token doesn't exist in the database then it is invalid
  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) return NextResponse.json({ message: "Token nije valjan" }, { status: 409 });

  // Check if the token expired
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return NextResponse.json({ message: "Token je istekao" }, { status: 409 });

  // Get the user that asked for the token
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return NextResponse.json({ message: "Korisnik ne postoji" }, { status: 409 });

  // Hash the new password and update users password in the database
  const hashedPassword = await hash(newPassword, 10);
  await db.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      password: hashedPassword
    }
  });

  // Delete the token from the database to avoid future complications
  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id
    }
  });

  return NextResponse.json({ message: "Uspjeh" }, { status: 201 });
};
