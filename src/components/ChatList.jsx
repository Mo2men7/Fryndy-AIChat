import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { PiSidebarSimpleFill } from "react-icons/pi";

function ChatList() {
  return (
    <div>
      <div className="flex justify-between mb-5 text-2xl">
        <button className="">
          <PiSidebarSimpleFill />
        </button>
        <Link to="/dashboard" className="">
          <IoCreateOutline />
        </Link>
      </div>
      <div className="flex flex-col">
        {" "}
        {/* overflow-y-scroll */}
        <Link to="" className="rounded-xl transition hover:bg-slate-900 p-3">
          Chat Name
        </Link>
        <Link to="" className="rounded-xl transition hover:bg-slate-900 p-3">
          Chat Name
        </Link>
        <Link to="" className="rounded-xl transition hover:bg-slate-900 p-3">
          Chat Name
        </Link>
      </div>
    </div>
  );
}

export default ChatList;
