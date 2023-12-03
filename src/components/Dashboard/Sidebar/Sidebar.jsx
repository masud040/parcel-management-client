import { AiOutlineBars } from "react-icons/ai";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold ">
            <img src={logo} className="w-24 rounded-2xl" alt="" />
          </div>
        </div>
        <button
          onClick={() => setActive(!isActive)}
          className="focus:outline-none p-4 focus:bg-gray-200 "
        >
          <AiOutlineBars className="h-5  w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col justify-between flex-1 mt-6">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "font-semibold"
                : isActive
                ? "font-semibold underline"
                : "font-semibold"
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
