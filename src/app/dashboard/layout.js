import DashboardNav from "@/components/ui/dashboardNav/DashboardNav";

export default function layout({ children }) {
  return (
    <div className="lg:flex bg-slate-50">
      <div>
        <DashboardNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
