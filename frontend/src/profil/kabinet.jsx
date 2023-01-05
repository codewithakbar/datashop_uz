import profilIcon1 from '../media/🦆 icon _user_.png'
import profilIcon2 from '../media/boxtick.png'
import profilIcon3 from '../media/bell.png'


export default function Kabinet() {
    return (
        <div className="Kabinet">
            <ul className="linkCategory">
                <li>Главная </li>
                <li> / Личный кабинет</li>
            </ul>
            <div className="kabinetInfo">
                <div className="kabinetProfil">
                    <span className='kabinetUserIcon'><img src={profilIcon1} alt="" />  Персональные данные</span>
                    <span><img src={profilIcon2} alt="" />  Мои заказы</span>
                    <span><img src={profilIcon3} alt="" />  Уведомления</span>
                </div>
                <div className="kabinetRegiser">

                </div>
            </div>
        </div>
    )
}