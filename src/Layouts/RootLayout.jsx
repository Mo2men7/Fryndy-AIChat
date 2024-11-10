import { Link, Outlet } from "react-router-dom";
import { BiMessageSquareDots } from "react-icons/bi";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">
          <span>
            <BiMessageSquareDots />
          </span>
          <span>FRYNDLY</span>
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
