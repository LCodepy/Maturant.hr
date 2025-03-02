import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({
        status: 401,
        body: { error: "Unauthorized" },
      });
    }

    const { upgrade } = await req.json();

    if (upgrade) {
      const user = await db.user.findUnique({
        where: {
          email: session.user.email as string,
        }
      });

      if (!user) {
        return NextResponse.json({ message: "User not found", status: 401 });
      }

      await db.user.update({
        where: { email: session.user.email as string },
        data: { isPaid: true }
      });

      return NextResponse.json({ message: "Payment successful", status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}
