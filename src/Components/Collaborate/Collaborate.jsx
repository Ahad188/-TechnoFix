import { FaLongArrowAltRight } from "react-icons/fa";
import photo from "../../assets/homepage-33-b.svg.png";

export const Collaborate = () => {
  return (
    <div className="mt-[60px] md:w-[1280px] mx-auto m-h[284px] text-center">
      <div className=" relative">
        <img src={photo} alt="" className="w-[180px] h-[150px]  absolute left-[55%] top-[-50%]" />
        <h3 className="h-[168px] w-[458px] mx-auto font-[700] text-[48px] leading-[56px] text-[#050038] pt-5 text-center">
          Collaborate without constraints
        </h3>
      </div>
      {/* card */}
      <div className="grid md:grid-cols-3 gap-[30px]">
        <ul className="pt-[23px] pr-[22px] pb-[44px] ps-[24px] hover:shadow-2xl text-left">
          <li className="text-[#050038] text-[24px] leading-[28px] font-[700] ">Free forever</li>
          <p
            className=" w-[313px]font-[400] text-[18px] leading-[24px] text-[#RRGGBBAA
] mt-3"
          >
            Our free plan gives you unlimited team members, 3 boards, and 300+ expert- <br />
            made templates. Signing up with your <br /> work email lets you bring in your team{" "}
            <br /> faster. See our <br />
            <a href="#" className="text-[#4262FF] font-[400] text-[18px] leading-[24px]">
              pricing plans
            </a>{" "}
            for more features.
          </p>
        </ul>
        <ul className="pt-[23px] pr-[22px] pb-[44px] ps-[24px] hover:shadow-2xl text-left">
          <li className="text-[#050038] text-[24px] leading-[28px] font-[700]">
            Easy integrations
          </li>
          <p
            className=" w-[313px]font-[400] text-[18px] leading-[24px] text-[#RRGGBBAA
] mt-3"
          >
            Miro has 100+ powerful integrations <br /> with tools you already use like G Suite,{" "}
            <br />
            Slack, and Jira, so your workflow is <br /> seamless. View the full list in our <br />
            <a href="#" className="text-[#4262FF] font-[400] text-[18px] leading-[24px]">
              {" "}
              Marketplace .
            </a>
          </p>
        </ul>
        <ul className="pt-[23px] pr-[22px] pb-[44px] ps-[24px] hover:shadow-2xl text-left ">
          <li className="text-[#050038] text-[24px] leading-[28px] font-[700]">Security first</li>
          <p
            className=" w-[313px]font-[400] text-[18px] leading-[24px] text-[#RRGGBBAA
] mt-3"
          >
            We treat your data like you would — <br /> with the utmost care. We follow <br />
            industry-leading security standards and <br /> give you tools to protect intellectual{" "}
            <br />
            property. Learn more <br />
            at our{" "}
            <a href="#" className="text-[#4262FF] font-[400] text-[18px] leading-[24px]">
              {" "}
              Trust Center .
            </a>
          </p>
        </ul>
      </div>
      <a
              href="#"
              className="flex items-center  gap-3 mt-[60px] rounded-[50px] bg-[#4262FF] p-[20px] h-[48px] w-[172px] mx-auto text-white cursor-pointer"
            >
              Sing up Free <FaLongArrowAltRight />
            </a>
    </div>
  );
};
