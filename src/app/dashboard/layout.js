import DashboardNav from "@/components/ui/dashboardNav/DashboardNav";
import { Toaster } from "react-hot-toast";

export default function layout({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto lg:flex bg-slate-50">
      <Toaster position="top-center" />
      <div>
        <DashboardNav />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
