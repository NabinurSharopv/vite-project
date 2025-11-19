import React from 'react'
import img8 from "../Img/img8.png";
import img9 from "../Img/img9.png";
import img10 from "../Img/img10.png";
import img11 from "../Img/img11.png";
import img12 from "../Img/img12.png";
import img13 from "../Img/img13.png";


const Cards = () => {
  return (
    <>
    <div className="container max-w-full">
        <div className="wrapper ml-8">
                <h2 className='text-[40px]'>Категории</h2>
            <div className="cards flex gap-10">

                <div className="card w-110  bg-[#FFF7D9] mt-8">
                    <h3 className='px-6 text-[24px] mt-8'>Беседки</h3>

                    <div className="r flex px-6 gap-40">
                    <div className="k">

                    <p>Подкатегория 1</p>
                    <p>Подкатегория 2</p>
                    <p>Подкатегория 3</p>
                    </div>

                    <div className="m">
                        <p>Подкатегория 4</p>
                        <p>Подкатегория 5</p>
                        <p>Подкатегория 6</p>
                    </div>
                    </div>

                    <div className="gi">
                        <img className="mt-39" src={img8} alt="" />
                    </div>


                </div>

                  
                  <div className="box">

                    <div className="boxs bg-[#FFF7D9] w-114 flex mt-8 gap-30 p-6">
                        <div className="v">
                        <h3 className='text-[30px]'>Бани</h3>
                        <p>Подкатегория 1</p>
                        <p>Подкатегория 2</p>
                        <p>...</p>

                        </div>

                        <img src={img9} alt="" />
                    </div>




                      <div className="boxs bg-[#FFF7D9] w-114 flex mt-8 gap-30 p-6">
                        <div className="v">
                        <h3 className='text-[30px]'>Перголы</h3>
                        <p>Подкатегория 1</p>
                        <p>Подкатегория 2</p>
                        <p>...</p>

                        </div>

                        <img src={img10} alt="" />
                    </div>




                        <div className="boxs bg-[#FFF7D9] w-114 flex mt-8 gap-30 p-6">
                        <div className="v">
                        <h3 className='text-[30px]'>Бренды</h3>
                        <p>Подкатегория 1</p>
                        <p>Подкатегория 2</p>
                        <p>...</p>

                        </div>

                        <img src={img11} alt="" />
                    </div>





                  </div>




                       <div className="box">

                    <div className="boxs bg-[#FFF7D9] w-120 h-66 flex mt-8 gap-30 p-6">
                        <div className="v">
                        <h3 className='text-[28px]'>Детские площадки</h3>
                        <p>Подкатегория 1</p>
                        <p>Подкатегория 2</p>
                        <p>Подкатегория 3</p>
                        <p>Подкатегория 4</p>
                        <p>Подкатегория 5</p>
                       
                       

                        </div>

                        <img src={img12} alt="" className='w-40' />
                    </div>




                      <div className="boxs bg-[#FFF7D9] w-120 h-66 flex mt-8 gap-30 p-6">
                        <div className="v">
                        <h3 className='text-[30px]'>Дома</h3>
                        <p>Подкатегория 1</p>
                        <p>Подкатегория 2</p>
                        <p>Подкатегория 3</p>
                        <p>Подкатегория 4</p>
                       
                        

                        </div>

                        <img src={img13} alt="" className='w-40' />
                    </div>

                     </div>



            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Cards