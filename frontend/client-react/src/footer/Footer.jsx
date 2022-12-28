import dataLogo from '../media/datalogo 1.png'
import uzcardLogo from '../media/uzcard.png'

function Footer({fotChange}) {
    return (
        <footer className={fotChange}> 
            <div className="footerCon">
                <div className="Footerlogo">
                    <img src={dataLogo} alt="" />
                </div>
                <div className="footerInfo">
                    <div className="footContact">
                        <div className="tel">
                            <label htmlFor="">Телефон поддержки</label>
                            <h4>+998 (99) 999 01 11</h4>
                        </div>
                        <div className="addres">
                            <label htmlFor="">Адрес</label>
                            <h4>Даритал, Ургенч</h4>
                        </div>
                        <div className="email">
                            <label htmlFor="">Email</label>
                            <h4>datashop@gmail.com</h4>
                        </div>
                    </div>
                    <div className="footServis">
                        <ul>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Вакансии</a></li>
                            <li><a href="#">Возврат и обмен товара</a></li>
                            <li><a href="#">Условия рассрочки</a></li>
                            <li><a href="#">Помощь</a></li>
                            <li><a href="#">Доставка</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Вакансии</a></li>
                            <li><a href="#">Возврат и обмен товара</a></li>
                            <li><a href="#">Условия рассрочки</a></li>
                            <li><a href="#">Помощь</a></li>
                            <li><a href="#">Доставка</a></li> 
                        </ul>
                    </div>
                    <div className="footPay">
                        <h4 className="footPayTitle">Способы оплаты</h4>
                        <div className="payments">
                            <button className="payment"><img src={uzcardLogo} alt="" /></button>
                            <button className="payment"><img src={uzcardLogo} alt="" /></button>
                            <button className="payment"><img src={uzcardLogo} alt="" /></button>
                            <button className="payment"><img src={uzcardLogo} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer