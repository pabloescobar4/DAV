import React from 'react';
import lang from './pics/lang.png';
import './footer.css';
function Footer() {
  return (
    <div>
      <div className="w-full h12 colour flex p-16 pl-48">
        <div className="text-slate-100 ">
          <div className="font-bold text-lg mb-3">Get to Know Us</div>

          <li className=" mb-2 hover:underline cursor-pointer">About us</li>
          <li className=" mb-2 hover:underline cursor-pointer">Careers</li>
          <li className=" mb-2 hover:underline cursor-pointer">Press Releases</li>
          <li className=" mb-2 hover:underline cursor-pointer">Amazon Cares</li>
          <li className=" mb-2 hover:underline cursor-pointer">Gift a Smile</li>
          <li className=" mb-2 hover:underline cursor-pointer">Amazon Science</li>
        </div>

        <div className="text-slate-100 ml-36">
          <div className="font-bold text-lg mb-3 ">Connect with Us</div>

          <li className=" mb-2 hover:underline cursor-pointer">Facebook</li>
          <li className=" mb-2 hover:underline cursor-pointer">Twitter</li>
          <li className=" mb-2 hover:underline cursor-pointer">Instagram</li>
        </div>

        <div className="text-slate-100 ml-36">
          <div className="font-bold text-lg mb-3"> Make Money with Us</div>

          <li className=" mb-2 hover:underline cursor-pointer"> Sell on Amazon</li>
          <li className=" mb-2 hover:underline cursor-pointer">
            Sell under Amazon Accelerator
          </li>
          <li className=" mb-2 hover:underline cursor-pointer">Amazon Global Selling</li>
          <li className=" mb-2 hover:underline cursor-pointer">Become an Affiliate</li>
          <li className=" mb-2 hover:underline cursor-pointer">Fulfilment by Amazon</li>
          <li className=" mb-2 hover:underline cursor-pointer">Advertise Your Products</li>
          <li className=" mb-2 hover:underline cursor-pointer">Amazon Pay on Merchants</li>
        </div>

        <div className="text-slate-100 ml-36">
          <div className="font-bold text-lg mb-3"> Let Us Help You</div>

          <li className=" mb-2 hover:underline cursor-pointer">COVID-19 and Amazon</li>
          <li className=" mb-2 hover:underline cursor-pointer">Your Account</li>
          <li className=" mb-2 hover:underline cursor-pointer">Returns Centre</li>
          <li className=" mb-2 hover:underline cursor-pointer">100% Purchase Protection</li>
          <li className=" mb-2 hover:underline cursor-pointer">Amazon App Download</li>
          <li className=" mb-2 hover:underline cursor-pointer">Amazon Assistant Download</li>
          <li className=" mb-2 hover:underline cursor-pointer">Help</li>
        </div>
      </div>
      <div className="w-full line bg-gray-600"></div>

      <div className="w-full h-48 colour p-5 pl-48 pr-64">
        <div className="flex">
          <div className="w-32 justify-items-center ml-96">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
              alt=""
            />
          </div>

          <div className="dropdown1  text-white text-sm inline  text-xs   hover:border-white rounded">
            <li className="dropbtn1">
              <a href="#">
                <i></i>
              </a>
              <div>
                <div className=" w-28  h-10 ml-20 text-slate-100 mt-4   border border-slate-100 rounded flex cursor-pointer">
                  <div>
                    <img src={lang} alt="" className="w-3/4 pt-2 ml-1" />
                  </div>

                  <li className=" m-1.5 ">English</li>
                </div>
              </div>

              <div className="text-white text-sm font-bold "></div>
            </li>

            <div className="dropdown-content1 text-black">
              <div className="flex p-6 space-x-24 cursor-pointer">
                <div>
                  <h2 className="text-lg font-bold ">English - EN</h2>
                  <p className="mt-2 hover:text-red-700 hover:underline cursor-pointer">
                    हिन्दी - HI - अनुवाद
                  </p>
                  <p className="mt-2 hover:text-red-700 hover:underline cursor-pointer">
                    தமிழ் - TA - மொழிபெயர்ப்பு
                  </p>
                  <p className="mt-2 hover:text-red-700 hover:underline cursor-pointer">
                    తెలుగు - TE - అనువాదం
                  </p>
                  <p className="mt-2 hover:text-red-700 hover:underline cursor-pointer">
                    ಕನ್ನಡ - KN - ಭಾಷಾಂತರ
                  </p>
                  <p className="mt-2 hover:text-red-700 hover:underline cursor-pointer">
                    മലയാളം - ML - വിവർത്തനം
                  </p>
                  <p className="mt-2 hover:text-red-700 hover:underline cursor-pointer">
                    বাংলা - BN বিটা - অনুবাদ
                  </p>
                  <p className="mt-2 hover:text-red-700 hover:underline cursor-pointer">
                    मराठी - MR बीटा - भाषांतर
                  </p>
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
        </div>

        <div className="flex text-slate-100 text-xs ml-14 max-w-fit">
          <li className=" hover:underline cursor-pointer">Australia</li>

          <li className="ml-3 hover:underline cursor-pointer">Brazil</li>
          <li className="ml-3 hover:underline cursor-pointer">Canada</li>
          <li className="ml-3 hover:underline cursor-pointer">China</li>
          <li className="ml-3 hover:underline cursor-pointer">France</li>
          <li className="ml-3 hover:underline cursor-pointer">Germany</li>
          <li className="ml-3 hover:underline cursor-pointer">Italy</li>
          <li className="ml-3 hover:underline cursor-pointer">Japan</li>
          <li className="ml-3 hover:underline cursor-pointer">Mexico</li>
          <li className="ml-3 hover:underline cursor-pointer">Netherlands</li>
          <li className="ml-3 hover:underline cursor-pointer">Poland</li>
          <li className="ml-3 hover:underline cursor-pointer">Singapore</li>
          <li className="ml-3 hover:underline cursor-pointer">Spain</li>
          <li className="ml-3 hover:underline cursor-pointer">Turkey</li>
          <li className="ml-3 hover:underline cursor-pointer">United Arab Emirates</li>
          <li className="ml-3 hover:underline cursor-pointer">United</li>
        </div>
        <div className="flex text-slate-100 text-xs mt-2 ml-96 max-w-fit">
          <li className="ml-10 hover:underline cursor-pointer">Kingdom</li>

          <li className="ml-3 hover:underline cursor-pointer">United States</li>
        </div>
      </div>


      <div className="w-full h-56 clr pl-44 pt-9 ">


        <div className="flex">
        <div>
            <div>
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
					AbeBooks
				</li>
        <li className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          Books ,art
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          & Collections
        </li>
			</div>

      <div className="pt-5">
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
					ShopBop
				</li>
        <li className=" text-gray-300 leading-3 fontSize hover:underline cursor-pointer">
          Designer
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          Fashion Brands
        </li>
			</div>
	  </div>






    <div className="ml-32">
    <div>
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
        Amazon Web Services
				</li>
        <li className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
        Scalable Cloud
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">       
Computing Services
        </li>
			</div>

      <div className="pt-5">
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
        Amazon Business
				</li>
        <li className=" text-gray-300 leading-3 fontSize hover:underline cursor-pointer">
        Everything For
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
        Your Business
        </li>
			</div>
	  </div>



    <div className="ml-32">
    <div>
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
					Audible
				</li>
        <li className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          Download
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          Audio Books
        </li>
			</div>

      <div className="pt-5">
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
					Prime Now
				</li>
        <li className=" text-gray-300 leading-3 fontSize hover:underline cursor-pointer">
         2-hour Delivery
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          On Everyday Items
        </li>
			</div>
	  </div>


   

    <div className="ml-32">
            <div>
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
        DPReview
				</li>
        <li className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
        Digital
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">       
Photography
        </li>
			</div>

  	


      <div className="pt-5">
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
        Amazon Prime Music
				</li>
        <li className=" text-gray-300 leading-3 fontSize hover:underline cursor-pointer">
        90 million songs, ad-free
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
       Over 15 million podcasts episodes
        </li>
			</div>
	  </div>


    <div className="ml-36">
            <div>
				<li className=" text-gray-100 text-xs leading-4  font-semibold hover:underline cursor-pointer">
				IMDb
				</li>
        <li className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          Movies,TV
        </li>
        <li  className=" text-gray-300 leading-3  fontSize hover:underline cursor-pointer">
          & Celebrities
        </li>
			</div>

     
	  </div>
    </div>

    <div className=" text-slate-100 ml-52 flex mt-9 text-sm">

      <li className="ml-5 hover:underline cursor-pointer">Conditions of Use & Sale</li>
      <li className="ml-5 hover:underline cursor-pointer">Privacy Notice</li>
      <li className="ml-5 hover:underline cursor-pointer">Interest-Based Ads© </li>
      <li className="ml-5">1996-2022, Amazon.com, Inc. or its affiliates</li>
    
    </div>
    </div>
    </div>
  );
}

export default Footer;
