import { useState } from 'react'
import click from '../texnoimg/Click-01 1.png'
import payme from '../texnoimg/Click-01 2.png'
import nalichi from '../texnoimg/Наличными.png'


export default function Zakaz() {

    const [brund, setBrund] = useState("none")
    let ff = false
    function brond() {

        if (ff == false) {
            setBrund('brond')
            ff = true
            setBrund2('none')

        }
        else {
            setBrund('none')
            ff = false
        }
    }

    const [brund2, setBrund2] = useState("none")
    let ff2 = false
    function brond2() {
        ff = true
        if (ff2 == false) {
            setBrund2('brond')
            ff2 = true
            setBrund('none')
        }
        else {
            setBrund2('none')
            ff2 = false
        }
    }

    const [brund3, setBrund3] = useState("none")
    let ff3 = false
    function brond3() {

        if (ff3 == false) {
            setBrund3('brond')
            ff3 = true
            setBrund4('none')
            setBrund5('none')

        }
        else {
            setBrund3('none')
            ff3 = false
        }
    }

    const [brund4, setBrund4] = useState("none")
    let ff4 = false
    function brond4() {

        if (ff4 == false) {
            setBrund4('brond')
            ff4 = true
            setBrund3('none')
            setBrund5('none')
        }
        else {
            setBrund4('none')
            ff4 = false
        }
    }

    const [brund5, setBrund5] = useState("none")
    let ff5 = false
    function brond5() {

        if (ff5 == false) {
            setBrund5('brond')
            ff5 = true
            setBrund3('none')
            setBrund4('none')


        }
        else {
            setBrund5('none')
            ff5 = false
        }
    }



    return (
        <div className='ZakazInfo'>

            <div className="Zakaz">
                <span>Главная  /  Корзина / Оформить заказ   </span>
                <div className="ZakazDastavka">
                    <h1 className="e">1. Как вы хотите получить заказ?</h1>
                    <div className="DastavkaBtn">
                        <span onClick={brond2} className={`ZakazVizf ${brund2}`} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 10.22V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V10.22M10.18 14H13.82M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z" stroke="#3C3C3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Самовызов
                        </span>
                        <span onClick={brond} className={`ZakazVizf ${brund}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 10.22V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V10.22M10.18 14H13.82M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z" stroke="#3C3C3C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Доставка
                        </span>
                    </div>
                </div>
                <div className="ZakazAdres">
                    <h1>2. Укажите адрес доставки</h1>
                    <div className="ZakazSelects">
                        <div className="select">
                            <span>Область</span>
                            <select  className="selectt" name="Viloyat">
                                <option selected disabled hidden value="">Выберите область</option>
                                <option value="">Xorazm</option>
                            </select>
                        </div>
                        <div className="select">
                            <span>Город</span>
                            <select  className="selectt" name="Viloyat">
                                <option selected disabled hidden value="">Выберите город</option>
                                <option value="">Shovot</option>
                                <option value="">Urganch</option>
                                <option value="">Gurllan</option>
                                <option value="">Xonqa</option>
                                <option value="">Qo'shko'pir</option>
                                <option value="">Yangiarik</option>
                            </select>
                        </div>
                        <div className="select ZakazInput">
                            <span>Полный адрес</span>
                            <input type="text" placeholder="Введите полный адрес" />
                        </div>
                    </div>

                </div>
                <div className="ZakazMoney">
                    <h1>3. Выберите способ оплаты</h1>
                    <div className="ZakazImg">
                        <div className="tolov">
                            <div onClick={brond3} className={`Click ${brund3}`}>
                                <img src={click} alt="" />
                            </div>
                            <div onClick={brond4} className={`Click ${brund4}`}>
                                <img src={payme} alt="" />
                            </div>
                        </div>

                        <div onClick={brond5} className={`Click d ${brund5}`}>
                            <img src={nalichi} alt="" />
                        </div>
                    </div>
                </div>
                <div className="ZakazRes">
                    <h1>4. Контактное имя</h1>
                    <div className="inputs">
                        <div className="Kinput">
                            <span>Имя</span>
                            <input type="text" placeholder="Введите Имя" />
                        </div>
                        <div className="Kinput">
                            <span>Фамилия</span>
                            <input type="text" placeholder="Введите Фамилия" />
                        </div>
                        <div className="Kinput">
                            <span>Телефон</span>
                            <input type="text" placeholder="Введите Телефон" />
                        </div>
                        <div className="Kinput">
                            <span>Дополнительный телефон</span>
                            <input type="text" placeholder="Введите Дополнительный телефон" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='KorzinkaCon'>
                <div className="korzinkaInfoBar">
                    <div className="korzinkaInfoBarInfo">
                        <div className="korzinkaInfoBarTitle">
                            <h1>Итого</h1>
                            <span>6 800 000 СУМ</span>
                        </div>
                        <div className="korzinkaInfoBarFon">
                            <span className='korzinkaInfoBarFon1'>
                                <h5>Промокод: </h5>
                                <h5>0 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5>Сумма доставки: </h5>
                                <h5>30.000 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5>Сумма товара:</h5>
                                <h5>736.000 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5> Доставка:</h5>
                                <h5>Курьером</h5>
                            </span>
                        </div>
                        <div className="korzinkaInfoBarPrice">
                            <h3>Общая сумма</h3>
                            <h3>6 800 000 СУМ</h3>
                        </div>
                    </div>
                    <button type='submit'>Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}