"use client";

import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { dashboardLinks } from "@/utils/dashboardLinks";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useSecureServer from "@/utils/hooks/server/useSecureServer";

export default function DashboardNav() {
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const axios = useSecureServer();
  const path = usePathname();
  const exactPath = path.split("/");

  const logOutHandler = () => {
    sessionStorage.removeItem("access-token");
    signOut({ callbackUrl: "/" });
  };

  useEffect(() => {
    axios
      .get("/user-info")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className={`${
          !logOutModal && "hidden"
        } bg-slate-200 rounded-lg w-[320px] p-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`}
      >
        <h2 className="text-center text-xl uppercase">Are you sure?</h2>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => setLogOutModal(false)}
            className="flex-1 text-sm py-2 px-4 bg-slate-300 hover:bg-white transition-all duration-300 rounded-lg uppercase"
          >
            Cancel
          </button>
          <button
            onClick={logOutHandler}
            className="flex-1 text-sm py-2 px-4 bg-red-400 hover:bg-white transition-all duration-300 rounded-lg uppercase"
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="p-4 lg:hidden z-10 flex justify-between">
        <button onClick={() => setShowMenu(true)}>
          <FaBarsStaggered className="text-3xl" />
        </button>

        <h2 className="text-xl capitalize">
          {exactPath[exactPath.length - 1]}
        </h2>
      </div>
      {/* mobile devices dashboard side bar */}
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

        <div className="mt-8 space-y-2">
          <p className="uppercase text-xs">ID - {user?._id}</p>
          <h3>{user?.name}</h3>
          <h3>{user?.email}</h3>
          <h3>
            {user?.phone === "none" ? (
              <Link
                href={"/dashboard/profile"}
                className="text-rose-400 hover:text-rose-600"
              >
                Add Phone
              </Link>
            ) : (
              user?.phone
            )}
          </h3>
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
          <li>
            <button
              onClick={() => {
                setLogOutModal(true);
              }}
              className={`w-full text-left px-2 py-3 hover:bg-black hover:text-white uppercase rounded-md transition-colors duration-200`}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
      {/* large device side bar */}
      <div
        className={`w-[300px] hidden lg:block bg-white min-h-screen sticky top-0 left-0 p-5`}
      >
        <h2 className="font-bold text-3xl">
          <span className="text-[#ff42a5]">3X</span>TOPUP
        </h2>

        <div className="mt-8 space-y-2">
          <p className="uppercase text-xs">ID - {user?._id}</p>
          <h3>{user?.name}</h3>
          <h3>{user?.email}</h3>
          <h3>
            {user?.phone === "none" ? (
              <Link
                href={"/dashboard/profile"}
                className="text-rose-400 hover:text-rose-600"
              >
                Add Phone
              </Link>
            ) : (
              user?.phone
            )}
          </h3>
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
          <li>
            <button
              onClick={() => {
                setLogOutModal(true);
              }}
              className={`w-full text-left px-2 py-3 hover:bg-black hover:text-white uppercase rounded-md transition-colors duration-200`}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
