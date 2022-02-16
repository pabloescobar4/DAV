import React , {useState} from 'react'



export const Temp = () => {

	const [temp,setTemp]=useState(200)

	const onChangeCe = () => {
		setTemp(temp*1.8 +32)
	}
	const onChangeFa = () => {
		setTemp((temp-32)/1.8)
	}
  return(
	<div>
        {/* <input type="number"  className="change"  /> */}
		<h1>{temp}</h1>
		<button onClick={onChangeCe}>Convert to celcius</button>
		<button onClick={onChangeFa}>Convert to far</button>

		<div className="output">
         
		</div>
	</div>
   )
  }
