"use client";

import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButtonLoading(true);
    setError(null);

    // Calls the forgot-password api, which sends the reset password link to user
    const response = await fetch("/api/forgot-password", {
      method: "POST",
      headers: { ContentType: "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(data.message);
    } else {
      setError(data.message);
    }

    setIsButtonLoading(false);
  };

  // If the process is not finished display the form
  if (!success) {
    return (
      <div className="p-4">
        <h2 className="text-3xl text-gray-800 mb-4">Forgot Password?</h2>
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="antepavelic@example.com"
            required
            className="border p-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
          {error && (
            <div className="mb-2">
              <p className="text-sm mt-1 text-red-500 font-medium">{error}!</p>
            </div>
          )}
          {!error && <div className="my-2"></div>}
          <button
            type="submit"
            className="bg-black text-white font-semibold p-2 mt-2 rounded-md hover:bg-gray-800 active:bg-black disabled:bg-gray-700"
            disabled={isButtonLoading}
          >
            {isButtonLoading ? (
              <div className="flex flex-col items-center justify-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 animate-spin inline"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="text-center">
      {success && (
        <div className="mt-2">
          <p className="text-3xl text-emerald-500 font-medium mb-4">
            Uspješno poslan email za promjenu lozinke!
          </p>
          <p className="text-2xl text-gray-800">
            Provjerite svoju e-mail adresu.
          </p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
