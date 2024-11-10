import { Link, Outlet } from "react-router-dom";
import { BiMessageSquareDots } from "react-icons/bi";
import "./layout.css";
function Layout() {
  return (
    <div className="rootLayout">
      <nav>
        <Link to="/" className="logo">
          <span>
            <BiMessageSquareDots />
          </span>
          <span>FRYNDLY</span>
        </Link>
        <div>User Info</div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
