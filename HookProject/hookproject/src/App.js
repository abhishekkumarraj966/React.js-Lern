import './App.css';
import {useState} from 'react'
function App() {

  let[counter,setCounter]= useState(0)

  
   const addValue=()=>{
    if(counter<20){
    setCounter( prevCounter=>prevCounter+1)  
    setCounter(prevCounter=>prevCounter+1)  
    setCounter(prevCounter=>prevCounter+1)  
    setCounter(prevCounter=>prevCounter+1)  
    }    
   }
    const removValue=()=>{
      if(counter>0){
        setCounter(counter-1);
      }
    }
  return (
    <div>
    <h1> Chai aur React</h1>
    <h2> Counter Value {counter}</h2>
    <button  onClick={addValue} >Add Value {counter}</button><br/>
    <button onClick={removValue}>Remove  value {counter}</button>
    <p>footer:{counter}</p>
    </div>
  );
}

export default App;
