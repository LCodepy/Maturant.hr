import { db } from "./db";
import { v4 as uuidv4 } from "uuid";

/*
Verification token utils
*/

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        identifier: email
      }
    });

    return verificationToken;
  } catch (error) {
    console.log(error);
  }
}

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        token: token
      }
    });

    return verificationToken;
  } catch (error) {
    console.log(error);
  }
}

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4(); // generates a uuid identifier
  const expires = new Date().getTime() + 1000 * 60 * 60 * 24; // Sets the token expiry date to be 1 day from now

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    // If token assigned to this email already exists, delete it
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      }
    });
  }

  // Create a new token in the database with fields - email, token (uuid), and expires
  const verificationToken = await db.verificationToken.create({
    data: {
      identifier: email,
      token,
      expires: new Date(expires)
    }
  });

  return verificationToken;
}

/*
Password reset token utils
*/

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: {
        token: token
      }
    });

    return passwordResetToken;
  } catch (error) {
    console.log(error);
  }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: {
        email: email
      }
    });

    return passwordResetToken;
  } catch (error) {
    console.log(error);
  }
}

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4(); // generates a uuid identifier
  const expires = new Date().getTime() + 1000 * 60 * 60 * 24; // Sets the token expiry date to be 1 day from now

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    // If the token assigned to this email already exists, delete it
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id
      }
    });
  }

  // Create new token in the database with fields - email, token (uuid) and expires
  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email: email,
      token: token,
      expires: new Date(expires)
    }
  });

  return passwordResetToken;
}