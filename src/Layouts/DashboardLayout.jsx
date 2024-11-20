import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ChatList from "../components/ChatList";

function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-10 h-screen">
      <div className="flex-1 bg-black pt-5 px-3">
        <ChatList />
      </div>
      <div className="flex-[4] pt-5 px-3">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
