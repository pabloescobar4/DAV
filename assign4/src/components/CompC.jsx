import React from 'react';
import { FirstName } from '../App'

function CompC() {
	return (
		<div>
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

    </div>
	 
	);
  }
  
  export default CompC;




















  
	