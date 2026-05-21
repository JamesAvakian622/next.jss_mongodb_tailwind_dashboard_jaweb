import React from "react";
import { SignUp } from "@clerk/clerk-react";

export default function ClerkSignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-2 p-4 dark:bg-boxdark-2">
      <SignUp
        routing="path"
        path="/auth/clerk/sign-up"
        signInUrl="/auth/clerk/sign-in"
      />
    </div>
  );
}
