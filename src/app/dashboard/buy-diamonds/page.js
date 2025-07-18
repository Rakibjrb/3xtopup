import Image from "next/image";
import buyDiamondsBanner from "@/assets/images/Diamond-banner.webp";
import BuyDiamondsUI from "@/components/ui/buy-diamonds/BuyDiamondsUI";
import Description from "@/components/ui/buy-diamonds/Description";
import { getDiamonds } from "@/utils/diamonds";

export default async function BuyDiamonds() {
  const diamonds = await getDiamonds();

  return (
    <div className="p-3">
      <div className="lg:flex gap-8">
        <div className="flex-1">
          <Image
            className="w-full rounded-lg"
            src={buyDiamondsBanner}
            width={500}
            height={500}
            priority
            alt="buy diamnod image"
          />
        </div>
        <div className="mt-6 lg:mt-0 flex-1">
          <h1 className="text-left styled-text text-4xl  md:text-6xl lg:text-5xl font-extrabold md:text-left">
            Diamond Top Up BD
          </h1>

          <BuyDiamondsUI diamonds={diamonds} />
        </div>
      </div>
      <Description />
    </div>
  );
}
