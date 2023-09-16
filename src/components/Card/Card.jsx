/* eslint-disable react/prop-types */
import dollar from "../../assets/dollar.svg";
import credit from "../../assets/credit.svg";
const Card = ({ data, handleSelect }) => {
  return (
    <div className="bg-white p-4 rounded-[12px] flex flex-col justify-between items-center gap-4 h-full">
      <div className="top">
        <img src={data.img} className="w-full rounded-[8px] mb-4" alt="" />
        <p className="font-[600] text-lg text-[#1C1B1B] mb-[8px]">
          {data.name}
        </p>
        <p className="text-[#1C1B1B99] text-sm">{data.details}</p>
      </div>

      <div className="bottom w-full">
        <div className="flex justify-between items-center gap-2">
          <div className="flex w-full justify-start items-center gap-1">
            <img src={dollar} alt="" />
            <p className="text-[#1C1B1B99] font-[500]">Price: {data.price}</p>
          </div>
          <div className="flex w-full justify-end items-center gap-1">
            <img src={credit} alt="" />
            <p className="text-[#1C1B1B99] font-[500]">
              Credit: {data.credit}hr
            </p>
          </div>
        </div>
        <button onClick={()=>handleSelect(data.id)} className="btn w-full font-[600] text-lg bg-[#2F80ED] hover:bg-[#275899] text-white rounded-[8px] mt-[25px] p-[10px]">
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
