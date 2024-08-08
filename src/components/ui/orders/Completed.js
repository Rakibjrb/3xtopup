import OrderTable from "./OrderTable";

export default function Completed() {
  let orders = false;

  return (
    <>
      {!orders ? (
        <div className="flex justify-center items-center min-h-[400px] bg-white">
          <h1 className="text-4xl">No Completed Orders</h1>
        </div>
      ) : (
        <OrderTable />
      )}
    </>
  );
}
