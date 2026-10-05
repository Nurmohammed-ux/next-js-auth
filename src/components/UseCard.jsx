"use client";
import { useSession } from "next-auth/react";

const UseCard = () => {
  const session = useSession();
  console.log(session);

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-left">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
          Use Client Session
        </h3>
        <span className={`inline-block w-2 h-2 rounded-full ${session.status === "authenticated" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}></span>
      </div>
      <pre className="bg-gray-50 border border-gray-200/60 rounded-xl p-4 text-sm font-mono text-gray-700 overflow-x-auto max-h-48">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
};

export default UseCard;
