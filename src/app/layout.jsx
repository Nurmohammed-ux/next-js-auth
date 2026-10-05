import { Poppins } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/provider/NextAuthProvider";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Next Authentication System",
  description: "Secure authentication with Credentials and GitHub using NextAuth.js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen selection:bg-indigo-600 selection:text-white">
        <NextAuthProvider>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main className="py-8">{children}</main>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
