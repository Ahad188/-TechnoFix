import './footer.css'
import logo from '../../assets/Miro..png'
import { FaTwitter,FaFacebook,FaYoutube } from "react-icons/fa";
 export const Footer = () => {
   return (
      
     <footer className="mt-12 bg-[#02033B] w-full">
      <div className="max-w-[1240px] mx-auto pt-12 px-6">
        <div className="flex flex-wrap gap-[60px] ">
          <div className="  mb-8 md:mb-0 md:mr-8">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">Scan. Detect. Remove.</h3>
            <div className="icons flex gap-5">
              <FaTwitter className="h-10 w-10 bg-white p-2 rounded-full" />
              <FaFacebook className="h-10 w-10 bg-white p-2 rounded-full" />
              <FaYoutube className="h-10 w-10 bg-white p-2 rounded-full" />
            </div>
            <div className="flex gap-5 mt-5">
              <a className="underline text-sm leading-[14px] font-normal text-white" href="#">Privacy Policy</a>
              <a className="underline text-sm leading-[14px] font-normal text-white" href="#">Terms of Service</a>
            </div>
            <p className="mt-5 text-sm leading-[20px] text-white w-[306px] md:w-[400px]">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
            <p className="mt-5 text-sm leading-[20px] text-white w-[306px] md:w-[400px]">Designed & developed by <a className="underline text-sm leading-[14px] font-normal text-white" href="#">Bigger Picture</a></p>
          </div>

          <div className="  mb-8 md:mb-0">
            <a href="#"><img className="border-b border-white pb-7 px-5" src={logo} alt="logo" /></a>
            <ul className="ml-5 mt-3">
              <li className="my-3"><a className="lis text-xl leading-[25px] font-bold text-[#FFC247]" href="#">iPhone</a></li>
              <li className="my-3"><a className="lis text-xl leading-[25px] font-bold text-[#FFC247]" href="#">Android</a></li>
              <li className="my-3"><a className="lis text-xl leading-[25px] font-bold text-[#FFC247]" href="#">Windows</a></li>
              <li className="my-3"><a className="lis text-xl leading-[25px] font-bold text-[#FFC247]" href="#">Help</a></li>
              <li className="my-3"><a className="lis text-xl leading-[25px] font-bold text-[#FFC247]" href="#">About</a></li>
              <li className="my-3"><a className="lis text-xl leading-[25px] font-bold text-[#FFC247]" href="#">Insights</a></li>
            </ul>
          </div>

          <div className=" w-[436px] ">
            <div className="bg-[#FFC247] rounded-xl p-6 md:h-[232.39px] right-img">
              <h4 className="text-[#02033B] text-xl font-bold mb-4">Sign up to our newsletter</h4>
              <p className="text-[#02033B] font-normal text-sm leading-[20px] mb-4">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
              <div className="flex">
                <input className="rounded p-2 " type="text" placeholder="Enter Email" />
                <input className="bg-[#02033B] text-white px-4 py-2 rounded" type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs leading-[15px] text-white w-full md:w-[549px]">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
      </div>
    </footer>
   )
 }
 