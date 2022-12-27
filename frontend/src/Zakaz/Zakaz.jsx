import { useState } from 'react'
import click from '../texnoimg/Click-01 1.png'
import payme from '../texnoimg/Click-01 2.png'
import nalichi from '../texnoimg/Наличными.png'


export default function Zakaz() {

    const [brund , setBrund] = useState("none")
        let ff = false
    function brond(){

        if(ff == false){
            setBrund('brond')
            ff = true
        }
        else{
            setBrund('none')
            ff = false
        }
    }



    return (
        <div className='ZakazInfo'>

            <div className="Zakaz">
                <span>Главная  /  Корзина / Оформить заказ   </span>
                <div className="ZakazDastavka">
                    <h1 className="">1. Как вы хотите получить заказ?</h1>
                    <div className="DastavkaBtn">
                        <span onClick={brond} className={`ZakazVizf ${brund}`}>
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
                        <div className="select ZakazInput">
                            <span>Полный адрес</span>
                            <input type="text" placeholder="Введите полный адрес" />
                        </div>
                    </div>

                </div>
                <div className="ZakazMoney">
                    <h1>3. Выберите способ оплаты</h1>
                    <div className="ZakazImg">
                        <div className="Click">
                            <img src={click} alt="" />
                        </div>
                        <div className="Click">
                            <img src={payme} alt="" />
                        </div>
                        <div className="Click">
                            <img src={nalichi} alt="" />
                        </div>
                    </div>
                </div>
                <div className="ZakazRes">
                    <h1>4. Контактное имя</h1>
                    <div className="inputs">
                        <div className="input">
                            <span>Имя</span>
                            <input type="text" placeholder="Введите Имя" />
                        </div>
                        <div className="input">
                            <span>Фамилия</span>
                            <input type="text" placeholder="Введите Фамилия" />
                        </div>
                        <div className="input">
                            <span>Телефон</span>
                            <input type="text" placeholder="Введите Телефон" />
                        </div>
                        <div className="input">
                            <span>Дополнительный телефон</span>
                            <input type="text" placeholder="Введите Дополнительный телефон" />
                        </div>
                    </div>
                </div>
            </div>
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
                 <button>Оформить заказ</button> 
            </div>
        </div>
    )
}