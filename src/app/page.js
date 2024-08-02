import { FaYoutube, FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="banner min-h-screen text-white">
        <div className="max-w-7xl mx-auto">
          <nav className="w-full flex justify-between items-center pt-8">
            <div className="flex items-center">
              <h2 className="font-bold text-3xl">
                <span className="color1">3X</span>TOPUP
              </h2>
            </div>
            <ul className=" flex items-center gap-8">
              <li>
                <Link
                  href=""
                  className="hover:text-[#ff42a5] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li className="text-white py-2 px-5 rounded-md flex gap-x-3 bg-[#ff42a6]">
                Follow Us On{" "}
                <Link href="">
                  <FaYoutube className="text-xl" />
                </Link>{" "}
                <Link href="">
                  <FaFacebookF className="text-xl" />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="min-h-[calc(100vh-72px)] flex justify-between items-center">
            <div className="w-3/4">
              <h1 className="styled-text text-[74px] font-extrabold">
                DIAMOND TOP UP
              </h1>
              <h2 className="uppercase text-4xl font-bold">
                <span className="text-[#ff42a5]">Garena</span> Free Fire
              </h2>
              <ul className="my-7">
                <li>Super Fast Diamond Delivery</li>
                <li>Game ID BUY/SELL</li>
                <li>24/7 Support</li>
              </ul>
              <div className="flex gap-x-6">
                <button className="px-5 py-3 bg-[#ff42a5] rounded-full uppercase text-white">
                  Get Started
                </button>
                <button className="px-5 py-3 bg-[#3e9ee3] rounded-full uppercase text-white">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
