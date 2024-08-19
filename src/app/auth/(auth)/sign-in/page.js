"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import usePublicServer from "@/utils/hooks/server/usePublicServer";
import "../sign-up/signup.css";

export default function SinIn() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const axios = usePublicServer();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const logininfo = {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: false,
    };

    setLoading(true);

    const res = await signIn("credentials", logininfo);
    if (res.error) {
      setLoading(false);
      toast.error(res.error);
      return;
    }

    const tokenResponse = await axios.post("/create-accessToken", logininfo);
    const token = tokenResponse.data.accessToken;
    sessionStorage.setItem("access-token", token);

    setLoading(false);
    toast.success("Login Success ...");
    e.target.email.value = "";
    e.target.password.value = "";
    setTimeout(() => router.push("/dashboard/buy-diamonds"), 1500);
  };

  return (
    <div className="px-4 py-6 md:px-0 flex justify-center items-center w-full min-h-screen signup-container">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-5 p-8 border border-[#f948b2] rounded-lg"
      >
        <div>
          <label htmlFor="email" className="text-white">
            Enter your email
            <input
              name="email"
              className="mt-3 w-full border-2 border-[#f948b2] p-2 rounded-md outline-none bg-transparent placeholder:text-white"
              type="email"
              placeholder="Enter email here"
              required
            />
          </label>
        </div>
        <div className="relative">
          <label htmlFor="password" className="text-white">
            password
            <input
              name="password"
              className="mt-3 w-full border-2 border-[#f948b2] p-2 rounded-md outline-none bg-transparent placeholder:text-white"
              type={`${showPass ? "text" : "password"}`}
              placeholder="type password here"
              required
            />
          </label>
          <div
            onClick={() => setShowPass(!showPass)}
            className="inline-block cursor-pointer absolute top-12 right-3 text-white"
          >
            {showPass ? (
              <IoMdEyeOff className="text-xl" />
            ) : (
              <IoMdEye className="text-xl" />
            )}
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full flex justify-center bg-[#f948b2] hover:bg-gray-300 py-3 rounded-md uppercase transition-colors duration-200"
          >
            {loading ? (
              <ImSpinner9 className="text-xl animate-spin" />
            ) : (
              "Login"
            )}
          </button>
          <h3 className="text-center text-xl my-3 text-white">
            Create a new account
          </h3>
          <Link
            href={"/auth/sign-up"}
            className="w-full flex justify-center bg-[#8758f1] hover:bg-gray-300 py-3 rounded-md uppercase transition-colors duration-200"
          >
            Sign Up Now
          </Link>
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}
