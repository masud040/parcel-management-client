import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import placeholder from "../../assets/images/placeholder.jpg";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isShow, setShow] = useState(false);

  const user = false;
  return (
    <div className="relative">
      <div className="flex  justify-between w-full mx-auto  bg-gray-300 bg-opacity-60 z-10 shadow-sm fixed   py-2 ">
        <div className="flex items-center   gap-2">
          <img src={logo} className="w-20 h-10 rounded-3xl ms-4 " alt="" />
          <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold">
            ShipSwift
          </h1>
        </div>
        <div className="flex items-center  gap-6 text-[#010313]">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "font-semibold"
                : isActive
                ? "font-semibold underline"
                : "font-semibold"
            }
          >
            Home
          </NavLink>
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
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <IoNotifications className="text-3xl text-rose-500" />
          </NavLink>
          {user ? (
            <button
              className="hidden md:inline-flex"
              onClick={() => setShow(!isShow)}
            >
              <img src={placeholder} className="w-8  h-8 rounded-full" alt="" />
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "font-semibold"
                  : isActive
                  ? "font-semibold underline"
                  : "font-semibold"
              }
            >
              Login
            </NavLink>
          )}

          <div>
            <button
              onClick={() => setShow(!isShow)}
              className="border p-2 rounded-full hover:border-red-400 md:hidden"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isShow
            ? "flex flex-col absolute right-0 bg-slate-100 p-3 transition-all duration-500 rounded-b-md"
            : "hidden"
        }
      >
        {user && <h3 className="font-semibold">Masud Rana</h3>}

        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "font-semibold"
              : isActive
              ? "font-semibold"
              : "font-semibold"
          }
        >
          Dashboard
        </NavLink>
        <button className="text-start font-semibold">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
