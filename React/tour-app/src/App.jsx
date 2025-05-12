import React, { useState } from "react";
import data from './Data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  return (
    <div>
      <Tours tours={tours} removeTourFun = {removeTour}></Tours>
    </div>
  )
}

export default App