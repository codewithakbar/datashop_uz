import '../style/app.css'
import uzbFlag from '../media/uzb.svg'
import DataLogo from '../media/datalogo 1.png'
import {BiCategory} from 'react-icons/bi'
import {HiOutlineSearch} from 'react-icons/hi'
import shopIcon from '../media/shopIcon.svg'
import profilIcon from '../media/profilIcon.svg'

function Navbar() {

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
            <div className="nav-b">
                <div className="navBottom">
                    <img className='dataLogo' src={DataLogo} />
                    <button className="CategoryBtn"><BiCategory size='27px' color='#ffffff'/> Категория</button>
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
        </nav>
    )
}

export default Navbar