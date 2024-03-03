import t1 from "../../assets/t1.png";
import t11 from "../../assets/t11.png";
import t2 from "../../assets/t2.png";
import t22 from "../../assets/t22.png";
import t3 from "../../assets/t3.png";
import t33 from "../../assets/t33.png";

export default function Teams() {
  return (
    <div className="mt-[60px] md:w-[1280px] mx-auto m-h[284px]">
      <div className="relative mb-[80px] text-center">
        <h2 className="text-[48px] leading-[56px] font-[700] text-[#050038]">
          Loved by the world's best teams
        </h2>
        <a
          href="#"
          className=" mt-[35px] left-[20%] md:left-[40%] absolute rounded-[24px] border border-[#4262FF] w-[271px] h-[48px] text-[#4262ff] p-[10px] cursor-pointer"
        >
          See all customer stories →
        </a>
      </div>
      <div className="grid md:grid-cols-3 ml-[20%] md:ml-0 ">
        <ul className="mt-[60px]">
          <img src={t1} alt="t1" />
          <p
            className="text-[18px] text-[#050038
] font-[400] leading-[24px] mt-[30px] w-[291px]"
          >
            “When the pandemic hit, those of us who thrive on in-person collaboration were worried
            that our creativity and productivity would suffer. Miro was the perfect tool to help us
            with collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          <div className=" mt-[10px] flex gap-5">
            <img src={t11} alt="t11" />
            <div>
              <li className="text-[14px] leading-[20px] font-[400] text-[#050038]">
                Roxanne Mustafa
              </li>
              <li className="text-[14px] leading-[20px] font-[400] text-[#050038] ">
                Design Team Lead at VMware
              </li>
            </div>
          </div>
        </ul>
        <ul className="mt-[60px]  ">
          <img src={t2} alt="t2" />
          <p
            className="text-[18px] text-[#050038
] font-[400] leading-[24px] mt-[30px] w-[291px]"
          >
            “Miro helps solve one of the major gaps in product design: how to manage tasks across
            product designers whose projects are in different tools.”
          </p>
          <div className="mt-[80px] flex gap-5">
            <img src={t22} alt="t22" />
            <div>
              <li className="text-[14px] leading-[20px] font-[400] text-[#050038]">Jane Ashley</li>
              <li className="text-[14px] leading-[20px] font-[400] text-[#050038] ">
                Head of Design at DocuSign
              </li>
            </div>
          </div>
        </ul>
        <ul className="mt-[60px]  ">
          <img src={t3} alt="t3" />
          <p
            className="text-[18px] text-[#050038
] font-[400] leading-[24px] mt-[30px] w-[291px]"
          >
            “As we used Miro we moved from skepticism to belief to innovation, and now we have a
            tool that’s at the core of what we do and will continue to extend into the future.”
          </p>
          <div className="mt-[80px] flex gap-5">
            <img src={t33} alt="t33" />
            <div>
              <li className="text-[14px] leading-[20px] font-[400] text-[#050038]">Laura Baird</li>
              <li className="text-[14px] leading-[20px] font-[400] text-[#050038] ">
                Associate Design Director at frog
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
