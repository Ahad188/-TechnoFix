import { FaLongArrowAltRight } from "react-icons/fa";
import built from "../../assets/built1.png";

export const BuiltWay = () => {
  return (
 
<div className="max-w-[1280px] mx-auto mt-[60px] px-6">
      <h3 className="font-bold text-4xl md:text-5xl text-[#050038] leading-[1.4]">Built for the way you work</h3>
      <ul className="flex flex-wrap gap-6 md:justify-between items-center mt-4 md:mt-8">
        
        {/* Add other list items */}
        <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Brainstorming</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Diagramming</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Meetings & Workshops</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Scrum Events</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Mapping</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Research & Design</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Strategic Planning</a></li>
      </ul>

      <div className="md:flex justify-between  mt-8">
        <div className="md:w-[50%]">
          <h4 className="text-[#050038] text-xl md:text-2xl font-normal pt-3">Brainstorming</h4>
          <p className="text-lg md:text-xl mt-4 md:mt-6 text-[#050038] w-[302px]">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
          <div className="flex items-center mt-6">
            <a href="#" className="border-b border-[#4262FF] inline-block mr-2">Learn more</a>
            <FaLongArrowAltRight className="text-[#4262FF]"/>
          </div>
        </div>
        <div className="md:w-[50%] mt-6 md:mt-0">
          <img src={built} alt="Built Way" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
};
