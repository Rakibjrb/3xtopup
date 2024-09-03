import SetDiamondPrice from "@/components/ui/admin/diamond-price/DiamondPrice";
import { getDiamonds } from "@/utils/diamonds";

export default async function DiamondPrice() {
  const diamonds = await getDiamonds();

  return (
    <div className="p-4">
      <SetDiamondPrice diamonds={diamonds} />
    </div>
  );
}
