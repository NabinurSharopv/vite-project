import img1 from '../Img/img1.png'
import img2 from '../Img/img2.png'
import img3 from '../Img/img3.png'
import img4 from '../Img/img4.png'
import img5 from '../Img/img5.png'

const Nav = () => {
  return (
    <div>
        <div className="flex items-center gap-100 ml-[-20px] justify-around h-[45px] bg-[#2B150D] text-white">
            <div className="flex items-center gap-[30px]">

                 <div className="flex items-center gap-[10px]">
                     <img src={img1} alt="" />
                     <h1 className=" h-[16px] opacity-100 font-museo font-semibold text-[13px] leading-[100%] tracking-[0]">Ваш город: Константинополь</h1>
                </div> 
                     <div className="flex items-center gap-[10px]">
                     <img src={img1} alt="" />
                     <h1 className="     h-[16px] opacity-100 font-museo font-semibold text-[13px] leading-[100%] tracking-[0]">Наш офис: Москва, ул. Новокосимская д.7</h1>
                </div> 
            </div>
            <ul className="flex items-center  gap-[35px]">
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Статьи</li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Оплата</li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Гарантия</li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Дилерам </li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Вакансии</li>
            </ul>
        </div>
        <div className="flex items-center gap-11 p-5 justify-around bg-[#F9F8F3]">
             <div>
              <div className="flex ml-5 gap-[10px]">
                   <div className="w-[34px] h-[32px] rounded-[9px] bg-[#FF7A1B]"></div>
                    <div className="w-[34px] h-[32px] rounded-[9px] bg-[#2B150D]"></div>
                    <div className="w-[34px] h-[32px] rounded-[9px] bg-[#FFD634]"></div>
              </div>
              <p className="text-custom mt-3 font-museo-sans w-[172px] h-[17px] text-[14px] leading-none tracking-normal">Логотип вашего магазина</p>
             </div>
             <div className="grid">
              <div className="flex items-center gap-[17px]">
                <span className="flex items-center gap-2"><img src={img2} alt="" /><p className="text-custom font-museo-sans h-[16px] text-[13px] leading-none tracking-normal">Лучшие цены</p></span>
                <span className="flex items-center gap-2"><img src={img2} alt="" /><p className="text-custom font-museo-sans h-[16px] text-[13px] leading-none tracking-normal">Бесплатная доставка</p></span>
                <span className="flex items-center gap-2"><img src={img2} alt="" /><p className="text-custom font-museo-sans h-[16px] text-[13px] leading-none tracking-normal">Гарантия от 3х лет</p></span>
                <span className="flex items-center gap-2"><img src={img2} alt="" /><p className="text-custom font-museo-sans h-[16px] text-[13px] leading-none tracking-normal">Более 1 000 товаров</p></span>
              </div>
              <div className="flex mt-2">
              <input placeholder='Поиск по каталогу...'  className=" w-[440px] p-3 h-[45px] border border-[#FFFFFF] bg-[#E8E8E8] rounded-[6px]" type="text" />
<button className="relative flex ml-[-20px] items-center justify-center w-[156px] h-[45px] bg-[#FFD634]  rounded-[10px] text-black font-museo-sans text-[16px]  ">
    <span className="bg-[#FFD634] transform "></span>
    <span className="relative">Найти</span>
</button>             
             </div>
             </div>
             <div>
              <span  className='flex gap-2 ml-[-19px] items-center'><img src={img3} alt="" /><p className="font-museo-sans font-[400] text-[13px] leading-[100%] tracking-0 text-black">Ежедневно с 9:00 до 21:00</p></span>
             <p className="w-[157px] mt-2 h-[22px] font-museo-sans font-[600] text-[18px] leading-[100%] tracking-0 text-black">8 (800) 800-00-00</p>
            <p className="w-[157px] h-[22px] font-museo-sans font-[600] text-[18px] leading-[100%] tracking-0 text-black">8 (495) 800-00-00</p>
             </div>
             <div>
              <span className='ml-6  flex items-center gap-2'>
<img src={img4} alt="" />
<p className="w-[134px] h-[16px] font-museo-sans font-[400] text-[13px] leading-[100%] tracking-0 text-black">youremail@mailbox.ru</p>
              </span>
              <button className="mt-2 w-[223px] h-[44px] top-[87px] left-[1548px] bg-[#FF7A1B] text-white font-museo-sans text-[16px] leading-[100%] tracking-0 rounded-[6px] opacity-100">Заказать звонок</button>
             </div>
        </div>
        <div className="flex items-center gap-18 ml-[-8px] justify-center">
          <div>
            <button className="flex items-center justify-center gap-9 w-[268px] h-[50px] bg-[#FFD634] text-black font-museo-sans text-[16px] leading-[100%] tracking-0 rounded-md">
               <img src={img5} alt="" />
               <p className="  bg-[#FFD634] text-black font-museo-sans font-[400] text-[16px]">Каталог товаров</p>
            </button>
          </div>
          <div>
            <ul className="flex items-center gap-45">
              <li className=" font-museo-sans text-black text-[16px]">О компании</li>
              <li className=" font-museo-sans text-black text-[16px]">Отзывы</li>
              <li className=" font-museo-sans text-black text-[16px]">Наши работы</li>
              <li className=" font-museo-sans text-black text-[16px]">Доставка</li>
              <li className=" font-museo-sans text-black text-[16px]">Контакты</li>

            </ul>
          </div>
        </div>
    </div>
  )
}

export default Nav
