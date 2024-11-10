import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <div className="sidebar">Sidebar Menu</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
