import { IoMdRefresh } from "react-icons/io";

const Card = ({width , title = "dummy", children}) => {
    return(
        <div className={`bg-white px-2.5 pt-3 pb-0 rounded rounded-[4px] flex flex-col gap-y-1 border border-gray-200aa ${width}`}>
          {/* TITLE CONTAINER */}
          <div className="flex justify-between">
            <p className="font-semibold text-sm p-0 m-0">{title}</p>
            <div className="self-center">
              <IoMdRefresh />
            </div>
          </div>
          {/* CHILDREN */}
          <div>
            {children}
          </div>
        </div>
    );
}


export default Card;