import { db } from "./db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email
      }
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id
      }
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}