import "./banner.css";
const Banner = () => {
  return (
    <div className="banner_container h-[30vh] md:h-[50vh] lg:h-[90vh] flex flex-col justify-center items-center ">
      <div className="bg-gradient-to-r from-neutral-400 items-center to-[#15151500] p-2 rounded-md">
        <h1 className="text-3xl font-bold  rounded-md text-transparent  bg-clip-text bg-gradient-to-r from-[#010313] to-pink-600 ">
          Streamlined Shipping, Simplified Solutions: <br /> Your Parcel
          Management Hub
        </h1>
        <div className="relative mt-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search Parcel Id"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
