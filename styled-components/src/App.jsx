import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import {Button, Input, Div} from "./Styled/styled"
import { useState } from 'react';
import { DatePicker } from 'antd';
import { Random } from 'react-animated-text';



function App() {
const [theme ,setTheme] = useState("light")



  return (
    <div className="App">
<h1>Abhishek</h1>
<Input  placeholder="Trying to learn"/>
<Button theme={theme} onClick={ () => {
  console.log("clicked")
}}>Click here</Button>



<Div theme={theme} >hey 
<p>hey i am abhishek Kumar singh</p>
</Div>

    <button  onClick={() => { setTheme(theme === "light" ? "dark"  : "light") }}> Theme button</button>
    <br/>
    <DatePicker />

    <Button theme={theme} >Button from ant d</Button>



</div>
  );
}

export default App;
