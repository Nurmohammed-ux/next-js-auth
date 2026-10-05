import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50 w-full">
      <nav className="max-w-4xl mx-auto px-6 py-4 bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm rounded-2xl flex flex-wrap items-center justify-center sm:justify-between gap-4">
        
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="text-lg font-extrabold text-gray-900 tracking-tight hover:text-emerald-500 transition-colors"
        >
          NextAuth<span className="text-emerald-500">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-gray-600">
          <Link
            href="/"
            className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-emerald-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/public"
            className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-emerald-500 transition-colors"
          >
            Public
          </Link>
          <Link
            href="/private"
            className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-emerald-500 transition-colors"
          >
            Private
          </Link>
          <Link
            href="/admin"
            className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-emerald-500 transition-colors"
          >
            Admin
          </Link>
          <Link
            href="/dashboard"
            className="px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-emerald-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;