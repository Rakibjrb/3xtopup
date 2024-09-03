"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function BuyDiamondsUI({ diamonds }) {
  const [topupAmount, setTopupAmount] = useState(null);
  const [price, setPrice] = useState(null);
  const [bonusMessage, setBonusMessage] = useState(null);
  const router = useRouter();
  const path = usePathname();

  const handleOrder = (e) => {
    e.preventDefault();
    const topUp = {
      diamond: topupAmount,
      price,
      uid: e.target.uid.value,
    };
    sessionStorage.setItem("order-info", JSON.stringify(topUp));
    router.push(`${path}/checkout`);
  };

  return (
    <div className="mt-6">
      <h2 className="font-bold text-2xl">
        Choose : {topupAmount && topupAmount + " Diamonds"}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        {diamonds.map((offer) => (
          <button
            key={offer._id}
            onClick={() => {
              setTopupAmount(offer.topup);
              setPrice(offer.price);
              setBonusMessage(offer.bonus === "none" ? null : offer.bonus);
            }}
            className={`${
              topupAmount === offer.topup
                ? "bg-black text-white"
                : "bg-slate-200"
            } py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-200`}
          >
            {offer.topup} Diamonds
          </button>
        ))}
      </div>
      {topupAmount && (
        <p className="text-xl mt-4 font-extrabold">
          {topupAmount} Diamonds {price} TK
        </p>
      )}
      {bonusMessage && <p className="text-xl mt-4">{bonusMessage}</p>}

      <div className="mt-8">
        <form onSubmit={handleOrder} className="flex flex-col">
          <label htmlFor="uid" className="text-xl">
            Enter Player ID/UID
          </label>
          <input
            name="uid"
            className="py-3 px-2 rounded-lg outline-none"
            type="number"
            placeholder="1618472347"
            required
          />

          <div
            className={` ${
              topupAmount ? "bg-[#6c88d4]" : "bg-[#e0e0e0] text-black"
            } w-1/2 py-3 px-5  rounded-lg text-white text-xl mt-4 text-center cursor-pointer`}
          >
            Add to Cart
          </div>
          <button
            disabled={topupAmount ? false : true}
            className={`${
              topupAmount ? "bg-[#ff42a5]" : "bg-[#e0e0e0]"
            } w-full py-3 px-5 rounded-lg text-xl mt-4`}
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
}
