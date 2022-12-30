import '../style/shop.css'
import { AiFillStar, AiOutlineStar, AiOutlineCustomerService } from 'react-icons/ai'
import laptop from '../media/laptop.png'
import laptopuse from '../media/laptopuse.png'
import laptopbottom from '../media/vectusHeader.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Laptop({ adds , setAddKorzinka}) {

    const [borger, setBorder] = useState('non')
    const [borgerr, setBorderr] = useState('non')
    const [borgerrr, setBorderrr] = useState('non')
    const [img, setImg] = useState(laptop)
    const [imgg, setImgg] = useState(laptop)
    const [img2, setImg2] = useState(laptopuse)
    const [img3, setImg3] = useState(laptopbottom)


    function border() {
        setBorder('active')
        setBorderr('non')
        setBorderrr('non')
        setImgg(adds.img)
    }
    function borderr() {
        setBorderr('active')
        setBorder('non')
        setBorderrr('non')
        setImgg(adds.img)

    }
    function borderrr() {
        setImgg(adds.img)
        setBorderrr('active')
        setBorder('non')
        setBorderr('non')
    }

    function Addkor() {
        let id = 1
        setAddKorzinka(value =>([
          ...value,  
            {  
                id: id++ ,
                img: adds.img
            }
        ]))
    }

    return (
        <div className="Laptop">
            <div className="LaptopContainer">
                <span className="kategoriLink">Главная  /  Категория / Ноутбуки / HP / HP Victus 15 RTX 3050 ...   </span>
                <div className="LaptopName">
                    <h1 className="LaptopTitle">HP Victus 15 RTX 3050 / i5-12400F / 8 GB RAM</h1>
                    <div className="eva">
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                        <AiOutlineStar className='evaCompanent' color='#E81D1C' />
                    </div>
                </div>
                <div className="LaptopTovar">
                    <div className="LaptopImage">
                        <div className="LaptopImgg">
                            <img className='laptopImgg' src={adds.img} alt="" />
                        </div>
                        <div className="ImagesMini">
                            <div onClick={border} className={`miniBorder  ${borger}`}>
                                <img src={adds.img} alt="" />
                            </div>
                            <div onClick={borderr} className={`miniBorder  ${borgerr}`} >
                                <img src={adds.img} alt="" />
                            </div>
                            <div onClick={borderrr} className={`miniBorder  ${borgerrr}`}>
                                <img src={adds.img} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="LaptopInfo">
                        <p className="InfoTitle">Коротко о товаре</p>
                        <div className="">
                            <span>Бренд</span>
                            <p>HP</p>
                        </div>
                        <div className="">
                            <span>Диогональ экрана</span>
                            <p>16*</p>
                        </div>
                        <div className="">
                            <span>Тип процессора</span>
                            <p>Intel i5-12400F</p>
                        </div>
                        <div className="">
                            <span>Оперативный память(RAM)</span>
                            <p>8 GB</p>
                        </div>
                        <div className="">
                            <span>Жесткий диск (SSD)</span>
                            <p>512 GB</p>
                        </div>
                        <div className="">
                            <span>Видео карта</span>
                            <p>RTX 3050</p>
                        </div>
                        <span className='drection'>Все характеристики</span>
                    </div>
                    <div className="LaptopMoneyDiv">
                        <div className="LaptopKupit">
                            <h1 className="sum">6 800 000 СУМ</h1>
                            
                                <button onClick={Addkor}>
                                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6172 7.00001C22.4319 6.70063 22.1664 6.45114 21.8467 6.27588C21.5271 6.10062 21.1641 6.00557 20.7933 6.00001H7.05995L6.43766 3.74001C6.37479 3.52184 6.23452 3.32995 6.03969 3.19558C5.84487 3.06121 5.60697 2.99227 5.36475 3.00001H3.21891C2.93436 3.00001 2.66146 3.10536 2.46025 3.2929C2.25904 3.48044 2.146 3.73479 2.146 4.00001C2.146 4.26522 2.25904 4.51958 2.46025 4.70711C2.66146 4.89465 2.93436 5.00001 3.21891 5.00001H4.54933L7.51058 15.26C7.57345 15.4782 7.71372 15.6701 7.90855 15.8044C8.10337 15.9388 8.34127 16.0077 8.5835 16H18.2397C18.4379 15.9994 18.632 15.9478 18.8005 15.8507C18.9691 15.7536 19.1055 15.6149 19.1946 15.45L22.7138 8.89001C22.8663 8.59202 22.9374 8.26348 22.9205 7.93369C22.9037 7.6039 22.7995 7.28313 22.6172 7.00001V7.00001ZM17.5745 14H9.39891L7.65006 8.00001H20.7933L17.5745 14Z" fill="white" />
                                        <path d="M8.04688 21C8.93571 21 9.65625 20.3284 9.65625 19.5C9.65625 18.6716 8.93571 18 8.04688 18C7.15804 18 6.4375 18.6716 6.4375 19.5C6.4375 20.3284 7.15804 21 8.04688 21Z" fill="white" />
                                        <path d="M18.7764 21C19.6652 21 20.3857 20.3284 20.3857 19.5C20.3857 18.6716 19.6652 18 18.7764 18C17.8875 18 17.167 18.6716 17.167 19.5C17.167 20.3284 17.8875 21 18.7764 21Z" fill="white" />
                                    </svg>
                                    В корзину
                                </button>
                           
                           <Link to='/zakaz' > <button className='LaptopKupitBtn'>Купить в один клик</button> </Link>
                        </div>
                        <div className="LaptopMoneyInfo">
                            <div className="">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5063 18.2648C10.6166 18.6641 11.0296 18.8983 11.4289 18.788C11.8282 18.6777 12.0624 18.2646 11.9521 17.8654L10.5063 18.2648ZM9.07692 10.2746L9.79984 10.0749V10.0749L9.07692 10.2746ZM7.7037 8.9201L7.50319 9.6428L7.7037 8.9201ZM6.20051 7.72471C5.80138 7.61398 5.38804 7.84777 5.2773 8.2469C5.16656 8.64604 5.40035 9.05937 5.79949 9.17011L6.20051 7.72471ZM23.1886 18.7256C23.5895 18.6214 23.8301 18.212 23.7259 17.8111C23.6217 17.4102 23.2123 17.1696 22.8114 17.2738L23.1886 18.7256ZM13.1978 20.559C13.5074 21.6796 12.8278 22.862 11.6239 23.1749L12.0012 24.6266C13.9782 24.1128 15.1863 22.124 14.6436 20.1595L13.1978 20.559ZM11.6239 23.1749C10.4122 23.4898 9.19622 22.7865 8.88401 21.6563L7.43817 22.0558C7.97829 24.0108 10.032 25.1384 12.0012 24.6266L11.6239 23.1749ZM8.88401 21.6563C8.57441 20.5357 9.254 19.3533 10.4579 19.0405L10.0806 17.5887C8.10356 18.1025 6.89544 20.0913 7.43817 22.0558L8.88401 21.6563ZM10.4579 19.0405C11.6696 18.7255 12.8856 19.4288 13.1978 20.559L14.6436 20.1595C14.1035 18.2045 12.0498 17.0769 10.0806 17.5887L10.4579 19.0405ZM11.9521 17.8654L9.79984 10.0749L8.354 10.4743L10.5063 18.2648L11.9521 17.8654ZM7.90421 8.1974L6.20051 7.72471L5.79949 9.17011L7.50319 9.6428L7.90421 8.1974ZM9.79984 10.0749C9.54671 9.15862 8.8211 8.45179 7.90421 8.1974L7.50319 9.6428C7.92878 9.76088 8.24573 10.0824 8.354 10.4743L9.79984 10.0749ZM14.1093 21.0851L23.1886 18.7256L22.8114 17.2738L13.732 19.6334L14.1093 21.0851Z" fill="#E81D1C" />
                                    <path d="M12.5654 11.7305C12.0804 9.97492 11.8379 9.09714 12.2495 8.40562C12.6612 7.71409 13.5662 7.47889 15.3763 7.00849L17.2962 6.50955C19.1062 6.03915 20.0113 5.80394 20.7242 6.20319C21.4372 6.60244 21.6797 7.48023 22.1647 9.2358L22.6792 11.0979C23.1642 12.8534 23.4067 13.7312 22.995 14.4227C22.5834 15.1143 21.6784 15.3495 19.8683 15.8199L17.9484 16.3188C16.1384 16.7892 15.2333 17.0244 14.5203 16.6252C13.8073 16.2259 13.5648 15.3481 13.0798 13.5926L12.5654 11.7305Z" stroke="#E81D1C" stroke-width="1.5" />
                                </svg>

                                <p className="">Быстрая доставка в течении  3-4 дней</p>
                            </div>
                            <div className="">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.74181 23.5545C7.94143 25 10.1741 25 14.6395 25H15.3607C19.8261 25 22.0589 25 23.2585 23.5545M6.74181 23.5545C5.54219 22.1091 5.95365 19.9146 6.77657 15.5257C7.36179 12.4045 7.65441 10.8439 8.7653 9.92196M6.74181 23.5545C6.74181 23.5545 6.74181 23.5545 6.74181 23.5545ZM23.2585 23.5545C24.4581 22.1091 24.0466 19.9146 23.2237 15.5257C22.6385 12.4045 22.3459 10.8439 21.235 9.92196M23.2585 23.5545C23.2585 23.5545 23.2585 23.5545 23.2585 23.5545ZM21.235 9.92196C20.1241 9 18.5363 9 15.3607 9H14.6395C11.464 9 9.8762 9 8.7653 9.92196M21.235 9.92196C21.235 9.92196 21.235 9.92196 21.235 9.92196ZM8.7653 9.92196C8.7653 9.92196 8.7653 9.92196 8.7653 9.92196Z" stroke="#E81D1C" stroke-width="1.5" />
                                    <path d="M13 17.3C13.5207 17.7686 13.8126 18.0314 14.3333 18.5L17 15.5" stroke="#E81D1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 9V8C12 6.34315 13.3431 5 15 5C16.6569 5 18 6.34315 18 8V9" stroke="#E81D1C" stroke-width="1.5" stroke-linecap="round" />
                                </svg>

                                <p className="">Возможность открыть товар у курьера</p>

                            </div>
                            <div className="">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="10" stroke="#E81D1C" stroke-width="1.5" />
                                    <path d="M11.5 15.5L13.5 17.5L18.5 12.5" stroke="#E81D1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <p className="">Все товары имееют гарантию</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}