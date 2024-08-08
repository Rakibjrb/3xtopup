"use client";

import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { dashboardLinks } from "@/utils/dashboardLinks";
import Link from "next/link";

export default function DashboardNav() {
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();
  const exactPath = path.split("/");

  return (
    <>
      <div className="p-4 lg:hidden z-10 flex justify-between">
        <button onClick={() => setShowMenu(true)}>
          <FaBarsStaggered className="text-3xl" />
        </button>

        <h2 className="text-xl capitalize">
          {exactPath[exactPath.length - 1]}
        </h2>
      </div>
      <div
        className={`fixed top-0 ${
          showMenu ? "left-0" : "-left-[9999px]"
        } z-20 w-[300px] bg-slate-200 min-h-screen p-5 transition-all duration-500`}
      >
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl">
            <span className="text-[#ff42a5]">3X</span>TOPUP
          </h2>
          <button onClick={() => setShowMenu(false)}>
            <IoMdClose className="text-3xl" />
          </button>
        </div>

        <ul className="mt-6">
          {dashboardLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>
                <div
                  className={`${
                    path === link.path && "bg-black text-white"
                  } px-2 py-3 hover:bg-black hover:text-white uppercase rounded-md transition-colors duration-200`}
                >
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* large device side bar */}
      <div
        className={`w-[300px] hidden lg:block bg-white min-h-screen sticky top-0 left-0 p-5`}
      >
        <h2 className="font-bold text-3xl">
          <span className="text-[#ff42a5]">3X</span>TOPUP
        </h2>

        <ul className="mt-6">
          {dashboardLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>
                <div
                  className={`${
                    path === link.path && "bg-black text-white"
                  } px-2 py-3 hover:bg-black hover:text-white uppercase rounded-md transition-colors duration-200`}
                >
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
