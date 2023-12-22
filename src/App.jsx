import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(0);

  const addValue = () => {
    if(counter !=20)
      setcounter(counter+1);
  }

  const removeValue = () => {
    if(counter != 0)
    {
      setcounter(counter-1);
    }
     
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Count: {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App;
