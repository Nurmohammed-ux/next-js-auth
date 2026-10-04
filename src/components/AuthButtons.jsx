"use client";

import Link from "next/link";
import LoginButton from "./LoginButton";
import { signOut, useSession } from "next-auth/react";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div className="space-x-4">
      {session.status == "authenticated" ? (
        <button className="btn" onClick={() => signOut()}>
          LogOut
        </button>
      ) : (
        <>
          <LoginButton />
          <Link href={"/register"} className="btn">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
