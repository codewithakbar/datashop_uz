import {AiFillHeart , AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlineStar, AiOutlineCustomerService } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { useContext } from 'react'
import { AppContext } from '../AppContext'


function Laptops({laptop , add , setIzbProducts}) {
    const [openShopBtn, setopenShopBtn] = useState('goShopBtnClose')
    const [hear , setHear] = useState(<AiOutlineHeart className='hear'/>)
    const [hearOn , setHearOn] = useState(true)    
    function addIzb() {
        if (hearOn == false) {
            setHear(<AiOutlineHeart className='hear'/>)
            setHearOn(true)
        }if (hearOn == true) {
            setHear(<AiFillHeart className='hear'/>)
            setHearOn(false)
            setIzbProducts(value =>([
                ...value ,
                {
                    img: baseURL + laptop.img ,
                    name: laptop.name ,
                    price: laptop.price ,
                }
            ]))
        }
    }
    const {baseURL} = useContext(AppContext) 
    return (
        <>
            <div className="servicess">
                <div className="laptop">
                    <div className="content">
                        <div className="box">
                            <div className="inner">
                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                    <button className='hearBtn' onClick={addIzb}>{hear}</button>
                                    <Link to='/laptop' onClick={() => add({ id: laptop.id, img: baseURL + laptop.img , name: laptop.name })}> <button className="goShopBtnClose"><FiShoppingCart />В корзину</button></Link>
                                    <img src={baseURL + laptop.img} alt="" />
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
        </>
    )
}

export default Laptops