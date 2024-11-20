import { BiMessageSquareDots } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

function Dashboardpage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center text-5xl opacity-50 gap-2">
        <span className="text-purple-500">
          <BiMessageSquareDots />
        </span>
        <span>FRYNDLY</span>
      </div>
      <p className="text-3xl mt-5 capitalize opacity-50">
        Hey friend, What is in your mind ?
      </p>
      <form
        action=""
        className="mt-12 text-xl bg-zinc-800 text-white rounded-full flex w-1/2 justify-between"
      >
        <input
          type="text"
          className="bg-transparent p-5 w-full outline-none"
          placeholder="Ask me anything"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-full transition hover:bg-zinc-700 text-white"
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
}

export default Dashboardpage;
