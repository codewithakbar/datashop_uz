import victus from '../media/laptop.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import KorzinkaProduct from './korzinkaProduct'

function Korzinka({ addKorzinka, Delete, setAddKorzinka }) {

    return (
        <div className="korzinka">
            <div className="products">
                <ul className="linkCategory">
                    <li>Главная</li>
                    <li> / Корзина</li>
                </ul>
                <div className="korzinkaProduct">
                    <div className="korzinkaTitle">
                        <h1>Корзина</h1>
                        <span>Товаров в корзине ({addKorzinka.length})</span>
                    </div>
                    <div className="korzinkaElment">
                        <div className="korzinkaElmentTitle">
                            <h3>Детали продуктов</h3>
                            <span>
                                <h3 id='none'>Количество</h3>
                                <h3 id='none'>Цена</h3>
                            </span>
                        </div>
                        <div className="korzinkaProducts">
                            {
                                addKorzinka.map(addKorzin => (
                                    <KorzinkaProduct addKorzinka={addKorzinka} Delete={Delete} addKorzin={addKorzin}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='KorzinkaCon'>
                <div className="korzinkaInfoBar">
                    <div className="korzinkaInfoBarInfo">
                        <div className="korzinkaInfoBarTitle">
                            <h1>Итого:</h1>
                            <span>6 800 000 СУМ</span>
                        </div>
                        <div className="korzinkaInfoBarFon">
                            <span className='korzinkaInfoBarFon1'>
                                <h5 className='korzinkaPriceInfo'>Промокод: </h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>0 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5>Сумма доставки: </h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>30.000 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5>Сумма товара:</h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>736.000 сум</h5>
                            </span>
                            <span className='korzinkaInfoBarFon1'>
                                <h5> Доставка:</h5>
                                <h5 className='korzinkaInfoBarFon1Prise'>Курьером</h5>
                            </span>
                        </div>
                        <div className="korzinkaInfoBarPrice">
                            <h3>Общая сумма</h3>
                            <h3>6 800 000 СУМ</h3>
                        </div>
                    </div>
                    <div className="zakazBtn">
                        <Link to='/zakaz'> <button>Оформить заказ</button> </Link>
                        <span>Нажимая 'Оформить заказ', я соглашаюсь с публичным договором оферты</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Korzinka