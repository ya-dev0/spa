import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#161921] py-4 px-8 flex justify-between items-center">
      <Link href="/">
        <a className="text-white text-xl font-bold">KetoRecipeHub</a>
      </Link>
      <div className="flex gap-6">
        <Link href="/">
          <a className="text-white hover:text-red-500">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-white hover:text-red-500">About</a>
        </Link>
        <Link href="/contacts">
          <a className="text-white hover:text-red-500">Contacts</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
