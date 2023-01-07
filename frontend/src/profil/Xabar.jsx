import profilIcon1 from '../media/Vector.png'
import profilIcon2 from '../media/boxtick.png'
import profilIcon3 from '../media/bell2.png'
import { Link } from 'react-router-dom'
import {IoIosCloseCircle} from 'react-icons/io'

export default function Kabinet() {
    return (
        <div className="Kabinet">
            <ul className="linkCategory">
                <li>Главная </li>
                <li> / Личный кабинет</li>
            </ul>
            <div className="kabinetInfo">
                <div className="kabinetProfil">
                   <Link to={'/kabinet'} ><span className='kabinetUserIcon '><img src={profilIcon1} alt="" />  Персональные данные</span></Link> 
                   <Link to={'/profilZakaz'} >  <span className='kabinetUserIcon' ><img src={profilIcon2} alt="" />  Мои заказы</span> </Link>
                   <Link to={'/xabar'} >  <span className='kabinetUserIcon red' ><img src={profilIcon3} alt="" />  Уведомления</span> </Link>
                </div>
                <div className="kabinetRegiser">
                    <div className="infoXabar">
                        <span className="xabarData">26-10-2022</span>
                        <h1 className="xabarTitle">С новым 2023 годом!</h1>
                        <p className="xabarText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and <br /> scrambled it ...</p>
                       
                    </div>

                    <div className="infoXabar">
                        <span className="xabarData">26-10-2022</span>
                        <h1 className="xabarTitle">С новым 2023 годом!</h1>
                        <p className="xabarText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and <br /> scrambled it ...</p>
                    </div>

                    <div className="infoXabar">
                        <span className="xabarData">26-10-2022</span>
                        <h1 className="xabarTitle">С новым 2023 годом!</h1>
                        <p className="xabarText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and <br /> scrambled it ...</p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}