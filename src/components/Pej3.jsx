import React from 'react'
import img14 from '../Img/img14.png'
import img15 from '../Img/img15.png'
import img16 from '../Img/img16.png'
import img17 from '../Img/img17.png'
import img18 from '../Img/img18.png'
import img19 from '../Img/img19.png'
import img20 from '../Img/img20.png'


const Pej3 = () => {
  return (
    <>
     <div className="flex items-center justify-around gap-280 mt-5">
        <h1 className=" font-normal text-[32px]  tracking-tight ">Хиты продаж</h1>
        <span><p className="font-[Museo Sans Cyrl] font-normal text-[16px]">Все товары</p></span>
     </div>
     <div className=" h-[60px] bg-[#F9F8F3] flex items-center gap-35">
        <p className="ml-9 text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Бани</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Площадки</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Дома</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Перголы</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Бренды</p>

     </div>

<div className="flex itemc-center justify-center flex-wrap  mt-10 mb-10">
  <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
</div>
<br /><br />
     <div className="flex items-center justify-around gap-280 mt-5">
        <h1 className=" font-normal text-[32px]  tracking-tight ">Хиты продаж</h1>
        <span><p className="font-[Museo Sans Cyrl] font-normal text-[16px]">Все товары</p></span>
     </div>
     <div className=" h-[60px] bg-[#F9F8F3] flex items-center gap-35">
        <p className="ml-9 text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Бани</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Площадки</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Дома</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Перголы</p>
             <p className="text-[#898989] font-[Museo Sans Cyrl] font-light text-[18px] leading-tight tracking-normal text-center align-middle">Бренды</p>

     </div>

<div className="flex itemc-center justify-center flex-wrap  mt-10 mb-10">
  <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
    <div className="w-[300px]   p-2  border border-1 border-blue-400">
     <img src={img14} alt="" />
    <div className='p-1'>

     <div className="flex items-center justify-between">
      <p className="w-[54px] h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">Артикул: </p>
     <p className=" h-[14px] font-[Museo Sans Cyrl] font-light text-[12px] leading-tight tracking-normal align-middle">0000001</p>
     </div>
     <p className="w-[200px] font-[Museo Sans Cyrl] font-normal text-[16px] leading-tight tracking-normal align-middle">
      Название товара длинное 
     в две строки наверное
     </p>
     <div className="flex gap-3 items-center">
      <img src={img15} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Размеры: ..................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">12.3 x 14.6 x 4.3 м.</p>
     </div>
       <div className="flex gap-3 items-center">
      <img src={img16} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Площадь: ......................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">33 м2</p>
     </div>
         <div className="flex gap-3 items-center">
      <img src={img17} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Вместимость: ..............................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">15 чел. </p>
     </div>
      <div className="flex gap-3 items-center">
      <img src={img18} alt="" />
      <p className="h-[22px] font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal align-middle">Гарантия: .....................................</p>
     <p className="font-[Museo Sans Cyrl] font-light text-[13px] leading-tight tracking-normal text-right align-middle">10 лет </p>
     </div>
     <div className="flex">
      <div>
      <div className="flex items-center gap-2">
<img src={img19} alt="" />
<img src={img20} alt="" />
      </div>
      <h1 className="w-[155px] h-[26px] font-[Museo Sans Cyrl] font-semibold text-[22px] leading-tight tracking-normal  text-[#FF3838]">5 023 900 ₽</h1>
      </div>
      <button className="w-[131px] h-[41px] border border-1 border-[#FFD634] bg-[#FFD634] rounded-[5px]">Купить</button>
     </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Pej3