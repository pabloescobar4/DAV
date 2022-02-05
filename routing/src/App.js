import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Search from "./Search"
import Homes from "./Homes"
function App() {
  return (
    <div className="App">
      <h1>Navbar</h1>
     <Routes>
       <Route path="/search" element={<Search />} />
   
         
       <Route path="/home" element={<Homes/>} />
       </Routes>
       
        
      


    </div>
  );
}

export default App;
