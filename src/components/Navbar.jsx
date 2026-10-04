import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-xl p-4 space-x-5 mt-4 text-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/public"}>Public</Link>
        <Link href={"/private"}>Private</Link>
        <Link href={"/admin"}>Admin</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Navbar;