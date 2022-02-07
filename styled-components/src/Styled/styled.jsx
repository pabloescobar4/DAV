import styled from "styled-components"

export  const Button = styled.button`
color: ${(props) => (props.theme === "light" ?  "palevioletred" : "red")};
background: ${(props) => (props.theme === "light" ?  "smokewhite" : "black")};;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;

`


export const Input = styled.input`
background: papayawhip;
height:15px;
width:50%;
padding:1em;
border:2px solid black;

::placeholder {
    color: red;
    
}

&:hover{
    background: black;
    color:white;
    fontWieght:bolder;
    fontSize:24px;

}
`
export const Div = styled.div`
background-color:${(props) => (props.theme === "light" ?  "green" : "orange")};;
width:300px;
height:300px;
font-size:52px;
overflow:scroll;


& > p{
    font-size:22px;
}
& > p:hover{
    background-color:purple;
}
`