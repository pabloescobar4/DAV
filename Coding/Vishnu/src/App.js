import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Payment from './Components/Payment';
import Cart from './Components/CartPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Cart />
    </div>
  );
}

export default App;
