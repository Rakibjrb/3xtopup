export default function OrderTable({ orders }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left text-sm md:text-xl">No.</th>
          <th className="text-left text-sm md:text-xl">Amount</th>
          <th className="text-left text-sm md:text-xl">Date</th>
          <th className="text-left text-sm md:text-xl">Payment Method</th>
          <th className="text-left text-sm md:text-xl">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, i) => (
          <tr key={order?._id}>
            <td className="py-2 text-sm md:text-xl">{i + 1}</td>
            <td className="py-2 text-sm md:text-xl">{order?.price} TK</td>
            <td className="py-2 text-sm md:text-xl">{order?.date}</td>
            <td className="py-2 text-sm md:text-xl">{order?.paymentMethod}</td>
            <td>
              <div
                className={`${
                  order?.status === "pending"
                    ? "bg-red-400 py-1 px-3 rounded-md"
                    : "bg-green-400 py-1 px-3 rounded-md"
                } py-2 text-sm md:text-xl w-[90px] md:w-[130px] text-center`}
              >
                {order?.status}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
