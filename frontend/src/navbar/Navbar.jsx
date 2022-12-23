import '../style/app.css'
import uzbFlag from '../media/uzb.svg'
import DataLogo from '../media/datalogo 1.png'
import {BiCategory} from 'react-icons/bi'
import {HiOutlineSearch} from 'react-icons/hi'
import shopIcon from '../media/shopIcon.svg'
import profilIcon from '../media/profilIcon.svg'
import { useState } from 'react'
import { IoClose , IoPhonePortraitOutline } from 'react-icons/io5'
import {BsLaptop} from 'react-icons/bs'
import {BsTv} from 'react-icons/bs'
import {AiOutlineCustomerService} from 'react-icons/ai'
import {MdOutlineNavigateNext} from 'react-icons/md'
import Pr from './Pr'
import {Link} from 'react-router-dom'



function Navbar() {


    const [trm , setTrm] = useState(1000)
    const [icon , setIcon] = useState(<BiCategory size='27px' color='#ffffff'/>)
    const [noneBorder , setNoneBoreder] = useState('')
    const [st, setSt] = useState('laptop')
    function addCategory() {
        if (trm == 0) {
            setTrm(1000)
            setIcon(<BiCategory size='27px' color='#ffffff'/>)
            setNoneBoreder('')
        }else {
            setTrm(0)
            setTimeout(() => {
                setIcon(<IoClose size='27px' color='#ffffff'/>)
                setNoneBoreder('none')
            }, 100);
        }
    }
    return (
        <nav>
            <div className="navTop">
                <div className="container">
                    <div className="navTopLeft">
                        <span className='adresNav'>Адрес: Urganch, Darital, 2-этаж</span>
                    </div>
                    <div className="navTopRight">
                        <span className='adresNav'><p>Телефон поддержки:</p> (99) 900 10 10</span>
                        <div className="til">
                            <img src={uzbFlag} alt="" />
                            <select name="Til" id="" className='navSec'>
                                <option value="uzb">UZB</option>
                                <option value="rus">RUS</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-b" style={{boxShadow: noneBorder}}>
                <div className="navBottom">
                    <Link to='/'><img className='dataLogo' src={DataLogo} /></Link>
                    <button onClick={addCategory} className="CategoryBtn">{icon} Категория</button>
                    <div className="navSearch">
                        <input type="text" placeholder='Введите запрос...'/>
                        <button className='navSearchBtn'><HiOutlineSearch color='#ffffff' size='24px'/></button>
                    </div>
                    <div className="navBtns">
                        <button><img src={shopIcon} alt="" /> <span>Корзина</span></button>
                        <button><img src={profilIcon} alt="" /> <span>Профиль</span></button>
                    </div>
                </div>
            </div>
            <div className="category" style={{transform: `translateY(-${trm}px)` }}>
                <div className="categoryCon">
                    <ul className="ctMenu">
                        <li onClick={() => setSt('laptop')}>  <button>  <span><BsLaptop                 className='ctIcon'  size='26px'/> <span>Ноутбуки</span></span> <MdOutlineNavigateNext   className='ctIcon'size='22px' /></button></li>
                        <li onClick={() => setSt('phone')}>   <button>  <span><IoPhonePortraitOutline   className='ctIcon'  size='26px'/> <span>Смартфоны</span></span> <MdOutlineNavigateNext  className='ctIcon'size='22px' /></button></li>
                        <li onClick={() => setSt('monitor')}> <button>  <span><BsTv                     className='ctIcon'  size='26px'/> <span>Мониторы</span></span> <MdOutlineNavigateNext   className='ctIcon'size='22px' /></button></li>
                        <li onClick={() => setSt('acsesuar')}><button>  <span><AiOutlineCustomerService className='ctIcon'  size='26px'/> <span>Аксессуары</span></span> <MdOutlineNavigateNext className='ctIcon'size='22px' /></button></li>
                    </ul>
                    <div className="ctInfo">
                        <Pr st={st} setSt={setSt}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar