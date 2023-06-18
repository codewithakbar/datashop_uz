import userIcon from '../media/User Rounded.svg'
import emailIcon from '../media/mail.svg'
import lockIcon from '../media/lock.svg'
import { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Accaunt() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [link , setLink] = useState("/account")

    const nameRef = useRef()
    const passwordRef = useRef()
    const password1Ref = useRef()

    const handleNameChange = (e) => {
        setName(e.target.value);
        setShowAlert(false);
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowAlert(false);
    };

    const handlePassword1Change = (e) => {
        setPassword1(e.target.value);
        setShowAlert(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === ''  || password === '' || password1 === '') {
            setShowAlert(true);
            return;
        }
        // Ma'lumotlarni yuborish yoki saqlash logikasi
        console.log('Name:', name);
        console.log('Password:', password);
        console.log('Password1:', password1);
        // ... qo'shimcha muvaffaqiyatli amallar
    };
    {showAlert && alert("Barcha maydonlar to'ldirilishi kerak!")}


    const requestRegister = async () => {
        const url = "https://api.datashop.uz/api/register/"
        const body = {
            username: name,
            password: password,
            password2: password1
        }

        try{
            const postRegister = await axios.post(url ,body)
            console.log(postRegister.data );
            setLink("/login")
        }
        catch(err){
            console.log(err);
            alert(err)
            setLink("/account")
        }
    }


    return (
        <div className="Accaunt">
            
            <h1 className="accountTitle">Регистрация</h1>
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
                <div className="inputInfo">
                    <p>Подтвердите пароль</p>
                    <div className="inputIcon">
                        <img src={lockIcon} />  <input type="password" id="password" value={password1} onChange={handlePassword1Change} placeholder='password' ref={password1Ref}/>
                    </div>
                </div>
                <p className="login">У меня есть аккаунт <Link to={"/login"}> Войти</Link> </p>
               <Link to={link} > <button className='accountbutton' type="submit" onClick={() => requestRegister()}>Зарегистрироваться</button></Link>
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