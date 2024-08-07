"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import Link from "next/link";
import "./signup.css";
import usePublicServer from "@/utils/hooks/server/usePublicServer";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const axios = usePublicServer();
  const router = useRouter();

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const repassword = e.target.repassword.value;

    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    if (!regex.test(info.password)) {
      toast(
        "Please make sure you entered uppercase, \n\n number and one spacial character.",
        {
          duration: 8000,
        }
      );
      return;
    }

    if (info.password !== repassword) {
      toast.error("Re-type password doesn't matched");
      return;
    }

    setLoading(true);
    axios
      .post("/create-user", info)
      .then((res) => {
        if (res.data.message == "user registered on this email") {
          setLoading(false);
          return toast.error(res.data.message);
        }
        toast.success(res.data.message);
        setLoading(false);
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.repassword.value = "";
        router.push("/auth/sign-in");
      })
      .catch((e) => {
        setLoading(false);
        toast.error("something went wrong");
      });
  };

  return (
    <div className="px-4 py-6 md:px-0 flex justify-center items-center w-full min-h-screen signup-container">
      <form
        onSubmit={handleCreateAccount}
        className="flex flex-col gap-5 p-8 border border-[#f948b2] rounded-lg"
      >
        <div>
          <label htmlFor="name" className="text-white">
            Enter Full Name
            <input
              name="name"
              className="mt-3 w-full border-2 border-[#f948b2] p-2 rounded-md outline-none bg-transparent placeholder:text-white"
              type="text"
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
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
        <div className="relative">
          <label htmlFor="repassword" className="text-white">
            Re-Type password
            <input
              name="repassword"
              className="mt-3 w-full border-2 border-[#f948b2] p-2 rounded-md outline-none bg-transparent placeholder:text-white"
              type={`${showPass ? "text" : "password"}`}
              placeholder="re-type password here"
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
              "Create Account"
            )}
          </button>
          <h3 className="text-center text-xl my-3 text-white">
            Already have an account?
          </h3>
          <Link
            href={"/auth/sign-in"}
            className="w-full flex justify-center bg-[#8758f1] hover:bg-gray-300 py-3 rounded-md uppercase transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}
