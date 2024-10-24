// components/Navbar.tsx

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#161921] py-4 px-8 flex justify-between items-center">
      <Link href="/">
        <span className="text-white text-xl font-bold cursor-pointer">
          KetoRecipeHub
        </span>
      </Link>
      <div className="flex gap-6">
        <Link href="/">
          <span className="text-white hover:text-red-500 cursor-pointer">
            Home
          </span>
        </Link>
        <Link href="/about">
          <span className="text-white hover:text-red-500 cursor-pointer">
            About
          </span>
        </Link>
        <Link href="/contacts">
          <span className="text-white hover:text-red-500 cursor-pointer">
            Contacts
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
