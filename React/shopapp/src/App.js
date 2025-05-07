import './App.css';
import Object from './components/Object'
import ItemDate from './components/ItemDate';

function App() {
  const secName = 'Karan';
  return (

    <div>
        
      <Object name="Krutika"></Object>
      <ItemDate day="10" month="Dec" year="2003"></ItemDate>

      <Object name={secName}></Object>
      <ItemDate day="27" month="July" year="2003"></ItemDate>

      <Object name="Hitman"></Object>
      <ItemDate day="30" month="April" year="1985"></ItemDate>

      <div className="App">Hello React</div>
    </div>
  );
}

// 1:20 hr
export default App;
