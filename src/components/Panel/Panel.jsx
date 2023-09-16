/* eslint-disable react/prop-types */
const Panel = ({ selected }) => {
  const totalCredit = selected.reduce((acc, item) => acc + item.credit, 0);
  return (
    <div className="bg-white p-6 rounded-[12px] w-full">
      <p className="font-bold text-[#2F80ED] text-lg">
        Credit Hour Remaining {20 - parseInt(totalCredit)} hr
      </p>
      <div className="line bg-[#1C1B1B33] h-[1px] my-4"></div>
      <p className="text-xl font-bold text-[#1C1B1B] mb-5">Course Name</p>
      {selected.length > 0 ? (
        <ol className="list-decimal list-inside text-[#1C1B1B99]">
          {selected.map((item, index) => (
            <li key={index} className="text-[#1C1B1B99] font-[500]">
              {item.name}
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-[#1C1B1B99] font-[500]">No Course Selected</p>
      )}
      <div className="line bg-[#1C1B1B33] h-[1px] my-4"></div>
      <p className="text-[#1C1B1BCC] font-[500]">
        Total Credit Hour : {totalCredit}
      </p>
      <div className="line bg-[#1C1B1B33] h-[1px] my-4"></div>
      <p className="text-[#1C1B1BCC] font-[600]">
        Total Price : {selected.reduce((acc, item) => acc + item.price, 0)} USD
      </p>
    </div>
  );
};

export default Panel;
