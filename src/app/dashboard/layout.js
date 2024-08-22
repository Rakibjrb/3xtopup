"use client";

import DashboardNav from "@/components/ui/dashboardNav/DashboardNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export default function layout({ children }) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-2xl mx-auto lg:flex bg-slate-50">
          <Toaster position="top-center" />
          <div>
            <DashboardNav />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </QueryClientProvider>
    </>
  );
}
