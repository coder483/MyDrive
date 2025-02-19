"use client"
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,

} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="container mx-auto flex flex-row md:flex-row items-center justify-between">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl text-black mb-4 md:mb-0"
        >
          <Image src="/logo.png" width="50" height="50" alt="file drive logo" className=" rounded-sm" />
          My-Drive
        </Link>

        <SignedIn>
          <Button variant={"outline"} className="hidden md:flex mb-4 md:mb-0">
            <Link href="/dashboard/files">Your Files</Link>
          </Button>
        </SignedIn>

        <div className="flex gap-2 items-center">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
