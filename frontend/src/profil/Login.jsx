import userIcon from '../media/User Rounded.svg'
import emailIcon from '../media/mail.svg'
import lockIcon from '../media/lock.svg'
import { useRef, useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';


export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const nameRef = useRef()
    const passwordRef = useRef()

    const handleNameChange = (e) => {
        setName(e.target.value);
        setShowAlert(false);
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowAlert(false);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || password === '') {
            setShowAlert(true);
            return;
        }
        // Ma'lumotlarni yuborish yoki saqlash logikasi
        console.log('Name:', name);
        console.log('Password:', password);
        // ... qo'shimcha muvaffaqiyatli amallar
    };
    { showAlert && alert("Barcha maydonlar to'ldirilishi kerak!") }

    const navigate = useNavigate()

    const requestLogin = async () => {
        const url = "https://api.datashop.uz/login/"
        const body = {
            email: name,
            password: password,
        }
        try {
            const postLogin = await axios.post(url, body)
            localStorage.setItem('token', JSON.stringify(postLogin.data))
            console.log(postLogin.data);
            navigate('/kabinet')
        }
        catch (err) {
            console.log(err);
            alert(err)
        }
    }
    return (
        <div className="Accaunt">
            <h1 className="accountTitle">Вход </h1>
            <form className="accountInputs" onSubmit={handleSubmit}>
                <div className="inputInfo">
                    <p>Введите имя</p>
                    <div className="inputIcon">
                        <img src={userIcon} alt="" /> <input type="text" id="name" value={name} onChange={handleNameChange} placeholder='Имя' ref={nameRef} />
                    </div>
                </div>
                <div className="inputInfo">
                    <p>Пароль</p>
                    <div className="inputIcon">
                        <img src={lockIcon} alt="" />   <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder='password' ref={passwordRef} />
                    </div>
                </div>


                <p className="login">У меня есть аккаунт <Link to={"/account"}> Register </Link> </p>
                <button className='accountbutton' type="submit" onClick={() => requestLogin()}>Зарегистрироваться</button>
            </form>
            {/* {showAlert && <p>Barcha maydonlar to'ldirilishi kerak!</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder='Имя'

                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='example@gmail.com'
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='password'
                />
            <p className="login">У меня есть аккаунт <a href="">Войти</a> </p>
            <button className='accountbutton' type="submit">Зарегистрироваться</button>
            </form> */}

        </div>
    )
}