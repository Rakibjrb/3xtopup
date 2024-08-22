import { useQuery } from "@tanstack/react-query";
import OrderTable from "./OrderTable";
import useSecureServer from "@/utils/hooks/server/useSecureServer";
import { ImSpinner2 } from "react-icons/im";

export default function Pending() {
  const axios = useSecureServer();

  const { data, isLoading } = useQuery({
    queryKey: ["user-pending-order"],
    queryFn: async () => {
      const res = await axios.get("/get-orders/:pending");
      return res.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <div className="min-h-[400px] w-full flex justify-center items-center">
          <ImSpinner2 className="text-xl animate-spin" />
        </div>
      ) : !data?.length ? (
        <div className="flex justify-center items-center min-h-[400px] bg-white">
          <h1 className="text-4xl">No Pending Orders</h1>
        </div>
      ) : (
        <OrderTable orders={data} />
      )}
    </>
  );
}
