import "./App.css";
import Card from "./components/Card/Card";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <>
      <div className="container">
        <div className="title text-center py-8">
          <h2 className="text-[32px] font-bold">Course Registration</h2>
        </div>

        <div className="flex md:flex-row flex-col-reverse justify-between items-start gap-[24px]">
          <div className="cards lg:w-9/12 md:w-7/12 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="panel lg:w-3/12 md:w-5/12 w-full">
            <Panel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
