import profilIcon1 from '../media/Vector.png'
import profilIcon2 from '../media/boxtick1.png'
import profilIcon3 from '../media/bell.png'
import { Link } from 'react-router-dom'


export default function Kabinet() {
    return (
        <div className="Kabinet">
            <ul className="linkCategory">
                <li>Главная </li>
                <li> / Личный кабинет</li>
            </ul>
            <div className="kabinetInfo">
                <div className="kabinetProfil">
                   <Link to={'/kabinet'} ><span className='kabinetUserIcon'><img src={profilIcon1} alt="" />  Персональные данные</span></Link> 
                   <Link to={'/profilZakaz'} >  <span className='kabinetUserIcon red' ><img src={profilIcon2} alt="" />  Мои заказы</span> </Link>
                   <Link to={'/xabar'} >  <span className='kabinetUserIcon' ><img src={profilIcon3} alt="" />  Уведомления</span> </Link>
                </div>
                <div className="kabinetRegiser">
                    <h1>Мои заказы</h1>

                </div>
            </div>
        </div>
    )
}