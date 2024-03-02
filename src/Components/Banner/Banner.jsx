import { FaLongArrowAltRight } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import banner from "../../assets/banner.png";
import g from "../../assets/g.png";
import get from "../../assets/get.png";
import cap from "../../assets/cap.png";
export const Banner = () => {
  return (
    <section className="md:w-[1280px] mx-auto m-h[470px] mt-[60px]">
      <div className="md:flex gap-[60px] md:justify-between">
        <div className="md:w-[440px]">
          <h2 className="text-[#050038] text-[48px] font-[700] leading-[56px]">
            Take ideas from better to best
          </h2>
          <p className="text-[#050038] opacity-[0.72] text-[18px] leading-[24px] mt-[29px]">
            Miro is your teams visual platform to connect, collaborate, and create — together.
          </p>
          <div className="mt-[30px]">
            <input
              type="text"
              className=" w-full md:w-[440px] border border-gray-400 rounded-full p-[10px] ps-[30px] text-[#5F5C80] placeholder-[#5F5C80]"
              placeholder="Enter your Work Email"
            />

            <a
              href="#"
              className="flex items-center gap-5 mt-[20px] rounded-[24px] bg-[#4262FF] ps-[30%] h-[51px] text-white cursor-pointer"
            >
              Sing up Free <FaLongArrowAltRight />
            </a>
            <p className="text-[14px] text-[#5F5C80] font-[400] leading-[20px] my-2">
              {" "}
              Collaborate with your team within minutes
            </p>
            <div className="mt-[40px] bg-[#F5F5F7] h-[60px] rounded-[8px] p-5 flex gap-10 cursor-pointer">
             <div className="">
             <ul className="flex text-orange-400 text-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt /> 
              </ul>
              <p className="text-[#050038] text-[11px] font-[400] leading-[15px]">Based on 5149+ reviews:</p>
             </div>
               <a href="#">
                    <img src={g} alt="g-img" />
               </a>
               <a href="#">
                    <img src={get} alt="get-img" />
               </a>
               <a href="#">
                    <img src={cap} alt="cap-img" />
               </a>
            </div>
           
          </div>
        </div>
        <div className="">
          <img className="md:w-[100%]" src={banner} alt="banner pic" />
        </div>
      </div>
    </section>
  );
};
