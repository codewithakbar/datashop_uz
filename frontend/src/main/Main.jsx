import { BsLaptop } from 'react-icons/bs'
import { GrFormNextLink } from 'react-icons/gr'
import { AiFillStar, AiOutlineStar, AiOutlineCustomerService } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'
import { FiMonitor } from 'react-icons/fi'
import asusLogo from '../texnoimg/asusLogo.png'
import { BiCategoryAlt } from 'react-icons/bi'
import s1 from '../texnoimg/s1.png'
import s2 from '../texnoimg/s2.png'
import s3 from '../texnoimg/s3.png'
import s4 from '../texnoimg/s4.png'
import s5 from '../texnoimg/s5.png'
import s6 from '../texnoimg/s6.png'
import mainFooterImg from '../texnoimg/mainFooterImg.png'
import googlepaly from '../media/googleplay.svg'
import appeicon from '../media/apppleicon.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination , Navigation , Autoplay } from "swiper";
import {AiFillHeart , AiOutlineHeart } from 'react-icons/ai'

function Main({ laptops, monitors, add }) {
    const [openShopBtn, setopenShopBtn] = useState('goShopBtnClose')
    
    const [hear , setHear] = useState(<AiFillHeart/>)
    function addIzb() {
        
    }


    return (
        <main>
            <div className="mainlaptops">
                <div className="laptopsHeaader">
                    <span><BsLaptop className='lapIcon'  color='#3C3C3C' /><h3>Ноутбуки</h3></span>
                    <button><h3>Смотреть еще</h3> <GrFormNextLink className='lapIcon' color='#3C3C3C' /></button>
                </div>
                <div className="laptops">
                    {
                        laptops.map(laptop => (
                            <div className="servicess">
                                <div className="laptop">
                                    <div className="content">
                                        <div className="box">
                                            <div className="inner">
                                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                                    {/* <AiFillHeart className='hear'/> */}
                                                    <Link to='/laptop' onClick={() => add({ id: laptop.id ,img :laptop.img })}> <button className="goShopBtnClose"><FiShoppingCart />В корзину</button></Link>
                                                    <img src={laptop.img} alt="" />
                                                </div>
                                                <div className="laptopInfo">
                                                    <Link to='/laptop'>  <span className='lapName'>{laptop.name}</span></Link>
                                                    <div className="eva">
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiOutlineStar className='evaCompanent' color='#E81D1C' />
                                                    </div>
                                                    <span id='productPrice' className='price'>${laptop.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mainlaptops">
                <div className="laptopsHeaader">
                    <span><FiMonitor className='lapIcon' color='#3C3C3C' /><h3>Мониторы</h3></span>
                    <button><h3>Смотреть еще</h3> <GrFormNextLink color='#3C3C3C' size='30px' /></button>
                </div>
                <div className="laptops">
                    {
                        monitors.map(monitor => (
                            <div className="servicess">
                                <div className="laptop">
                                    <div className="content">
                                        <div className="box">
                                            <div className="inner">
                                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                                    <img src={monitor.img} alt="" />
                                                    <Link to='/laptop' onClick={() => add({ img: monitor.img })}> <button className="goShopBtnClose"><FiShoppingCart />В корзину</button></Link>
                                                </div>
                                                <div className="laptopInfo">
                                                    <span>{monitor.name}</span>
                                                    <div className="eva">
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiOutlineStar className='evaCompanent' color='#E81D1C' />
                                                    </div>
                                                    <span className='price' id='productPrice'>{monitor.prise}00 000 UZS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <span className="brandTitle">
                <BiCategoryAlt className='lapIcon' />
                <h3 className='brandName'>Бренды</h3>
            </span>
            <div className="brendContainer">
                <Swiper
                style={{
                    'background':'#E81D1C' ,
                    'display':'flex',
                    'flexDirection':'column',
                    'justifyContent':'center',
                    'alignItems':'center',
                    'justifySelf':'center',
                    'alignSelf':'center'
                }}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 7,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 7,
                    spaceBetween: 20,
                  },
                  "@1.50": {
                    slidesPerView: 7,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper3"
                > 
                <div className="brend">
                    <div className="brandLogos">
                        <div className="joys">
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='brendCon'>
                                <div className="brandLogo">
                                    <img src={asusLogo} alt="" />
                                </div>
                            </SwiperSlide>
                        </div>
                    </div>
                </div>
                </Swiper>
            </div>   
            <div className="services">
                <span className="brandTitle">
                    <BiCategoryAlt className='lapIcon' />
                    <h3>Наша подборка для вас</h3>
                </span>
                <div className="servicesImages">
                    <div>
                        <img className='sr1' src={s1} alt="" />
                        <img className='sr2' src={s2} alt="" />
                    </div>
                    <div>
                        <img className='sr2' src={s3} alt="" />
                        <img className='sr1' src={s4} alt="" />
                    </div>
                    <div>
                        <img className='sr1' src={s5} alt="" />
                        <img className='sr2' src={s6} alt="" /> 
                    </div>
                </div>
            </div>
            <div className="mainlaptops">
                <div className="laptopsHeaader">
                    <span><AiOutlineCustomerService className='lapIcon' color='#3C3C3C' /><h3>Аксессуары</h3></span>
                    <button><h3>Смотреть еще</h3> <GrFormNextLink color='#3C3C3C' size='30px' /></button>
                </div>
                <div className="laptops">
                    {
                        laptops.map(laptop => (
                            <div className="servicess">
                                <div className="laptop">
                                    <div className="content">
                                        <div className="box">
                                            <div className="inner">
                                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                                    <img src={laptop.img} alt="" />
                                                    <Link to='/laptop' onClick={() => add({ img: laptop.img })}>  <button className="goShopBtnClose"><FiShoppingCart />В корзину</button> </Link>
                                                </div>
                                                <div className="laptopInfo">
                                                    <span>{laptop.name}</span>
                                                    <div className="eva">
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiOutlineStar className='evaCompanent' color='#E81D1C' />
                                                    </div>
                                                    <span className='price' id='productPrice'>{laptop.prise}00 000 UZS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mainFooterLine">
                <img className='immgLIne' src={mainFooterImg} alt="" />
                <div className="mobilAppinfo">
                    <h1>Tez kunda DataShop mobil ilovasi</h1>
                    <div className="mobilAppinfoIcons">
                        <button>
                            <img src={googlepaly} alt="" />
                            <span>
                                <h5>GET IT ON</h5>
                                <h3>Google PLay</h3>
                            </span>
                        </button>
                        <button>
                            <img src={appeicon} alt="" />
                            <span>
                                <h5>Downoload on the</h5>
                                <h3>App Store</h3>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main