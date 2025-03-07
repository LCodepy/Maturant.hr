"use server";

import { db } from "@/lib/db"
import { getVerificationTokenByToken } from "@/lib/tokenUtils";
import { getUserByEmail } from "@/lib/userUtils"

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  // If the token doesn't exist in the database then it is not valid
  if (!existingToken) return { error: "Token nije valjan" };

  // Check if the token expired
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token je istekao" };

  // Get the user that asked for the token
  const existingUser = await getUserByEmail(existingToken.identifier);
  if (!existingUser) return { error: "Korisnik ne postoji" };

  // Update the user in the database and set the emailVerified variable to the current datetime
  await db.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      emailVerified: new Date()
    }
  });

  // Delete the token to avoid future complications
  await db.verificationToken.delete({
    where: {
      id: existingToken.id
    }
  });

  return { success: "Uspjeh" };
}