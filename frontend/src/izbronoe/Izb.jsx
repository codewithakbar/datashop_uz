import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import {AiFillStar , AiOutlineStar} from 'react-icons/ai'


function Izb({setopenShopBtn , add , laptops }) {
    return (
        <div className="izb">
            <div className="izbCon">
                <div className="izbHeadLinks">
                    <ul className="linkCategory">
                        <li>Главная</li>
                        <li> / Избранное</li>
                    </ul>
                </div>
                <div className="izbHeader">
                    <div className="izbTitle">
                        <h1>Избранное</h1>
                        <span>Очистить все</span>
                    </div>
                    <div className="ibzHaederMenu">
                        <select name="" id="">
                            <option value="">Сначала по дешевле</option>
                        </select>
                    </div>
                </div>
                <div className="izbMain">
                    {
                    laptops.map(laptop => (
                    <div className="laptop">
                        <div className="content">
                            <div className="box">
                                <div className="inner">
                                    <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                        <Link to='/laptop' onClick={() => add({ img: laptop.img })}> <button className="goShopBtnClose"><FiShoppingCart />В корзину</button></Link>
                                        <img src={laptop.img} alt="" />
                                    </div>
                                    <div className="laptopInfo">
                                        <Link to='/laptop'>  <span>{laptop.name}</span></Link>
                                        <div className="eva">
                                            <AiFillStar className='evaCompanent' color='#E81D1C' />
                                            <AiFillStar className='evaCompanent' color='#E81D1C' />
                                            <AiFillStar className='evaCompanent' color='#E81D1C' />
                                            <AiFillStar className='evaCompanent' color='#E81D1C' />
                                            <AiOutlineStar className='evaCompanent' color='#E81D1C' />
                                        </div>
                                        <span className='price'>{laptop.prise}00 000 UZS</span>
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
    )
}

export default Izb