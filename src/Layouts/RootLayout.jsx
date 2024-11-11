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
      <div className="rootLayout">
        <nav>
          <Link to="/" className="logo">
            <span>
              <BiMessageSquareDots />
            </span>
            <span>FRYNDLY</span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
}

export default Layout;
