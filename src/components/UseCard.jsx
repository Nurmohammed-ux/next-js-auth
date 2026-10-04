"use client";
import { useSession } from "next-auth/react";

const UseCard = () => {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <h3 className="font-bold">Use Client</h3>
      <div className="border p-6">{JSON.stringify(session)}</div>
    </div>
  );
};

export default UseCard;
