import React ,{ useEffect,useState } from 'react';


import './prodData.css'






function ProdData() {
	
	const [users, setUsers ] =useState([])
	const getUsers = async () => {
		const res = await fetch('https://fakestoreapi.com/products')
		const a = await res.json()
		setUsers(a)
		console.log(a)
	}
	
	
	useEffect(() =>{
		getUsers()
	},[]);

	return ( <div >

<div className="items-center border  grid gap-3 grid-cols-3 grid-rows-3  ">
{
   users.map((elm) => {
	return <div className="ml-48 w-64" key={elm.id}>
		<div className="mb-10">
		<img src={elm.image} alt="" className=""/>
		</div>
		<div>
			{elm.title}
			<div className="flex">
				<div className="text-yellow-400">
				Rating :{elm.rating.rate}, 
				</div>
				<div className="ml-4 text-blue-400">
				{elm.rating.count} 
				</div>
	
			</div>
			<div>
			
			</div>
			
			<div className="flex ">
			
				<div>
				₹
				</div>
				<div>
				<p className="text-red-500 text-lg font-bold">{elm.price}</p>
				</div>
			<div className="ml-3">
			Save ₹11 (9%)
		
			</div>

			
			
			</div>
		
		</div>
				
     
		<img src="https://iconape.com/wp-content/png_logo_vector/amazon-prime-icon-logo.png" alt="" className="w-2/6" />
<div>
FREE Delivery
</div>
		 by Thursday,
		February 24
	
		<button className="bg-yellow-400 rounded-full p-2 w-36 mt-5"  > Add to cart</button>
	</div>

})
}
</div>


	</div> );
}

export default ProdData;