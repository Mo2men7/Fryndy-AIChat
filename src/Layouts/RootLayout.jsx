import { Link, Outlet, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="z-20">
        <nav className="flex items-center justify-between py-3 px-10 bg-black sticky top-0 z-30">
          <Link to="/" className="flex items-center gap-2 text-2xl">
            <span className="text-purple-500">
              <BiMessageSquareDots />
            </span>
            <span>FRYNDLY</span>
          </Link>
          {!pathname.includes("sign") && (
            <div>
              <SignedOut>
                <SignInButton className="signInButton" mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          )}
        </nav>
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
}

export default Layout;
