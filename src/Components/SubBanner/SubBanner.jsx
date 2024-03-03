import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
export const SubBanner = () => {
  return (
    <div className="mt-[60px] md:w-[1280px] mx-auto m-h[284px] text-center">
      <h5
        className="font-[400] text-[18px] leading-[24px] mt-[54px]text-[#050038]"
      >
        Trusted by 45M+ users
      </h5>

      <ul className="grid grid-cols-2 md:grid-cols-5 gap-[30px] mt-[45px] px-10">
        <li className="hover:shadow-2xl ps-5">
          <a href="#">
            <img src={b1} alt="brand-img" />
          </a>
        </li>
        <li className="hover:shadow-2xl ps-5">
          <a href="#">
            <img src={b2} alt="brand-img" />
          </a>
        </li>
        <li className="hover:shadow-2xl ps-5">
          <a href="#">
            <img src={b3} alt="brand-img" />
          </a>
        </li>
        <li className="hover:shadow-2xl ps-5">
          <a href="#">
            <img src={b4} alt="brand-img" />
          </a>
        </li>
        <li className="hover:shadow-2xl ps-5">
          <a href="#">
            <img src={b5} alt="brand-img" />
          </a>
        </li>
      </ul>
    </div>
  );
};
