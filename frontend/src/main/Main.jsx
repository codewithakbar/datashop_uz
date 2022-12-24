import {BsLaptop} from 'react-icons/bs'
import {GrFormNextLink} from 'react-icons/gr'
import {AiFillStar , AiOutlineStar , AiOutlineCustomerService} from 'react-icons/ai'

import {FiShoppingCart} from 'react-icons/fi'
import { useState } from 'react'
import { useRef } from 'react'
import m1 from '../texnoimg/m1.png'
import m2 from '../texnoimg/m2.png'
import m3 from '../texnoimg/m3.png'
import m4 from '../texnoimg/m4.png'
import {FiMonitor} from 'react-icons/fi'
import asusLogo from '../texnoimg/asusLogo.png'
import {BiCategoryAlt} from 'react-icons/bi'
import s1 from '../texnoimg/s1.png'
import s2 from '../texnoimg/s2.png'
import s3 from '../texnoimg/s3.png'
import s4 from '../texnoimg/s4.png'
import s5 from '../texnoimg/s5.png'
import s6 from '../texnoimg/s6.png'
import mainFooterImg from '../texnoimg/mainFooterImg.png'
import googlepaly from '../media/googleplay.svg'
import appeicon from '../media/apppleicon.svg'

function Main({laptops}) {
    const [openShopBtn ,setopenShopBtn] = useState('goShopBtnClose')

    const [monitors , setMonitors] = useState([
        {
            img: m1 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m2 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m3 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m4 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m1 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m2 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m3 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m4 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m1 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        },
        {
            img: m2 ,
            name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
            prise: 14.500
        }
    ])

    return (
        <main>
            <div className="mainlaptops">
                <div className="laptopsHeaader">
                    <span><BsLaptop size='36px' color='#3C3C3C'/><h3>Ноутбуки</h3></span>
                    <button><h3>Смотреть еще</h3> <GrFormNextLink color='#3C3C3C' size='30px'/></button>
                </div>
                <div className="laptops">
                    {
                        laptops.map(laptop => (
                            <div className="laptop">
                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                    <img src={laptop.img} alt="" />
                                    <button className="goShopBtnClose"><FiShoppingCart/>В корзину</button>
                                </div>
                                <div className="laptopInfo">
                                    <span>{laptop.name}</span>
                                    <div className="eva">
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiOutlineStar className='evaCompanent'  color='#E81D1C'/>
                                    </div>
                                    <span className='price'>{laptop.prise}00 000 UZS</span>
                                </div>
                            </div>
                       ))
                    }
                </div>
            </div>
            <div className="mainlaptops">
                <div className="laptopsHeaader">
                    <span><FiMonitor size='36px' color='#3C3C3C'/><h3>Мониторы</h3></span>
                    <button><h3>Смотреть еще</h3> <GrFormNextLink color='#3C3C3C' size='30px'/></button>
                </div>
                <div className="laptops">
                    {
                        monitors.map(monitor => (
                            <div className="laptop">
                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                    <img src={monitor.img} alt="" />
                                    <button className="goShopBtnClose"><FiShoppingCart/>В корзину</button>
                                </div>
                                <div className="laptopInfo">
                                    <span>{monitor.name}</span>
                                    <div className="eva">
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiOutlineStar className='evaCompanent'  color='#E81D1C'/>
                                    </div>
                                    <span className='price'>{monitor.prise}00 000 UZS</span>
                                </div>
                            </div>
                       ))
                    }
                </div>
            </div>
            <div className="brend">
                <span className="brandTitle">
                    <BiCategoryAlt size='38px'/>
                    <h3>Бренды</h3>
                </span>
                <div className="brandLogos">
                    <div className="joys">
                        <div className="brandLogo">
                            <img src={asusLogo} alt="" />
                        </div>
                        <div className="brandLogo">
                            <img src={asusLogo} alt="" />
                        </div>
                        <div className="brandLogo">
                            <img src={asusLogo} alt="" />
                        </div>
                        <div className="brandLogo">
                            <img src={asusLogo} alt="" />
                        </div>
                        <div className="brandLogo">
                            <img src={asusLogo} alt="" />
                        </div>
                        <div className="brandLogo">
                            <img src={asusLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <span className="brandTitle">
                    <BiCategoryAlt size='38px'/>
                    <h3>Наша подборка для вас</h3>
                </span>
                <div className="servicesImages">
                    <div>
                        <img src={s1} alt="" />
                        <img src={s2} alt="" />
                    </div>
                    <div>
                        <img src={s3} alt="" />
                        <img src={s4} alt="" />
                    </div>
                    <div>
                        <img src={s5} alt="" />
                        <img src={s6} alt="" />
                    </div>
                </div>
            </div>
            <div className="mainlaptops">
                <div className="laptopsHeaader">
                    <span><AiOutlineCustomerService size='36px' color='#3C3C3C'/><h3>Аксессуары</h3></span>
                    <button><h3>Смотреть еще</h3> <GrFormNextLink color='#3C3C3C' size='30px'/></button>
                </div>
                <div className="laptops">
                    {
                        laptops.map(laptop => (
                            <div className="laptop">
                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                    <img src={laptop.img} alt="" />
                                    <button className="goShopBtnClose"><FiShoppingCart/>В корзину</button>
                                </div>
                                <div className="laptopInfo">
                                    <span>{laptop.name}</span>
                                    <div className="eva">
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiOutlineStar className='evaCompanent'  color='#E81D1C'/>
                                    </div>
                                    <span className='price'>{laptop.prise}00 000 UZS</span>
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