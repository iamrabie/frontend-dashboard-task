import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  return (
    <>
      <div className="border rounded rounded-[3px] flex items-center px-2.5 pt-2 pb-1.5 gap-x-1.5 w-[fit-content]">
        <p className="p-0 m-0 font-medium text-[12px]">
          Time Range{" "}
          <span className="text-green-800 bg-green-50 p-1 rounded-sm">
            Last 90 Days
          </span>
        </p>
        <IoIosArrowDown className="p-0 text-sm" />
      </div>
    </>
  );
};

export default Dropdown;
