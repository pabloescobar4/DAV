import React ,{ createContext} from 'react'
import {useState} from 'react'
import './App.css';
import CompA from './components/CompA'

const FirstName = createContext();



function App() {
const [count,setCount] = useState(0)

function Counter(){
  setCount(count+1)
}
function Counter1(){
  setCount(count-1)
}
  return (
    <div >
      {/* <FirstName.Provider value ={"Name is Dheeraj Mehta"}>
      <CompA />

      </FirstName.Provider>
      */}
    <h1>{count}</h1>
    <button onClick = {Counter}>Increment</button>
    <button onClick = {Counter1}>Decremet</button>

    </div>
  );
}

export default App;
export {FirstName};


//parent => childA => childB => childC

/// create a context 
// create a context Provider
// create a context consumer