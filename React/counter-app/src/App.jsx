import { useState } from "react"

function App() {

  const [count, setCount] = useState(0);

  function decHandler() {
    setCount(count - 1);
  }

  function incHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-8 bg-amber-200 items-center justify-center">
      <div className="text-4xl font-semibold">Increment & Decrement</div>

      <div className="w-[300px] flex justify-center border-2 bg-white border-red-900 gap-1 rounded-md">
        <button onClick={decHandler} className="w-full py-2.5 m-1 border text-xl font-extrabold bg-slate-200 rounded-sm cursor-pointer">
          –
        </button>
        <div className="w-full text-center text-3xl place-content-center font-semibold">
          {count}
        </div>
        <button onClick={incHandler} className="w-full py-2.5 m-1 border text-xl font-extrabold bg-slate-200 rounded-sm cursor-pointer">
          +
        </button>
      </div>

      <button onClick={resetHandler} className="w-[120px] p-3 bg-red-500 text-white font-semibold rounded-xl cursor-pointer
        hover:shadow-sm shadow-red-900 hover:border border-red-900">
        Reset
      </button>
    </div>
  )
}

export default App
