import img22 from "../Img/img22.png";
import img23 from "../Img/img23.png";

const Pej5 = () => {
  return (
    <div className="flex items-center justify-center gap-30">
      <div>
        <h1 className="font-[Museo Sans Cyrl] font-normal text-[32px] leading-tight tracking-normal align-middle">
          Немного о нас
        </h1>
        <br />
        <div className="w-[732px] h-[2px]  bg-[#FF7A1B]"></div>
        <br />
        <p className="w-[569px] font-[Museo Sans Cyrl] font-light text-[16px] leading-[1.58] tracking-normal align-middle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
          integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec
          senectus duis nibh. In faucibus adipiscing tellus enim, consequat
          integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis
          est.{" "}
        </p>
        <br />
        <div className="flex justify-center  items-center gap-3">
          <img className="mt-[-159px]" src={img22} alt="" />
          <p className="w-[673px] h-[174px] font-[Museo Sans Cyrl] font-normal text-[18px] leading-[1.58] tracking-normal align-middle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
            integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
            nec senectus duis nibh. In faucibus adipiscing tellus enim,
            consequat integer accumsan. Ultrices ipsum nulla consequat malesuada
            enim mollis est. Venenatis, sagittis, amet ornare donec purus
            suscipit nam sodales. Varius sit amet nullam dictumst massa
            consequat odio faucibus.{" "}
          </p>
        </div>
        <p className="ml-14 w-[323px] h-[25px] absolute opacity-50 font-[Museo Sans Cyrl] font-light text-[16px] leading-[1.58] tracking-normal align-middle">
          Никита Данилов, Руководитель компании
        </p>
      </div>
      <div>
        <img className="w-[560px]" src={img23} alt="" />
      </div>
    </div>
  );
};

export default Pej5;
