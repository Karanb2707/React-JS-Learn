import React, { useState } from "react";
import data from './Data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold p-2">No Tours Left</h2>
        <button className="w-[160px] border rounded-2xl m-2 py-2 text-xl text-white bg-red-900 font-semibold cursor-pointer" 
          onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTourFun = {removeTour}></Tours>
    </div>
  )
}

export default App
