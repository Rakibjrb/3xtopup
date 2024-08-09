import DashboardNav from "@/components/ui/dashboardNav/DashboardNav";

export default function layout({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto lg:flex bg-slate-50">
      <div>
        <DashboardNav />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
