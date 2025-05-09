import './App.css';
import Products from './components/Products'

function App() {

  const data = [
    {
      title:"Oppo A96",
      price:"18000",
      month:"Dec-2023",
    },
    {
      title:"Fire-bott",
      price:"2000",
      month:"Jun-2024",
    },
    {
      title:"Acer-i5",
      price:"60000",
      month:"Jan-2022",
    },
    
  ];

  return (
    <div>
      <Products items={data}></Products>
    </div>
  );
}

export default App;
