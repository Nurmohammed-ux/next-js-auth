import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import UseCard from "@/components/UseCard";
import { getServerSession } from "next-auth";
import AuthButtons from "@/components/AuthButtons";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 py-12 max-w-4xl mx-auto gap-8 text-center">
      
      {/* User Card Component */}
      <div className="w-full flex justify-center">
        <UseCard />
      </div>

      {/* Tech Stack Badge Bar */}
      <div className="inline-flex items-center gap-6 px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-full">
        <FaReact size={32} className="animate-spin text-sky-400 [animation-duration:8s]" />
        <IoShieldCheckmarkSharp size={36} className="text-amber-500" />
        <RiNextjsLine size={36} className="text-gray-900" />
        <SiMongodb size={36} className="text-emerald-600" />
      </div>

      {/* Hero Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">
          Secure Authentication System
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-6">
          NEXT AUTH
        </h1>
      </div>

      {/* Auth Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <AuthButtons />
      </div>

      {/* Server Session Info Card */}
      <div className="w-full mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-left">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            Use Server Session
          </h3>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
        <pre className="bg-gray-50 border border-gray-200/60 rounded-xl p-4 text-sm font-mono text-gray-700 overflow-x-auto max-h-48">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

    </div>
  );
}