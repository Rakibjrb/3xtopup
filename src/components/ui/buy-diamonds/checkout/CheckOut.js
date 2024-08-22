"use client";

import { useEffect, useState } from "react";
import PaymentMethod from "./PaymentMethod";
import moment from "moment";
import useSecureServer from "@/utils/hooks/server/useSecureServer";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CheckOut() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("BKash");
  const axiosSecure = useSecureServer();
  const router = useRouter();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderInfo = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      paymentMethod,
      paidNumber: e.target.paidNumber.value,
      paidTRXID: e.target.paidTRXID.value,
      ...info,
      status: "pending",
      date: moment().format("DD/MM/YYYY"),
    };

    setLoading(true);

    axiosSecure
      .post("/place-order", orderInfo)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        (e.target.name.value = ""),
          (e.target.phone.value = ""),
          (e.target.email.value = ""),
          (e.target.paidNumber.value = ""),
          (e.target.paidTRXID.value = ""),
          toast.success("Order Successfully Placed ...");
        toast("Please wait for confirmation and complete the order", {
          duration: 8000,
        });

        router.push("/dashboard/orders");
        sessionStorage.removeItem("order-info");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    const orderInfo = JSON.parse(sessionStorage.getItem("order-info"));
    setInfo(orderInfo);
  }, []);

  return (
    <form onSubmit={handlePlaceOrder}>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Billing Details</h2>
          <div className="mt-5 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xl">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                className="py-3 px-2 rounded-lg outline-none"
                type="text"
                placeholder="Write here..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-xl">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                className="py-3 px-2 rounded-lg outline-none"
                type="number"
                placeholder="Write here..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xl">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                className="py-3 px-2 rounded-lg outline-none"
                type="email"
                placeholder="Write here..."
                required
              />
            </div>
          </div>
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">Order</h2>

          <div className="flex gap-2 py-3">
            <div className="w-3/4 space-y-4">
              <h3 className="font-bold text-xl">Product</h3>
              <p>{info?.diamond}</p>
              <p>ID/UID</p>
              <p className="font-bold text-xl">Pay</p>
            </div>
            <div className="w-1/4 space-y-4">
              <h3 className="font-bold text-xl">Subtotal</h3>
              <p>{info?.price} TK</p>
              <p className="font-bold">{info?.uid}</p>
              <p className="font-bold text-xl">{info?.price} TK</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-4">Choose Payment Method</h2>
          <PaymentMethod
            price={info?.price}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <button className="flex justify-center text-center mt-3 py-3 text-2xl font-bold uppercase bg-blue-400 hover:bg-slate-300 transition-all duration-200 w-full rounded-lg">
            {loading ? <ImSpinner2 className="text-3xl" /> : "Place Order"}
          </button>
        </div>
      </div>
    </form>
  );
}
