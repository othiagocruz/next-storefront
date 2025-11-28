"use client";
import { useUser } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginButton() {
  const user = useUser();

  if (user) {
    return (
      <>
        Hello{" "}
        <Link href="handler/account-settings" className="hover:text-primary/80">
          {user.displayName || user.primaryEmail}
        </Link>
        ,{" "}
        <Link href="/handler/signout" className="hover:text-primary/80">
          Logout
        </Link>
      </>
    );
  }
  return (
    <Button className="max-sm:w-full">
      <Link href="/handler/login">Login</Link>
    </Button>
  );
}
