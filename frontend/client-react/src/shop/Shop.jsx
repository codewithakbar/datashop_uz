import {IoIosArrowDown} from 'react-icons/io'
import {AiFillStar , AiOutlineStar , AiOutlineCustomerService} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Shop({shops}) {


    return (
        <div className="shop">
            <ul className="linkCategory">
                <li>Menu/</li>
                <li>Categor/</li>  
                <li>Laptop</li>
            </ul>
            <div className="shopMain">
                <div className="shopMainHeader">
                    <div className="shopMainTitle">
                        <h1>Ноутбуки HP</h1>
                        <span>36 товаров</span>
                    </div>
                    <div className="shopMainHeaderBtn">
                        <button>HP Victus 15</button>
                        <button>HP Victus 15</button>
                        <button>HP Victus 15</button>
                        <button>HP Victus 15</button>
                        <button>HP Victus 15</button>
                    </div>
                </div>
                <div className="shopMainS">
                    <div className="shopMenuAside">
                        <div className="rengePrice">
                            <h1>Цена(сум)</h1>
                            <div className="priceMin">
                                <div className="priceMinInputs">
                                    <input type="range" />
                                    <input type="range" />
                                </div>  
                                <div className="prices">
                                    <div className="minPrice">
                                        <label htmlFor="">min</label>
                                        <input type="text" value='200'/>
                                    </div>
                                    <div className="maxPrice">
                                        <label htmlFor="">max</label>
                                        <input type="text" value='2200'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pcHR">
                            <div className="brendChenge">
                                <ul>
                                    <li>Бренд</li>
                                    <li><IoIosArrowDown/></li>
                                </ul>
                                <select>
                                    <option value="">All</option>
                                    <option value="">HP</option>
                                </select>
                            </div>
                            <div className="cpuChenge">
                                <ul>
                                    <li>Видеокарта</li>
                                    <li><IoIosArrowDown/></li>
                                </ul>
                                <select>
                                    <option value="">All</option>
                                    <option value="">Nivada</option>
                                    <option value="">AMD</option>
                                    <option value="">Intel Graphics</option>
                                </select>
                            </div>
                            <div className="ramChenge">
                                <ul>
                                    <li>Оперативный память</li>
                                    <li><IoIosArrowDown/></li>
                                </ul>
                                <select>
                                    <option value="">All</option>
                                    <option value="">4 GB</option>
                                    <option value="">8 GB</option>
                                    <option value="">16 GB</option>
                                </select>
                            </div>
                            <div className="ssdChenge">
                                <ul>
                                    <li>SSD</li>
                                    <li><IoIosArrowDown/></li>
                                </ul>
                                <select>
                                    <option value="">All</option>
                                    <option value="">256 Gb</option>
                                    <option value="">512 GB</option>
                                    <option value="">1 TB</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="shopMenuCon">
                    {
                        shops.map(shop => (
                            <div className="laptop">
                                <div className="laptopImg">
                                <Link to='/laptop'>  <img src={shop.img} alt="" /> </Link>
                                    <button className="goShopBtnClose"><FiShoppingCart/>В корзину</button>
                                </div>
                                <div className="laptopInfo">
                                    <span>{shop.name}</span>
                                    <div className="eva">
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiFillStar    className='evaCompanent'  color='#E81D1C'/>
                                        <AiOutlineStar className='evaCompanent'  color='#E81D1C'/>
                                    </div>
                                    <span className='price'>{shop.prise}00 000 UZS</span>
                                </div>
                            </div>
                       ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop