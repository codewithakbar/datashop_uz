import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlineStar, AiOutlineCustomerService } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'


function Monitor({ monitor , add}) {
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
        }
    }
    return (
        <>
            <div className="servicess">
                <div className="laptop">
                    <div className="content">
                        <div className="box">
                            <div className="inner">
                                <div className="laptopImg" onMouseOver={() => setopenShopBtn("goShopBtn")} onMouseOut={() => setopenShopBtn("goShopBtnClose")}>
                                <button className='hearBtn' onClick={addIzb}>{hear}</button>
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
        </>
    )
}

export default Monitor