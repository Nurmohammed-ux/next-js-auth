import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import React from "react";
import { SiAuthelia } from "react-icons/si";

const RegisterPage = () => {
  return (
    <div className="container mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-3 items-stretch h-[80vh]">
      <div className="md:col-span-2 bg-white border border-gray-100 p-8 lg:pl-30 shadow-sm flex flex-col justify-center">
        <h2 className="text-2xl mb-6 font-bold border-l-4 border-indigo-600 pl-4 text-gray-900">
          Welcome to Register Page
        </h2>
        <RegisterForm />
      </div>

      <div className="bg-gray-900 text-white p-8 flex items-center justify-center flex-col gap-6 shadow-sm">
        <SiAuthelia size={80} className="text-indigo-400 animate-pulse" />
        <Link
          href={"/"}
          className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl transition-colors border border-white/10"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
