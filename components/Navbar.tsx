import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SignOutButton from "./SignOutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-white w-full z-50 top-0 shadow-md">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
          </Link>
          <div className="flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link href="/">
              <div className="cursor-pointer hover:text-rose-500">Home</div>
            </Link>
            <Link href="/videos">
              <div className="cursor-pointer hover:text-rose-500">Lessons</div>
            </Link>
            <Link href="/about">
              <div className="cursor-pointer hover:text-rose-500">About Us</div>
            </Link>
            <Link href="/contact">
              <div className="cursor-pointer hover:text-rose-500">Contact</div>
            </Link>
          </div>
          <div className="flex items-center">
            {session?.user ? (
              <SignOutButton />
            ) : (
              <>
                <Link href="/sign-in">
                  <div className="rounded-md px-4 py-2 text-black cursor-pointer hover:bg-slate-100 active:bg-slate-200">
                    Sign in
                  </div>
                </Link>
                <Link href="/sign-up">
                  <div className="bg-rose-500 px-6 py-2 rounded-md mx-4 cursor-pointer text-white font-medium hover:bg-rose-400 active:bg-rose-500">
                    Get Started
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
