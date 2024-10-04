"use client"
import Image from "next/image";
import React from "react";

import { useRouter } from 'next/navigation'

// import Logo from "../../../assets/Group 7.png";


const Header = () => {
  const router = useRouter()
  return (
    <div className="max-w-[1600px] mx-0 my-auto px-0 py-0 w-[100%] bg-[#fffdf9] fixed top-[0] z-50 border-b">
      <div className="w-full flex items-center justify-between px-4 sm:px-32 py-3">
        <Image src={""} alt="Logo" width={161} height={44} onClick={() => router.push("/")} className="cursor-pointer	" />
        
      </div>
    </div>
  );
};

export default Header;
