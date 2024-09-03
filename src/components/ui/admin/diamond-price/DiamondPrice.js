"use client";

import useSecureServer from "@/utils/hooks/server/useSecureServer";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

export default function SetDiamondPrice({ diamonds }) {
  const [loading, setLoading] = useState(false);
  const [offerId, setOfferId] = useState(null);
  const [topupAmount, setTopupAmount] = useState(null);
  const [price, setPrice] = useState(null);
  const [bonusMessage, setBonusMessage] = useState(null);
  const axios = useSecureServer();

  const handleDiamondPriceUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    const newData = {
      offerId,
      topupAmount,
      price,
    };

    axios
      .post("/update-diamonds", newData)
      .then((res) => {
        setLoading(false);
        toast.success("Update Successfull");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Update Error");
        console.log(err);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {diamonds.map((offer) => (
          <button
            key={offer._id}
            onClick={() => {
              setOfferId(offer._id);
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
        onSubmit={handleDiamondPriceUpdate}
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
            value={topupAmount || ""}
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
            value={price || ""}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="flex justify-center px-3 py-2 rounded-md bg-[#ff42a5] hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {loading ? (
            <ImSpinner9 className="text-xl animate-spin" />
          ) : (
            "Update Now"
          )}
        </button>
      </form>
    </div>
  );
}
