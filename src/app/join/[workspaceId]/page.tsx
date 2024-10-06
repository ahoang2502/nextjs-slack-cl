"use client";

import Image from "next/image";
import Link from "next/link";
import VerificationInput from "react-verification-input";

import { Button } from "@/components/ui/button";

const JoinWorkspaceIdPage = () => {

    
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-8 bg-white p-8 rounded-lg shadow-md">
      <Image src="/logo.ico" width={60} height={60} alt="logo" />

      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1 className="text-2xl font-bold">Join workspace</h1>

          <p className="text-md text-muted-foreground">
            Enter the workspace code to join
          </p>
        </div>

        <VerificationInput
          length={6}
          classNames={{
            container: "flex gap-x-2",
            character:
              "uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium text-gray-500",
            characterInactive: "bg-muted",
            characterSelected: "bg-white text-black",
            characterFilled: "bg-white text-black",
          }}
          autoFocus
        />
      </div>

      <div className="flex gap-x-4">
        <Button size="lg" variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default JoinWorkspaceIdPage;
