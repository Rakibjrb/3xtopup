import CheckOut from "@/components/ui/buy-diamonds/checkout/CheckOut";

export default function CheckoutPage() {
  return (
    <div className="p-3">
      <h1 className="bg-green-500 py-4 text-center text-2xl uppercase rounded-lg">
        Checkout Now
      </h1>

      <CheckOut />
    </div>
  );
}
