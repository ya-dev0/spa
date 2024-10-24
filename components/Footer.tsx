// components/Footer.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-6 px-8 flex flex-col items-center gap-4 bg-[#161921]">
      <Image
        src="/logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <p className="text-base font-bold text-white">@2023 KetoRecipeHub</p>
      <div className="flex items-center gap-6">
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={19}
            height={19}
            className="object-contain cursor-pointer"
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={19}
            height={19}
            className="object-contain cursor-pointer"
          />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter.svg"
            alt="Twitter"
            width={19}
            height={19}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
