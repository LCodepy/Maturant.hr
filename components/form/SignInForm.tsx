"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const signInData = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (signInData?.error) {
      setError("Invalid email or password!");
      setIsLoading(false);
    } else {
      router.push("/videos");
      router.refresh();
    }
  };

  const loginWithGoogle = async () => {
    try {
      setIsGoogleLoading(true);
      await signIn("google", {
        callbackUrl: "http://localhost:3000/videos",
      });
    } catch (error) {
      setIsGoogleLoading(false);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      <h1 className="text-3xl font-semibold mb-8 text-left text-gray-800">
        Sign in to your account
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className="border p-2 rounded-md mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          className="border p-2 rounded-md mb-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
        />

        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                checked={rememberMe}
                className="peer h-4 w-4 cursor-pointe transition-all appearance-none rounded shadow hover:shadow-md border focus:ring-2 focus:ring-slate-200 border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                id="check-1"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>

            <label
              className="cursor-pointer ml-2 text-slate-600 text-sm"
              htmlFor="check-1"
            >
              Remember Me
            </label>
          </div>
          <a
            href="/forgot-password"
            className="text-sm text-rose-500 hover:text-rose-900"
          >
            Forgot Password?
          </a>
        </div>

        {error && <p className="text-red-500 text-center my-2">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white font-semibold p-2 mt-6 rounded-md hover:bg-gray-800 active:bg-black"
        >
          Sign In
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-md">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="bg-white text-gray-800 p-2 rounded-md border border-black hover:bg-slate-200"
          onClick={loginWithGoogle}
          disabled={isGoogleLoading}
        >
          {isGoogleLoading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-4 animate-spin inline"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          )}
          Sign in with Google
        </button>

        <p className="text-center text-md text-gray-600 mt-8">
          Don't have an account? Please{" "}
          <Link
            href="/sign-up"
            className="text-center text-md text-rose-600 hover:text-rose-900"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
