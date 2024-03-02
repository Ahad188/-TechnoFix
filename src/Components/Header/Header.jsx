import { TbWorld } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from '../../assets/Vector.png'

export const Header = () => {
  return (
    <>
     <div className="navbar bg-[#FFFFFF] border border-b-[#F0F0F0]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <details>
          <summary className="text-[#050038] text-[16px] font-[400]">Product </summary>
          <ul className="p-2"></ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="text-[#050038] text-[16px] font-[400]">Resources </summary>
          <ul className="p-2"></ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="text-[#050038] text-[16px] font-[400]">Solutions </summary>
          <ul className="p-2"></ul>
        </details>
      </li>
      <li><a className="text-[#050038] text-[16px] font-[400]" href="#">Enterprise</a></li>
      <li><a className="text-[#050038] text-[16px] font-[400]" href="#">Pricing</a></li>
      </ul>
    </div>
    <a className="text-3xl hidden md:block  "> 
    <img src={logo}   alt="logo" />
    </a>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <li  >
        <details>
          <summary className="text-[#050038] text-[16px] font-[400]">Product </summary>
          <ul className="p-2"></ul>
        </details>
      </li>
      <li >
        <details>
          <summary className="text-[#050038] text-[16px] font-[400]">Resources </summary>
          <ul className="p-2"></ul>
        </details>
      </li>
      <li  >
        <details>
          <summary className="text-[#050038] text-[16px] font-[400]">Solutions </summary>
          <ul className="p-2"></ul>
        </details>
      </li>
      <li ><a className="text-[#050038] text-[16px] font-[400]" href="#">Enterprise</a></li>
      <li ><a className="text-[#050038] text-[16px] font-[400]" href="#">Pricing</a></li>
    </ul>
  </div>
    
  </div>
 
  <div className="navbar-center md:navbar-end">
  <ul className=" items-center flex gap-5 justify-between">
      <li ><a className="text-[#050038] text-[16px] font-[400] flex items-center gap-3" href="#"><TbWorld /> EN</a></li>
      <li ><a className="text-[#050038] text-[16px] font-[400]" href="#">Contact Sales</a></li>
      <li ><a className="text-[#050038] text-[16px] font-[400]" href="#">Login</a></li>
   <li> <a href="#" className="flex items-center gap-2 md:gap-5 rounded-[24px] p-2 md:pt-[17px] md:pr-[22px] md:pb-[17px] md:pl-[22px] bg-[#4262FF] md:h-[50px] text-white">Sing up Free <FaLongArrowAltRight /></a></li>
 
    </ul>
  </div>
</div>
    </>
  )
}
