import profilIcon1 from '../media/Vector.png'
import profilIcon2 from '../media/boxtick1.png'
import profilIcon3 from '../media/bell.png'
import { Link } from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'

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
                <div className="kabinetRegiser moyZakaz">
                    <div className="numList">
                        <p className="listes">Заказ #</p>
                        <p className="listes">Статус</p>
                        <p className="listes">Дата покупки</p>
                        <p className="listes">Итог</p>
                    </div>
                    <div className="listPage">
                        <div className="pageZakaz">
                            <span className='zakazNum'>1050017AS</span>
                            <span className='zakazStatus'>В процессе</span>
                            <span className="zakazData">Oct 12, 2020</span>
                            <span className="zakazSum">$500.00</span>
                           <HiOutlineArrowRight color='#7D879C' />
                        </div>
                        <div className="pageZakaz">
                            <span className='zakazNum'>1050017AS</span>
                            <span className='zakazStatus dostavlene'>Доставлено</span>
                            <span className="zakazData">Oct 12, 2020</span>
                            <span className="zakazSum">$500.00</span>
                           <HiOutlineArrowRight color='#7D879C' />
                        </div>
                        <div className="pageZakaz">
                            <span className='zakazNum'>1050017AS</span>
                            <span className='zakazStatus otmena'>Отмена</span>
                            <span className="zakazData">Oct 12, 2020</span>
                            <span className="zakazSum">$500.00</span>
                           <HiOutlineArrowRight color='#7D879C' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}