"use client";

import { useState } from "react";

export default function SetDiamondPrice({ diamonds }) {
  const [topupAmount, setTopupAmount] = useState(null);
  const [price, setPrice] = useState(null);
  const [bonusMessage, setBonusMessage] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
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

      <form
        className={`mt-8 p-2 rounded-md shadow-2xl flex flex-col gap-y-4 max-w-sm ${
          topupAmount ? "" : "hidden"
        }`}
      >
        <div>
          <label htmlFor="diamonds">Diamonds</label> <br />
          <input
            type="text"
            placeholder="Diamonds"
            name="diamonds"
            className="w-full p-1 rounded-md outline-none"
            value={topupAmount || 0}
            onChange={(e) => setTopupAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Taka</label> <br />
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="w-full p-1 rounded-md outline-none"
            value={price || 0}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="px-3 py-2 rounded-md bg-[#ff42a5] hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Update Now
        </button>
      </form>
    </div>
  );
}
