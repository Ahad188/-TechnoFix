import { FaLongArrowAltRight } from 'react-icons/fa'
import './ways.css'

export const Ways = () => {

  return (
    <div className="bg-img mt-[60px] relative w-[100%]">
          <div className="text absolute top-[30%] right-[10%] text-center">
               <h3 className='text-[#050038] font-[700] text-[22px] leading-[38px] tracking-[-0.5px]'>The Ways We Work</h3>
               <p className='my-3 text-[18px] font-[400] leading-[24px] text-[#050038]'>How has our relationship with work changed?</p>
               <a
              href="#"
              className="flex items-center  gap-3 rounded-[50px] bg-[#4262FF] p-[20px] h-[48px] w-[172px] mx-auto text-white cursor-pointer"
            >
              Sing up Free <FaLongArrowAltRight />
            </a>
          </div>
    </div>
  )
}
