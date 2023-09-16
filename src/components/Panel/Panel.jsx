const Panel = () => {
  return (
    <div className="bg-white p-6 rounded-[12px] w-full">
      <p className="font-bold text-[#2F80ED] text-lg">
        Credit Hour Remaining 20 hr
      </p>
      <div className="line bg-[#1C1B1B33] h-[1px] my-4"></div>
      <p className="text-xl font-bold text-[#1C1B1B] mb-5">Course Name</p>
      <ol className="list-decimal list-inside text-[#1C1B1B99]">
        <li>Introduction to c programming</li>
        <li>Introduction to c programming</li>
        <li>Introduction to c programming</li>
      </ol>
      <div className="line bg-[#1C1B1B33] h-[1px] my-4"></div>
      <p className="text-[#1C1B1BCC] font-[500]">Total Credit Hour : 13</p>
      <div className="line bg-[#1C1B1B33] h-[1px] my-4"></div>
      <p className="text-[#1C1B1BCC] font-[600]">Total Price : 48000 USD</p>
    </div>
  );
};

export default Panel;
