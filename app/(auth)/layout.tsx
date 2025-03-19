import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-grid min-h-screen justify-center flex flex-col w-full items-center bg-slate-50 p-16">
      <Link href="/">
        <Image
          src="/logo_dark.png"
          width={200}
          height={200}
          alt="Logo"
          className="mb-8"
        />
      </Link>
      <div className="bg-white px-16 py-12 rounded-md shadow-xl mb-8 lg:w-[500px] sm:w-full">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
