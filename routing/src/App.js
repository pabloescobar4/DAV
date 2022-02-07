import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Search from "./Search"
import Homes from "./Homes"
import React ,{useState} from "react"
function App() {

  const [navbar,setNavbar] = useState()

  const changeName = () => {
    let val = navbar;
    (val >24) ? 
    setNavbar('home') : setNavbar(25) 
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
      


    </div>
  );
}

export default App;
