import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products'

function App() {

  const data = [
    {
      title:"Oppo A96",
      price:"18000",
      date:"Dec-2023",
    },
    {
      title:"Fire-bott",
      price:"2000",
      date:"Jun-2024",
    },
    {
      title:"Acer-i5",
      price:"60000",
      date:"Jan-2022",
    },
    {
      title:"Sony-A5",
      price:"100000",
      date:"Jan-2025",
    },
    
  ];

  function grandParentProduct(data) {
    console.log('inside App.js');
    console.log(data);
  }

  return (
    <div>
      <NewProduct onGrandParent = {grandParentProduct}/>
      <Products items={data}></Products>
    </div>
  );
}

export default App;
