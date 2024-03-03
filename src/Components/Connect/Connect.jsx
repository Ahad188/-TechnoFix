import { FaLongArrowAltRight } from "react-icons/fa"
import workp from '../../assets/integrations.png.png'
 

export const Connect = () => {
  return (
     <div className="mt-[90px] md:w-[1280px] mx-auto m-h[284px] ">
          <div className="md:flex md:justify-between items-center">
          <div className="px-[20px]">
                    <img src={workp} alt="work-img" />
               </div>
               <div className="px-[20px]">
                    <h2 className='md:w-[345px] font-[700] text-[48px] leading-[56px] text-[#050038] tracking-[-1px]'>Connect your tools, close your tabs</h2>
                    <p className=' md:w-[453px] mt-3 font-[400] text-[18px] leading-[24px] text-[#RRGGBBAA
]'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                   <div className="flex items-end gap-4 ">
                   <a href="#" className='mt-[38px] border-b border-solid border-[#4262FF]  items-center gap-3 inline-block'>Learn more </a>
                    <FaLongArrowAltRight />
                   </div>
               </div>
               
          </div>
     </div>
  )
}
