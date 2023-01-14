import userIcon from '../media/User Rounded.svg'
import emailIcon from '../media/mail.svg'
import lockIcon from '../media/lock.svg'


export default function Accaunt() {
    return (
        <div className="Accaunt">
            <h1 className="accountTitle">Вход / Регистрация</h1>
            <div className="accountInputs">
                <div className="inputInfo">
                    <p>Введите имя</p>
                    <div className="inputIcon">
                        <img src={userIcon} alt="" /> <input type="text" placeholder='Имя' />
                    </div>
                </div>
                <div className="inputInfo">
                    <p>Email</p>
                    <div className="inputIcon">
                        <img src={emailIcon} alt="" /> <input type="email" placeholder='example@gmail.com' />
                    </div>
                </div>
                <div className="inputInfo">
                    <p>Пароль</p>
                    <div className="inputIcon">
                        <img src={lockIcon} alt="" /> <input type="password" placeholder='*********' />
                    </div>
                </div>

                <div className="inputInfo">
                    <p>Подтвердите пароль</p>
                    <div className="inputIcon">
                        <img src={lockIcon} /> <input type="password" placeholder='*********' />
                    </div>
                </div>
            </div>
            <p className="login">У меня есть аккаунт <a href="">Войти</a> </p>
            <span className='accountbutton'>Зарегистрироваться</span>
        </div>
    )
}