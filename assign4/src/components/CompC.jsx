import React from 'react';
import { FirstName } from '../App'

function CompC() {
	return (
		<>
  <FirstName.Consumer>
   {(fname) => {
	   return <h1> My  {fname}</h1>
   }

   }
  </FirstName.Consumer>
<div>
	  This is a C component
  </div>
		</>

		
	 
	);
  }
  
  export default CompC;