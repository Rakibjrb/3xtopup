"use client";

import { useState } from "react";
import Pending from "./Pending";
import Completed from "./Completed";

export default function Tab() {
  const [active, setActive] = useState("pending");

  return (
    <div className="mt-6">
      <div className="flex mb-6">
        <button
          onClick={() => setActive("pending")}
          className={`${
            active === "pending" ? "bg-black text-white " : "bg-white"
          } flex-1 w-1/2 py-5 rounded-md uppercase`}
        >
          Pending
        </button>
        <button
          onClick={() => setActive("completed")}
          className={`${
            active === "completed" ? "bg-black text-white " : "bg-white"
          } flex-1 w-1/2 py-5 rounded-md uppercase`}
        >
          Completed
        </button>
      </div>

      {active === "pending" ? <Pending /> : <Completed />}
    </div>
  );
}
