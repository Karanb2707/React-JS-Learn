import { useEffect, useState } from "react"

function App() {

  const[text, setText] = useState('');

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  // var 1 - Every time
  // useEffect( () => {
  //   console.log('Every Time!');
  // });

  // var2 - First Time
  // useEffect( () => {
  //   console.log('First Time');
  // }, []);

  // var3 - First Time + Dependency List
  // useEffect( () => {
  //   console.log('Update Time')
  // }, [text]);

  // var4 - For handling unmounting component
  useEffect( () => {
    console.log('Listener added');

    return () => {
      console.log('Listener removed')
    }
  }, [text]);

  // 42 min

  return (
    <div className="w-fit border mx-auto my-2">
      <input type="text" className="p-1" onChange={changeHandler}></input>
      
    </div>
  )
}

export default App
