import img1 from '../Img/img1.png'

const Nav = () => {
  return (
    <div>
        <div className="flex items-center justify-around h-[45px] bg-[#2B150D] text-white">
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
            <ul className="flex items-center  gap-[20px]">
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Статьи</li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Оплата</li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Оплата</li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Оплата</li>
                <li className="w-[43px] h-[16px] font-museo font-normal text-[13px] ">Оплата</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
