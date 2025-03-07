import React from "react";

const CheckEmail = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center p-4">
        <h2 className="text-4xl text-rose-400 font-semibold mb-4">
          Check Your Email for Verification Link!
        </h2>
        <p className="text-2xl text-slate-400">
          We've sent you a verification mail, please verify your email.
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;
