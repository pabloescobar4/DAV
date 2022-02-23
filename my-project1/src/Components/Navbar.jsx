import React ,{ useState } from 'react'
import amz from './pics/amz.png'


import search from './pics/search.png'
import loc from './pics/loc.png'
import cart from './pics/cart.png'

import 'react-slideshow-image/dist/styles.css'
import './navbar.css'


// const slideImages = [
// 	'https://m.media-amazon.com/images/I/61bRd1hd+CL._SX3000_.jpg',
	 

// 'https://m.media-amazon.com/images/I/51Y5RSoxqdL._SX3000_.jpg',
	
// 	'https://m.media-amazon.com/images/I/618yrYa8l-L._SX3000_.jpg',


//   ];


function Navbar (){
	const [Counter,SetCounter] = useState(0)

const IncrementCounter = () => {
	SetCounter( Counter +1)
}
	return (
		<>
			{/* <div>
          <h1>
			  {Counter}
		  </h1>
		  <button onClick={ IncrementCounter}  >
              Count
		  </button>
		</div> */}


<div className="">

</div>
		<div className="w-100 h-16 bg-gray-900  ">
      <div className="border-opacity-100 w-100 h-16 flex">
        <img
          className="w-36 h-15 m-1 ml-2 border border-gray-800 hover:border-white rounded"
          src={amz}
          alt=""
        />
        <img
          className="w-5 h-5 mt-7 mr-1"
          src={loc}
          alt=""
        />
        <div
          className="p-1 text-white text-sm inline font-bold text-xs border border-gray-900 hover:border-white rounded"
        >
          <div
            className="font-normal text-gray-300 mt-2 ml-3.5 leading-2 ml-3.5 text-xs"
          >
            Hello
          </div>
          Select your address
        </div>

        <select
          name="all"
          id="all"
          className="w-12 h-10 mt-2 ml-3.5 rounded-l-md bg-gray-100 hover:bg-gray-200 cursor-pointer border-white focus:outline-none"
        >
          <option value="mobile" className="">All</option>
          <option label="Mobile" value="Mobile"></option>
          <option label="Computers" value="Computers"></option>
          <option label="Tv" value="Tv"></option>
          <option label="Deals" value="Deals"></option>
        </select>
        <input className="w-5/12 mt-2 -ml-0 mb-4 ml-3 focus:outline-none" />
        <div
          className="w-12 h-10 mt-2 -ml-3.5 rounded-r-md bg-yellow-400 bg-opacity-100"
        >
          <img className="w-8 h-8 m-1.5 ml" src={search} alt="" />
        </div>







        <div className="dropdown1  text-white text-sm inline  text-xs  border border-gray-900 hover:border-white rounded">
            <li className="dropbtn1"><a href="#" ><i ></i></a>     
            <div>
          <img
            className="w-6 h-4 m-6 mt-7"
            src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
            alt=""
          />
        </div>

            <div className= "text-white text-sm font-bold ">
           
            </div>
            </li>
         
           
            <div className="dropdown-content1 text-black">
              <div className="flex p-6 space-x-24 cursor-pointer"> 
               <div>
               <h2 className="text-lg font-bold ">English - EN</h2>           
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">हिन्दी - HI - अनुवाद</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">தமிழ் - TA - மொழிபெயர்ப்பு</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">తెలుగు - TE - అనువాదం</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">ಕನ್ನಡ - KN - ಭಾಷಾಂತರ</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">മലയാളം - ML - വിവർത്തനം</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">বাংলা - BN বিটা - অনুবাদ</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">मराठी - MR बीटा - भाषांतर</p> 
                   
               </div>


               {/* <div className="ml-5">
               <h2 className="text-lg font-bold ">Your Account</h2>           
               <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
               </div> */}
              </div>
                   
                   
                    
            </div>
        </div> 


      






        <div
          className="text-white text-sm inline font-bold text-xs p-1 border border-gray-900 hover:border-white rounded"
        >
          <div
            className="font-normal text-gray-300 mt-2 ml-3.5 leading-2 ml-3.5 text-xs  "
          >

    <div className="dropdown">
            <li className="dropbtn"><a href="#" ><i ></i></a>      Hello,Sign in
            <div className= "text-white text-sm font-bold ">
            Account & Lists
            </div>
            </li>
         
           
            <div className="dropdown-content text-black">
              <div className="flex p-5 space-x-24 cursor-pointer"> 
               <div>
               <h2 className="text-lg font-bold ">Your Lists</h2>           
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                   
               </div>


               <div className="ml-5">
               <h2 className="text-lg font-bold ">Your Account</h2>           
               <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
                    <p className ="mt-2 hover:text-red-700 hover:underline cursor-pointer">All Services</p> 
               </div>
              </div>
                   
                   
                    
            </div>
        </div> 
       
          </div>









   

        

         
        </div>




{/* replaced */}




        <div
          className="ml-1 text-white text-sm inline font-bold text-xs p-1 border border-gray-900 hover:border-white rounded"
        >
          <div
            className="font-normal text-gray-300 mt-2 ml-3 leading-2 text-xs"
          >
            Returns
          </div>
          <div className="text-white text-sm font-bold ">
          & Orders
          </div>
          
        </div>
        <div>
        
        </div>
       
        <img className="w-10 h-10 ml-10 mt-2" src={cart} alt="" />
        <div className="  text-white text-sm inline font-bold text-xl">
        
 
         
 <h1 className="text-orange-300 text-sm ml-5">
			  {Counter} 
        
		  </h1>
      <h1>Cart</h1>
      <button onClick={ IncrementCounter} className ="text-sm"  >
              {/* onclicking this button count increases new */}
		  </button>
        
        </div>
      </div>
    </div>

   
		</>
	
	)
}

export default Navbar