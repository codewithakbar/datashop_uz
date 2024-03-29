

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import victusHead from '../media/vectusHeader.png'

import { Autoplay, Pagination, Navigation } from "swiper";
import CategoryLaptop from '../media/headerCategoryNot.png'
import CategoryPhone from '../media/headerCategoryPhone.png'
import CategoryTv from '../media/headerCategoryTv.png'
import CategoryAcses from '../media/headerCategoryAcses.png'
import { useState } from "react";


function Header() {

    const [Categors , setCategors] = useState([
        {
            id:1,
            bc: 'linear-gradient(180deg, #60B3FF 0%, rgba(41, 90, 185, 0.76) 100%)' ,
            name: 'Ноутбуки' ,
            img: CategoryLaptop
        },
        {
            id:2,
            bc: 'linear-gradient(180deg, #6B3C81 0%, #AC44A2 100%)' ,
            name: 'Смартфоны' ,
            img: CategoryPhone
        },
        {
            id:3,
            bc: 'linear-gradient(180deg, #47BEE3 0%, rgba(0, 26, 255, 0.39) 100%)' ,
            name: 'Телевизоры' ,
            img: CategoryTv
        },
        {
            id:4,
            bc: 'linear-gradient(180deg, #D89551 0%, #BD7C3A 100%)' ,
            name: 'Электроника' ,
            img: CategoryAcses
        },
        {
            id:5,
            bc: 'linear-gradient(180deg, #D89551 0%, #BD7C3A 100%)' ,
            name: 'Электроника' ,
            img: CategoryAcses
        },
        {
            id:6,
            bc: 'linear-gradient(180deg, #47BEE3 0%, rgba(0, 26, 255, 0.39) 100%)' ,
            name: 'Телевизоры' ,
            img: CategoryTv
        },
        {
            id:7,
            bc: 'linear-gradient(180deg, #6B3C81 0%, #AC44A2 100%)' ,
            name: 'Смартфоны' ,
            img: CategoryPhone
        },
        {
            id:8,
            bc: 'linear-gradient(180deg, #60B3FF 0%, rgba(41, 90, 185, 0.76) 100%)' ,
            name: 'Ноутбуки' ,
            img: CategoryLaptop
        },
    ])



    return (
        <header>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#272727",
                    "--swiper-pagination-bullet-inactive-color": "#ffffff",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false
                    }}
                    pagination={{
                      clickable: true
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">     
                    <SwiperSlide id="sw1">
                        <img src={victusHead} alt="" />
                        <div className="headTexnoInfo">
                            <span className="headTexnoInfo-name">HP VICTUS <span className="text-blacGren">15</span></span>
                            <span className="headTexnoInfo-info">СОЗДАН ДЛЯ <span className="text-blacGren">ПРОФЕССИОНАЛОВ</span> ОТ ПРОФЕССИОНАЛОВ</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="sw2">
                        <img src={victusHead} alt="" />
                        <div className="headTexnoInfo">
                            <span className="headTexnoInfo-name">HP VICTUS <span className="text-blacGren">15</span></span>
                            <span className="headTexnoInfo-info">СОЗДАН ДЛЯ <span className="text-blacGren">ПРОФЕССИОНАЛОВ</span> ОТ ПРОФЕССИОНАЛОВ</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="sw3">
                        <img src={victusHead} alt="" />
                        <div className="headTexnoInfo">
                            <span className="headTexnoInfo-name">HP VICTUS <span className="text-blacGren">15</span></span>
                            <span className="headTexnoInfo-info">СОЗДАН ДЛЯ <span className="text-blacGren">ПРОФЕССИОНАЛОВ</span> ОТ ПРОФЕССИОНАЛОВ</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="sw4">
                        <img src={victusHead} alt="" />
                        <div className="headTexnoInfo">
                            <span className="headTexnoInfo-name">HP VICTUS <span className="text-blacGren">15</span></span>
                            <span className="headTexnoInfo-info">СОЗДАН ДЛЯ <span className="text-blacGren">ПРОФЕССИОНАЛОВ</span> ОТ ПРОФЕССИОНАЛОВ</span>
                        </div>
                    </SwiperSlide>
            </Swiper>
            <div className="headerCategory">
{                                                                           
                    Categors.map((category,index) => (
                    <div className="headerCategory-card" style={{background: category.bc}} key={category.id}>
                        <h2>{category.name}</h2>
                        <div className="headerCategory-img">
                            <img src={category.img} alt="" />
                        </div>
                    </div>
                    ))
                }
            </div>
            {/* respansive uchun cartegoryalar */}
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[ Navigation]}
            className="mySwiper mySwiper2"
            >
            {
                Categors.map((category,index) => (
                    <SwiperSlide>
                        <div className="headerCategory-card" style={{background: category.bc}} key={category.id}>
                            <h2>{category.name}</h2>
                            <div className="headerCategory-img">
                                <img src={category.img} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </header>
    )
}

export default Header