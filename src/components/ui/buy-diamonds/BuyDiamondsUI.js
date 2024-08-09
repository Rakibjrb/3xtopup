"use client";

import { useState } from "react";

const diamondsOffers = [
  { topup: 25, price: 25 },
  { topup: 50, price: 40 },
  { topup: 115, price: 72 },
  { topup: 240, price: 144 },
  { topup: 355, price: 216 },
  { topup: 480, price: 288 },
  { topup: 610, price: 360 },
  { topup: 725, price: 432 },
  { topup: 850, price: 504 },
  { topup: 965, price: 576 },
  { topup: 1050, price: 648 },
  { topup: 1240, price: 720 },
  { topup: 1420, price: 864 },
  { topup: 1850, price: 1080 },
  { topup: 2530, price: 1440 },
  { topup: 10120, price: 5770 },
];

const diamondsOffers2 = [
  {
    topup: "weekly",
    price: 144,
    bonus:
      "সর্বমোট ৪৪৫ ডায়মন্ড পাবেন (Top up এর সাথে সাথেই ২০০ ডায়মন্ড পাবেন এবং প্রতিদিন ৩৫ ডায়মন্ড করে ৭ দিনে ২৪৫ ডায়মন্ড)",
  },
  {
    topup: "monthly",
    price: 720,
    bonus:
      "সর্বমোট ২৫০০ ডায়মন্ড পাবেন (Top up এর সাথে সাথেই ১০০০ ডায়মন্ড পাবেন এবং প্রতিদিন ৫০ ডায়মন্ড করে ৩০ দিনে ১৫০০ ডায়মন্ড)",
  },
  {
    topup: "level up pass",
    price: 144,
    bonus:
      "Level Up Pass একটা Player ID/UID তে একবার নেয়া যায়। আগে থেকে Player ID/UID তে Level Up Pass নেয়া থাকলে 243 Diamonds ডেলিভারি দেয়া হবে। Level 30 এ - 800 Diamonds",
  },
];

export default function BuyDiamondsUI() {
  const [topupAmount, setTopupAmount] = useState(null);
  const [price, setPrice] = useState(null);
  const [bonusMessage, setBonusMessage] = useState(null);

  return (
    <div className="mt-6">
      <h2 className="font-bold text-2xl">
        Choose : {topupAmount && topupAmount + " Diamonds"}
      </h2>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {diamondsOffers.map((offer, index) => (
          <button
            key={index + "offersfjkaslf"}
            onClick={() => {
              setTopupAmount(offer.topup);
              setPrice(offer.price);
              setBonusMessage(null);
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
        {diamondsOffers2.map((offer, index) => (
          <button
            key={index + "offersfjkasfasdfasdfsflf"}
            onClick={() => {
              setTopupAmount(offer.topup);
              setPrice(offer.price);
              setBonusMessage(offer.bonus);
            }}
            className={`${
              topupAmount === offer.topup
                ? "bg-black text-white"
                : "bg-slate-200"
            } py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-200`}
          >
            {offer.topup}
          </button>
        ))}
      </div>
      {topupAmount && (
        <p className="text-xl mt-4">
          {topupAmount} Diamonds {price} TK
        </p>
      )}
      {bonusMessage && <p className="text-xl mt-4">{bonusMessage}</p>}

      <div className="mt-8">
        <form className="flex flex-col">
          <label htmlFor="uid" className="text-xl">
            Enter Player ID/UID
          </label>
          <input
            className="py-3 px-2 rounded-lg outline-none"
            type="number"
            placeholder="write here ..."
            required
          />

          <button
            disabled={topupAmount ? false : true}
            className={` ${
              topupAmount ? "bg-[#6c88d4]" : "bg-[#e0e0e0] text-black"
            } w-1/2 py-3 px-5  rounded-lg text-white text-xl mt-4`}
          >
            Add to Cart
          </button>
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
