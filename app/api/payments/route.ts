import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  /* This function is used to set the users payment status to "Paid" */

  try {
    const session = await getServerSession(authOptions); // Gets the current logged in user

    if (!session || !session.user) {
      return NextResponse.json({ message: "Pristup nije dopušten" }, { status: 409 });
    }

    const { upgrade } = await req.json();

    // If the client-side requested an upgrade we fetch the user from the database
    if (upgrade) {
      const user = await db.user.findUnique({
        where: {
          email: session.user.email as string,
        }
      });

      if (!user) {
        return NextResponse.json({ message: "Korisnik ne postoji" }, { status: 409 });
      }

      // Updated the database - sets isPaid field to true
      await db.user.update({
        where: { email: session.user.email as string },
        data: { isPaid: true }
      });

      return NextResponse.json({ message: "Uspjeh" }, { status: 201 });
    }

    return NextResponse.json({ message: "Uspjeh" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Dogodila se pogreška pri plaćanju" }, { status: 409 });
  }
}
