const StatsCard = ({title , number , borderColor}) => {
    return(
        <div className={`border-s-2 border-blue-400 ps-2.5`}>
            <p className="p-0 m-0 text-[12px] font-medium text-gray-700">{title}</p>
            <p className="p-0 m-0 text-[25px] font-semibold">{number}</p>
        </div>
    );
}


export default StatsCard;