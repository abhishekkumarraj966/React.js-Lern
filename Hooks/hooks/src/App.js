import { useState } from "react";
import "./App.css";
import { Nav } from "./Nav";


function App() {
  
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("Value added",Math.rendom());
   if(counter<20){
    setCounter(counter + 1);
   }
  };
  const rmvalue = () => {
    if(counter>0){
    setCounter(counter - 1);
    }
  };

  return (
    <>
 <Nav />
    <div className='bg-indigo-600 w-full h-screen'>    
      {/* <h1>Hello how are you</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={rmvalue}>remove value {counter} </button> */}
      </div>
     </>
  );
}

export default App;
