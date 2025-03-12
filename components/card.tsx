import { CiSearch } from "react-icons/ci";

export default function Card() {
    return (
      <div className="flex flex-cols-1 justify-between items-center border ml-7 w-3xl border-gray-300 shadow-xl pl-4 pr-4 pt-2 pb-2 rounded-4xl text-black">
        <CiSearch className="h-6 w-5"/>
        <input
          type="search"
          placeholder="Search Google or type a URL"
          className="w-2xl ml-3 outline-0 h-8 text-1xl"
        />
        <img src="/mic.svg" alt="Microphone" />
        <img src="/camera.svg" alt="Camera"  className="w-6 h-6 ml-3.5 "/>
      </div>
    );
  }