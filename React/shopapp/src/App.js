import './App.css';
import Object from './components/Object'
import ItemDate from './components/ItemDate';

function App() {
  // const secName = 'Karan';

  const data = [
    {
      name:"Krutika",
      day:"10",
      month:"Dec",
      year:"2003"
    },
    {
      name:"Karan",
      day:"27",
      month:"June",
      year:"2003"
    },
    {
      name:"Rohit",
      day:"30",
      month:"April",
      year:"1985"
    },
  ];
  
  return (
    <div>
      
      <Object name={data[0].name} ></Object>
      <ItemDate day={data[0].day} month={data[0].month} year={data[0].year}></ItemDate>

      <Object name={data[1].name}></Object>
      <ItemDate day={data[1].day} month={data[1].month} year={data[1].year}></ItemDate>

      <Object name={data[2].name}></Object>
      <ItemDate day={data[2].day} month={data[2].month} year={data[2].year}></ItemDate>

      <div className="App">Hello React</div>
    </div>
  );
}

export default App;
