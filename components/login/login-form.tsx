"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppConstants } from "@/constants/constants";
import { CompanyLogo } from "@/icons/logo";
import { signIn } from "next-auth/react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const handleLogin = async () => {
    await signIn("google", {
      redirectTo: window.location.origin + "/dashboard",
    });
  };

  return (
    <div className="flex flex-col gap-6" {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="flex flex-row items-center gap-3">
            <CompanyLogo />
            <p className="text-app-textPrimary text-2xl font-bold">
              {AppConstants.COMPANY_NAME}
            </p>
          </div>
          <p className="text-muted-foreground">
            Sign in to your account using Google
          </p>
        </div>
        <Button
          className="w-full border-app-primaryBorder border rounded-md hover:bg-app-secondary"
          onClick={handleLogin}
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Sign in with Google
        </Button>
      </div>

      <div className="text-center text-xs text-muted-foreground">
        By signing in, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
