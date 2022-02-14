import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Search from "./Search"
import Homes from "./Homes"
import React ,{useState} from "react"
import { Abc } from './arrayMap';
import { Temp } from './components/temp.jsx'

function App() {

  const [navbar,setNavbar] = useState('+')

  const changeName = () => {
    let val = navbar;
    (val === '+') ? 
    setNavbar('-') : setNavbar('+') 
  }
 


  return (
    <div className="App">
      <h1>{navbar}</h1>
      <button onClick={ changeName}>home</button>
      
     {/* <Routes>
       <Route path="/search" element={<Search />} />
   
         
       <Route path="/home" element={<Homes/>} />
       </Routes>
       
         */}
      
      <Abc />
      <Temp />

    </div>
  );
}

export default App;
