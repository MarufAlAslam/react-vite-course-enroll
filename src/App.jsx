import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Panel from "./components/Panel/Panel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSelect = (id) => {
    // check if the item is already selected
    const item = data.find((item) => item.id === id);
    const isAlreadySelected = selected.find((item) => item.id === id);
    if (isAlreadySelected) {
      toast.error("Already Selected");
    } else {
      // check if the total credit is less than 0
      const totalCredit = selected.reduce((acc, item) => acc + item.credit, 0);
      if (totalCredit + item.credit > 20) {
        toast.error("You can't select more than 20 credit");
      } else {
        setSelected([...selected, item]);
      }
    }
  };

  // console.log(data)
  return (
    <>
      <div className="container">
        <div className="title text-center py-8">
          <h2 className="text-[32px] font-bold">Course Registration</h2>
        </div>

        <div className="flex pb-[80px] lg:flex-row flex-col-reverse justify-between items-start gap-[24px]">
          <div className="cards lg:w-9/12 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
            {data.map((item, index) => (
              <Card key={index} data={item} handleSelect={handleSelect} />
            ))}
          </div>
          <div className="panel lg:w-3/12 w-full">
            <Panel selected={selected} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
