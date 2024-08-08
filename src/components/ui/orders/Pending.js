import OrderTable from "./OrderTable";

export default function Pending() {
  let orders = false;
  orders = true;

  return (
    <>
      {!orders ? (
        <div className="flex justify-center items-center min-h-[400px] bg-white">
          <h1 className="text-4xl">No Pending Orders</h1>
        </div>
      ) : (
        <OrderTable />
      )}
    </>
  );
}
