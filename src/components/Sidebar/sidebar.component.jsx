import { useState } from "react";

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
      <p
        onClick={() => {
          setDisplayItemName(!displayItemName);
          onClick(!displayItemName);
        }}
        className="pt-5"
      >
        click to expand
      </p>
    </div>
  );
};

export default Sidebar;
