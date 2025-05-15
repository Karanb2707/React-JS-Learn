import { useState } from "react"

function App() {

  const[text, setText] = useState('');

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  // 13 min
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}> </input>
    </div>
  )
}

export default App
