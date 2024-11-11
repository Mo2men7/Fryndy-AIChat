import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import Chat from "./Routes/Chat";
import SigninPage from "./Routes/SigninPage";
import SignupPage from "./Routes/SignupPage";
import RootLayout from "./Layouts/RootLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboardpage from "./Routes/Dashboardpage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SigninPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignupPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboardpage />,
          },
          {
            path: "/chat/:id",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
