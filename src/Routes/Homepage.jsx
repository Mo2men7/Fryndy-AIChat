import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex justify-between gap-2 items-center z-30">
        <div className="flex-1 flex flex-col ">
          <h1 className="my-2 font-semibold text-6xl lg:text-8xl uppercase font-fryndly bg-gradient-to-r from-purple-500 via-pink-300 to-blue-400 inline-block text-transparent bg-clip-text">
            Fryndly ai
          </h1>
          <h2 className="capitalize font-fryndly text-3xl">
            Your new ai friend that can chat, help and assist you to product{" "}
          </h2>
          <p className="text-sm text-neutral-400 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi vel
            necessitatibus itaque nam, dignissimos asperiores voluptates? Modi,
            quisquam, qui in earum ducimus facilis id a soluta magni, et
            officiis velit.
          </p>
          <Link
            to="/dashboard"
            className="capitalize rounded-full text-center bg-purple-600 text-white py-2 px-4 w-1/3 my-10"
          >
            Let&apos;s chat
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center">
          {/* the right section of the homepage */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
