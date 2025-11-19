import img24 from "../Img/img24.png";
import img25 from "../Img/img25.png";
import img26 from "../Img/img26.png";
import img27 from "../Img/img27.png";
import img28 from "../Img/img28.png";
import img29 from "../Img/img29.png";
import img30 from "../Img/img30.png";



const Footer = () => {
  return (
    <div className="h-[486px] bg-[#1F1F1F] p-9">
      <div className="flex items-center gap-70  justify-around">
        <div className="flex gap-20 items-center">
          <div>
            <img className="ml-4" src={img24} alt="" />
            <p className="font-museo mt-2 font-normal text-[14px] leading-[100%] text-white">
              Логотип вашего магазина
            </p>
          </div>
          <div>
            <p className="font-museo font-normal text-[18px] leading-[100%] text-white">
              Наш адрес:
            </p>
            <p className="font-museo font-normal text-[18px] leading-[100%] text-white mt-[9px]">
              Москва, ул. Новокосимская д.7
            </p>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div>
            <p className="font-museo font-normal text-[18px] leading-[100%] text-white">
              График работы:
            </p>
            <p className="font-museo font-normal text-[18px] leading-[100%] text-white mt-[9px]">
              Ежедневно с 9:00 до 21:00
            </p>
          </div>
          <button className="w-[275px] h-[50px]  rounded-[6px] bg-[#FF7A1B] opacity-100">
            Заказать звонок
          </button>
        </div>
      </div>
      <div class="mt-9 h-[3px]  bg-[#BBBBBB] opacity-50"></div>
      <div className="flex items-center gap-15 justify-center gap-50 mt-9">
        <div className="flex gap-19">

        <div>
          <h1 className="font-museo font-semibold text-[16px] leading-[100%] align-middle text-white">
            Для покупателей:
          </h1>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-4">
            Доставка
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Гарантия
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Политика конфиденциальности
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Отзывы
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Наши работы
          </p>
        </div>
        <div>
          <h1 className="font-museo font-semibold text-[16px] leading-[100%] align-middle text-white">
            О компании:
          </h1>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-4">
            О Нас
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Доставка и оплата
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Наши работы
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Контакты
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Гарантия
          </p>
        </div>
        <div>
          <h1 className="font-museo font-semibold text-[16px] leading-[100%] align-middle text-white">
            Категории:
          </h1>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-4">
            Беседки
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Бани
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Площадки
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Дома
          </p>
          <p className="font-museo font-normal text-[14px] leading-[100%] align-middle text-[#FFFFFF] mt-3">
            Бренды
          </p>
        </div>
        </div>
        <div>
            <p className="w-[139px] h-[34px] font-museo font-normal text-[14px] leading-[100%] text-[#F9F8F3]">Для регионов(звонок бесплатный)</p>
        <img className="mt-1" src={img25} alt="" />
        <p className="mt-3 font-museo font-normal text-[14px] leading-[100%] text-white">Email: youremail@mailbox.ru</p>
        <p className="mt-2 font-museo font-normal text-[14px] leading-[100%] text-[#F9F8F3]">Мы в соц.сетях:</p>
        <div className="flex mt-2 gap-3">
            <img src={img26} alt="" />
            <img src={img27} alt="" />
            <img src={img28} alt="" />
        </div>
        </div>
             <div>
            <p className="w-[139px] h-[34px] font-museo font-normal text-[14px] leading-[100%] text-[#F9F8F3]">Для регионов(звонок бесплатный)</p>
        <img className="mt-1" src={img29} alt="" />
        <p className="mt-3 font-museo font-normal text-[14px] leading-[100%] text-white">Email: youremail@mailbox.ru</p>
        <p className="mt-2 font-museo font-normal text-[14px] leading-[100%] text-[#F9F8F3]">Мы в соц.сетях:</p>
        <div>
          <p className="w-[150px] mt-3 h-[63px] font-museo font-semibold text-[14px] leading-[151%] align-middle text-white">ООО  "Фаза Групп" 
ИНН:   7751140879 
ОГРН: 1187746273461</p>
        </div>
        </div>
      </div>
    <div class="mt-9 h-[3px]  bg-[#BBBBBB] opacity-50"></div>
    <div className="flex items-center justify-center gap-90 ">
        <p className="w-[298px]  font-museo font-normal text-[14px] align-middle underline text-white">Публичная оферта   
2013-2021 - Товары для дач, 
деревянные конструкции под любые нужды</p>
<img src={img30} alt="" />
    </div>

    </div>
  );
};

export default Footer;
