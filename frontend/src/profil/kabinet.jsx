import profilIcon1 from '../media/🦆 icon _user_.png'
import profilIcon2 from '../media/boxtick.png'
import profilIcon3 from '../media/bell.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Kabinet() {

    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token);

    // const [user, setUser] = useState()

    useEffect(() => {
        axios.get("https://api.datashop.uz/api/profile/", {
            headers: {
                "Authorization": "Bearer" + token.access
            }.then(response =>  localStorage.setItem('user', JSON.stringify(response)))
        })

    }, [])

    const ApiUser = JSON.parse(localStorage.getItem('user'))
    console.error(ApiUser);


    const [name , setName] = useState(ApiUser.username)

    return (
        <div className="Kabinet">
            <ul className="linkCategory">
                <li>Главная </li>
                <li> / Личный кабинет</li>
            </ul>
            <div className="kabinetInfo">
                <div className="kabinetProfil">
                    <Link to={'/kabinet'} ><span className='kabinetUserIcon red'><img src={profilIcon1} alt="" />  Персональные данные</span></Link>
                    <Link to={'/profilZakaz'} >  <span className='kabinetUserIcon' ><img src={profilIcon2} alt="" />  Мои заказы</span> </Link>
                    <Link to={'/xabar'} >  <span className='kabinetUserIcon' ><img src={profilIcon3} alt="" />  Уведомления</span> </Link>
                </div>
                <div className="kabinetRegiser">
                    <div className="registerTel">
                        <h1 className='registerTitle'>Информация о пользователе</h1>
                        <div className="inputFic">
                            <span>Телефон номер</span>
                            <input className='input telInput' type="text" placeholder='Введите Телефон' />
                        </div>

                        <div className="userInfo">
                            <div className="inputFic">
                                <span>Имя</span>
                                <input className='input' type="text" placeholder='Введите Имя' defaultValue={name}/>
                            </div>

                            <div className="inputFic">
                                <span>Фамилия</span>
                                <input className='input' type="text" placeholder='Введите Фамилия' />
                            </div>
                        </div>
                    </div>
                    <div className="registerTel">
                        <h1 className='registerTitle'>Информация об учетной записи пользователя</h1>
                        <div className="inputFic">
                            <span>Email</span>
                            <input className='input' type="email" placeholder='Введите Email' />
                        </div>

                        <div className="userInfo">
                            <div className="inputFic">
                                <span>Пароль</span>
                                <input className='input' type="password" placeholder='Введите Пароль' />
                            </div>

                            <div className="inputFic">
                                <span>Подтвержедение Пароля</span>
                                <input className='input' type="password" placeholder='Введите Подтвержедение Пароля' />
                            </div>
                        </div>
                    </div>



                    <div className="registerTel">
                        <h1 className='registerTitle'>Адрес доставки</h1>


                        <div className="ZakazSelects">
                            <div className="select">
                                <span>Область</span>
                                <select name="Viloyat">
                                    <option selected disabled hidden value="">Выберите область</option>
                                    <option value="">Toshkent</option>
                                    <option value="">Samarqand</option>
                                    <option value="">Buxoro</option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="select">
                                <span>Город</span>
                                <select name="Viloyat">
                                    <option selected disabled hidden value="">Выберите город</option>
                                    <option value="">Toshkent</option>
                                    <option value="">Samarqand</option>
                                    <option value="">Buxoro</option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>


                        <div className="inputFic">
                            <span>Email</span>
                            <input className='input telInput' type="email" placeholder='Введите Email' />
                        </div>
                    </div>


                    <span className='saveButton'>Сохранить</span>


                </div>
            </div>
        </div>
    )
}