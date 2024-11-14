import { Link, Outlet } from "react-router-dom";
import { BiMessageSquareDots } from "react-icons/bi";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./layout.css";

const PUBLISHABLE_KEY =
  "pk_test_cmVzdGVkLWd1bGwtMzUuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
function Layout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="rootLayout z-20">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-2xl">
              <span className="text-purple-500">
                <BiMessageSquareDots />
              </span>
              <span>FRYNDLY</span>
            </Link>
            <div>
              <SignedOut>
                <SignInButton className="signInButton" mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
          <main className="flex-1 overflow-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </ClerkProvider>
  );
}

export default Layout;
