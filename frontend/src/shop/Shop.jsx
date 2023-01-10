import {IoIosArrowDown} from 'react-icons/io'
import {AiFillStar , AiOutlineStar , AiOutlineCustomerService} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {VscSettings} from 'react-icons/vsc'
import {RiMenu5Fill} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'

function Shop({shops}) {

    const [openFilter , setOpenFilter] = useState(-1000)

    return (
        <div className="shop">
            <ul className="linkCategory">
                <li>Menu/</li>
                <li>Categor/</li>  
                <li>Laptop</li>
            </ul>
            <div className="shopMain">
                <div className="shopHeaderRes">
                    <div className="shopMainTitle">
                        <h1>Ноутбуки HP</h1>
                        <span>36 товаров</span>
                    </div>
                    <div className="resFilterBtn">
                        <button onClick={() => setOpenFilter(0)}>
                            <VscSettings size={'26px'} />
                            <span>Фильтры</span>
                        </button>
                        <button>
                            <RiMenu5Fill size={'26px'}/>
                            <span>Сортировать по</span>
                        </button>
                    </div>
                </div>
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
                    <div className="shopMenuAside" style={{left: `${openFilter}px`}}>
                        <div className="filterTitle">
                            <span>Фильтры</span>
                            <MdClose size={'20px'} onClick={() => setOpenFilter(-1000)}/>
                        </div>
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
                            <div className="servicess">
                                <div className="laptop">
                                    <div className="content">
                                        <div className="box">
                                            <div className="inner">
                                                <div className="laptopImg">
                                                    <div className="gobtn">
                                                        <Link to='/laptop'> <button className="goShopBtnClose"><FiShoppingCart />В корзину</button></Link>
                                                    </div>
                                                    <img src={shop.img} alt="" />
                                                </div>
                                                <div className="laptopInfo">
                                                    <Link to='/laptop'>  <span>{shop.name}</span></Link>
                                                    <div className="eva">
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiFillStar className='evaCompanent' color='#E81D1C' />
                                                        <AiOutlineStar className='evaCompanent' color='#E81D1C' />
                                                    </div>
                                                    <span className='price'>{shop.prise}00 000 UZS</span>
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
            </div>
        </div>
    )
}

export default Shop