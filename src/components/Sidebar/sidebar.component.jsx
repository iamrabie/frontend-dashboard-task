import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


import Logo from "../../assets/logo.png";
import AnalyticsIcon from "../../assets/analytics-icon.png";

const Sidebar = ({onClick}) => {
  const [displayItemName, setDisplayItemName] = useState(false);

  return (
    <div
      className={`${displayItemName ? "w-[15%]" : "w-[4%]"} transition-all duration-300 ease-in-out border-r`}
    >
      <div className="logo-container">
        <img
          src={Logo}
          alt="logo"
          className={`${!displayItemName ? "block mx-auto" : "ps-4"}`}
        />
        <p
          className={`${displayItemName ? "block" : "hidden"} text-2xl font-extrabold self-center`}
        >
          DataFlow
        </p>
      </div>
      <ol className="py-5">
        <li
          className={`w-[fit-content] ${displayItemName ? "ms-4" : "mx-auto"}`}
        >
          <div
            className={`flex gap-x-2  p-1.5 rounded-sm ${displayItemName ? "bg-white" : "border bg-gray-50"}`}
          >
            <img
              src={AnalyticsIcon}
              alt="analytics"
              className="h-5 w-5 object-cover"
            />
            <p
              className={`${displayItemName ? "block" : "hidden"} text-sm self-center font-semibold`}
            >
              Analytics
            </p>
          </div>
        </li>
      </ol>
      <div
        onClick={() => {
          setDisplayItemName(!displayItemName);
          onClick(!displayItemName);
        }}
        className="absolute top-14 left-4 text-green-600 text-3xl cursor-pointer font-bold rounded-full"
      >
        <FaLongArrowAltRight />
      </div>
    </div>
  );
};

export default Sidebar;
