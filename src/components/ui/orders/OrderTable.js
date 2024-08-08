export default function OrderTable() {
  let status = "pending";

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
        <tr>
          <td className="py-2 text-sm md:text-xl">1</td>
          <td className="py-2 text-sm md:text-xl">150 TK</td>
          <td className="py-2 text-sm md:text-xl">08/08/2024</td>
          <td className="py-2 text-sm md:text-xl">Rocket</td>
          <td>
            <div
              className={`${
                status === "pending"
                  ? "bg-red-400 py-1 px-3 rounded-md"
                  : "bg-green-400 py-1 px-3 rounded-md"
              } py-2 text-sm md:text-xl w-[80px] md:w-[100px]`}
            >
              Pending
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
