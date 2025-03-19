"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/app/api/send/new-verification";

const VerifyEmail = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Get the token from search params
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // Ensures onSubmit is created only when either token, success or error vars change
  const onSubmit = useCallback(() => {
    if (success || error) return; // If the process is over we do not want to start it again

    if (!token) {
      setError("Token nije pronađen!");
      return;
    }

    newVerification(token) // Server function that updates the user and sets user's emailVerified to true
      .then((data) => {
        // Set success or error
        if (data.success) {
          setSuccess(data.success);
        } else if (data.error) {
          setError(data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, success, error]); // If token, success or error change the onSubmit will re-compile

  // Calls the onSubmit function only once - when the page is loaded, thats why dependencies are []
  useEffect(() => {
    onSubmit();
  }, []);

  // Displays title and error or success message
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {!success && !error && (
        <h2 className="text-4xl mb-4">Potvrđujemo Vašu Email Adresu...</h2>
      )}
      {success && (
        <>
          <p className="text-black text-3xl font-medium">
            Uspješno ste potvrdili email adresu!
          </p>
          <Link
            className="mt-8 py-2 px-8 bg-rose-500 rounded-md text-2xl text-white hover:bg-rose-400 active:bg-rose-500"
            href="/sign-in"
          >
            Log in
          </Link>
        </>
      )}
      {error && (
        <>
          <p className="text-red-500 text-3xl font-medium">
            Došlo je do greške: {error}
          </p>
          <p className="text-black text-lg mt-4">
            Pokušajte kopirati link iz email-a u vaš preglednik, ako to ne radi
            kontaktirajte nas.
          </p>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
