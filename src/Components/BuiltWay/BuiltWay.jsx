import { FaLongArrowAltRight } from 'react-icons/fa'
import built from '../../assets/built1.png'

export const BuiltWay = () => {
  return (
    <div className="md:w-[1280px] mx-auto m-h[470px] mt-[60px]">
    <h3 className="font-[700] text-[48px] leading-[56px] text-[#050038]"    >Built for the way you work</h3>
     <ul className="flex flex-wrap gap-[30px] md:justify-between items-center mt-4 md:mt-[40px]">
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Brainstorming</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Diagramming</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Meetings & Workshops</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Scrum Events</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Mapping</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Research & Design</a></li>
          <li><a href="#" className="border border-[#F2F2F2] rounded-[24px] pt-[13px] pr-[19px] pb-[15px] ps-[18px] hover:bg-[#F1F3FD]">Strategic Planning</a></li>
          
     </ul>

          <div className="md:flex justify-between gap-[40px] mt-[30px]">
               <div className=" md:p-4  md:w-[500px]">
                    <h4 className='text-[#050038] leading-[24px] text-[18px] font-[400] pt-3 ps-5'>Brainstorming</h4>
                    <p className='text-[18px] w-[330px] mt-[30px] pb-[30px] font-[400] leading-[24px]text-[#050038] ps-5'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>

               <div className="flex items-end gap-4 ps-5">
                   <a href="#" className='mt-[38px] border-b border-solid border-[#4262FF]  items-center gap-3 inline-block'>Learn more </a>
                    <FaLongArrowAltRight />
                   </div>
                     
               </div>
               <div className="right-img p-3">
                    <img src={built} alt="biltway" />
               </div>
          </div>
    </div>
  )
}
