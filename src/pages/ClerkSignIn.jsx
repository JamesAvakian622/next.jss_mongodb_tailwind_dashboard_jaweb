import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function ClerkSignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-2 p-4 dark:bg-boxdark-2">
      <SignIn
        routing="path"
        path="/auth/clerk/sign-in"
        signUpUrl="/auth/clerk/sign-up"
      />
    </div>
  );
}
