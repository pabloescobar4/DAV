import React  from 'react'
import applogo from './pics/applogo.png'
import ham from './pics/ham.png'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './navbar.css'

const slideImages = [
	'https://m.media-amazon.com/images/I/61bRd1hd+CL._SX3000_.jpg',
	 

'https://m.media-amazon.com/images/I/51Y5RSoxqdL._SX3000_.jpg',
	
	'https://m.media-amazon.com/images/I/618yrYa8l-L._SX3000_.jpg',


  ];


function Prod() {
	return ( 
		<div>
<div class="w-100 h-11 bg-gray-800 flex mt-16 ">
      <div>
        <img class="w-6 h-7 mt-1.5 ml-5" src={ham} alt="" />
      </div>
      <div class="text-white m-2.5 -ml-2 ml-3.5 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded m-2"
          >All</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Fresh</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Mobiles</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Amazon pay</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Prime</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Gift Cards</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Health, Household & Personal care</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Home Improvement</b
        >
      </div>
      <div class="text-white mt-2.5 ml-1 text-sm">
        <b class="p-2 border border-gray-800 hover:border-white rounded"
          >Amazon Business</b
        >
      </div>
      <img class="w-6 h-6 mt-1.5 ml-4" src={applogo} alt="" />
      <div>
        <div class="text-white mt-2.5 ml-1 text-sm">
          <b class="p-2 border border-gray-800 hover:border-white rounded"
            >Shopping made easy | Download app Now</b
          >
        </div>
      </div>
    </div>





{/* // slideshow */}
<div className ="h-96">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide> 
      </div>









 <div class="">
      <div class="flex space-x-4  ">
        <div class="flex-1 w-72 h-1/2 bg-white p-5 pl-7 text-2xl m-3 font-bold">
          Upgrade your home | Amazon Brands & more

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-0.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Postpaid_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Electricity_186x116._SY116_CB663599035_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-1 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-15.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Broadband_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/DTH_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-4 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>
        </div>
        <div class="flex-1 w-96 h-1/2 bg-white pl-7 text-2xl p-5 m-3">
          <b>Bill payments got fast & convenient</b>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Postpaid_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Electricity_186x116._SY116_CB663599035_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-4 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Broadband_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/DTH_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-4 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>
        </div>

        <div class="flex-1 w-96 bg-white text-2xl p-5 font-bold m-3">
          Top picks for your home and

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Postpaid_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Electricity_186x116._SY116_CB663599035_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-4 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Broadband_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/DTH_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-4 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>
        </div>

        <div
          class="flex-1 w-1/5 h-1/2 bg-white text-xl p-5 text-2xl m-3 mr-4 font-bold"
        >
          Now save bill details & get timely reminders
          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Postpaid_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Electricity_186x116._SY116_CB663599035_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-4 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Broadband_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/DTH_372x232._SY232_CB663598662_.jpg"
              alt=""
            />
          </div>

          <div class="flex">
            <div class="text-xs ml-4 mb-3 flex">Prepaid recharge</div>
            <div class="text-xs ml-14">Electricity Bill</div>
          </div>
        </div>
      </div>

      <div
        class="flex space-x-1 mt-10 mt-mxl  w-fit ml-5 mt-5 border border-gray-000 bg-gray-100"
      >
        <div class="flex-1 w-2/12 h-1/2 bg-white text-xl p-5 text-2xl font-bold">
          Upgrade your home | Amazon Brands & more

          <div class="flex">
            <img
              class="w-32 h-32 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_372x232_372x232_in-en._SY232_CB663888091_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_372x232_372x232_in-en._SY232_CB663888091_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs ml-4 mb-3 flex">Furniture</div>
            <div class="text-xs ml-24">Kitchen products</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_372x232_372x232_in-en._SY232_CB663888090_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_372x232_372x232_in-en._SY232_CB663888089_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs ml-4 mb-3 flex">Smart LED TVs</div>
            <div class="text-xs ml-14">Appliances</div>
          </div>
        </div>
        <div class="flex-1 w-2/12 h-1/2 bg-white text-xl p-5 text-2xl font-bold">
          Up to 25% off + Free delivery on Prime | Snacks

          <div class="flex">
            <img
              class="w-32 h-32 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/November/BTF_QCs/PC/PackageFood/Biscuits__Snacks2x_01._SY232_CB653887287_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/November/BTF_QCs/PC/PackageFood/Beverages2x_02._SY232_CB653887287_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs ml-4 mb-3 flex">Biscuits & snacks</div>
            <div class="text-xs ml-14">Beverages</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/November/BTF_QCs/PC/PackageFood/Breakfast_cereals2x_03._SY232_CB653887287_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/November/BTF_QCs/PC/PackageFood/Amazon_Fresh2x_04._SY232_CB653887287_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs ml-4 mb-3 flex">Dry fruits & nuts</div>
            <div class="text-xs ml-14">See all offers</div>
          </div>
        </div>
        <div class="flex-1 w-2/12 bg-white text-xl p-5 text-2xl font-bold mb-36">
          Styles for Men | Up to 70% off
          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/372/1-min._SY232_CB666463578_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/372/2-min._SY232_CB666463578_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs ml-4 mb-3 flex">Clothing</div>
            <div class="text-xs ml-28">Footwear</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/372/4-min._SY232_CB666463578_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-2 ml-3.5"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/372/3-min._SY232_CB666463578_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs ml-4 mb-3 flex">Watches</div>
            <div class="text-xs ml-28">Bags & luggage</div>
          </div>
        </div>
        <div class="flex-1 w-2/12 bg-white text-xl p-5 text-2xl font-bold mb-36">
          Top rated, premium quality | Amazon Brands
          <div class="flex">
            <img
              class="w-32 h-28 m-3"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/B06Y5GF9SF_Asins_372x232._SY232_CB409842837_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-3"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_372x232_372x232_in-en._SY232_CB666250428_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs mb-3 ml-2 flex">Home products</div>
            <div class="text-xs ml-14">Furniture</div>
          </div>

          <div class="flex">
            <img
              class="w-32 h-28 m-3"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_372x232._SY232_CB433910794_.jpg"
              alt=""
            />
            <img
              class="w-32 h-28 m-3"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_372x232._SY232_CB433889053_.jpg"
              alt=""
            />
          </div>

          <div class="flex font-normal">
            <div class="text-xs ml-2 mb-3 flex">Daily essestials</div>
            <div class="text-xs ml-14">Clothing essestials</div>
          </div>
        </div>
      </div>
    </div>
		</div>
	 );
}

export default Prod;