import "./App.css";
import Phoneotp from "./component/Phoneotp";

function App() {
  return (
    <div className=" h-screen p-5 text-center flex flex-col gap-3 justify-center items-center  ">
      <div className="border border-black  shadow-lg shadow-zinc-400 rounded-lg w-[20rem] p-5 ">
        <h1 className="text-2xl font-bold ">Login with phone</h1>
        <Phoneotp />
      </div>
    </div>
  );
}

export default App;
