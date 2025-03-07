import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div
      className="h-screen justify-center flex flex-col w-screen items-center bg-slate-50 p-16"
      style={{
        backgroundImage: `
          linear-gradient(rgba(200, 200, 200, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200, 200, 200, 0.2) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          width={250}
          height={200}
          alt="Logo"
          className="mb-8"
        />
      </Link>
      <div className="bg-white px-16 py-12 rounded-md shadow-xl w-[500px]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
