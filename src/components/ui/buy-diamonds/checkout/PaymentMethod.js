import bkash from "@/assets/images/bkash.png";
import rocket from "@/assets/images/rocket.png";
import Image from "next/image";

export default function PaymentMethod({
  price,
  paymentMethod,
  setPaymentMethod,
}) {
  return (
    <div className="mt-2">
      <div className="space-y-3">
        <div
          onClick={() => setPaymentMethod("BKash")}
          className="bg-gray-300 py-2 px-4 rounded-lg flex justify-between items-center cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            {paymentMethod === "BKash" ? (
              <div className="w-6 h-6 rounded-full bg-black"></div>
            ) : (
              <div className="w-6 h-6 rounded-full border-4 border-black"></div>
            )}
            <h3 className="text-xl uppercase">BKash</h3>
          </div>
          <Image
            className="w-16 h-12"
            src={bkash}
            width={100}
            height={100}
            priority
            alt="BKash"
          />
        </div>
        <div
          onClick={() => setPaymentMethod("Rocket")}
          className="bg-gray-300 py-2 px-4 rounded-lg flex justify-between items-center cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            {paymentMethod === "Rocket" ? (
              <div className="w-6 h-6 rounded-full bg-black"></div>
            ) : (
              <div className="w-6 h-6 rounded-full border-4 border-black"></div>
            )}
            <h3 className="text-xl uppercase">Rocket</h3>
          </div>
          <Image
            className="w-16 h-12"
            src={rocket}
            width={100}
            height={100}
            priority
            alt="BKash"
          />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <p>
          ১. এই{" "}
          <span className="text-red-500 font-bold">
            {paymentMethod === "BKash" ? "01763263170" : "01732247599"}
          </span>{" "}
          {paymentMethod} Number এ{" "}
          <span className="text-red-500">{price}TK </span>
          পাঠান। (Send Money)
        </p>
        <p>
          ২. টাকা পাঠানোর পর, নিচে দেয়া {paymentMethod} Number বক্সে যে Number
          থেকে টাকা পাঠিয়েছেন সেই Number লিখুন।
        </p>
        <p>৩. {paymentMethod} Transaction ID বক্সে Transaction ID লিখুন।</p>
        <p>৪. Place Order Button এ Click করুন।</p>
      </div>

      <div className="mt-3 space-y-3">
        <div className="flex flex-col">
          <label htmlFor="paidNumber">Your {paymentMethod} Number</label>
          <input
            type="number"
            name="paidNumber"
            className="py-3 px-2 rounded-lg outline-none"
            placeholder="write here ..."
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="paidTRXID">{paymentMethod} Transaction ID</label>
          <input
            type="text"
            name="paidTRXID"
            className="py-3 px-2 rounded-lg outline-none uppercase"
            placeholder="write here ..."
            required
          />
        </div>
      </div>
    </div>
  );
}
