import SignInForm from "@/components/form/SignInForm";
import React from "react";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <SignInForm />
    </div>
  );
};

export default SignIn;
