import userIcon from '../media/User Rounded.svg'
import emailIcon from '../media/mail.svg'
import lockIcon from '../media/lock.svg'
import { useState } from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'


export default function Accaunt() {

    const [name , setName] = useState()
    const [email, setEmail] = useState()
    const [password1 , setPassword1] = useState()
    const [password2 , setPassword2] = useState()
    const [navigate , setNavigate] = useState(false)
    
    const submit = async e => {
        e.preventDefault();

        await axios.post('https://api.datashop.uz/rest-auth/registration/' , {
            name ,
            email ,
            password1 ,
            password2 
        });

        setNavigate(true)
    }

    if (navigate) {
        return <Navigate to="/login" />;
    }



    return (
        <div className="Accaunt">
            <h1 className="accountTitle">Вход / Регистрация </h1>
            <div className="accountInputs">
                <div className="inputInfo">
                    <p>Введите имя</p>
                    <div className="inputIcon">
                        <img src={userIcon} alt="" /> 
                        <input type="text" placeholder='Имя' 
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inputInfo">
                    <p>Email</p>
                    <div className="inputIcon">
                        <img src={emailIcon} alt="" /> 
                        <input type="email" placeholder='example@gmail.com' 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inputInfo">
                    <p>Пароль</p>
                    <div className="inputIcon">
                        <img src={lockIcon} alt="" /> 
                        <input type="password" placeholder='*********' 
                            onChange={e => setPassword1(e.target.value)}
                        />
                    </div>
                </div>

                <div className="inputInfo">
                    <p>Подтвердите пароль</p>
                    <div className="inputIcon">
                        <img src={lockIcon} /> 
                        <input type="password" placeholder='*********' 
                            onChange={e => setPassword2(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <p className="login">У меня есть аккаунт <a href="">Войти</a> </p>
            <button onClick={submit} className='accountbutton'>Зарегистрироваться</button>
        </div>
    )
}


//  ksaldhlaksd ====  ==========


// import React from "react";
// import {
//   Button,
//   Form,
//   Grid,
//   Header,
//   Message,
//   Segment
// } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { NavLink, Redirect } from "react-router-dom";
// import { authSignup } from "../store/actions/auth";

// class Accaunt extends React.Component {
//   state = {
//     username: "",
//     email: "",
//     password1: "",
//     password2: ""
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { username, email, password1, password2 } = this.state;
//     this.props.signup(username, email, password1, password2);
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     const { username, email, password1, password2 } = this.state;
//     const { error, loading, token } = this.props;
//     // if (token) {
//     //   return <Redirect to="/" />;
//     // }
//     return (
//       <Grid
//         textAlign="center"
//         style={{ height: "100vh" }}
//         verticalAlign="middle"
//       >
//         <Grid.Column style={{ maxWidth: 450 }}>
//           <Header as="h2" color="teal" textAlign="center">
//             Signup to your account
//           </Header>
//           {error && <p>{this.props.error.message}</p>}

//           <React.Fragment>
//             <Form size="large" onSubmit={this.handleSubmit}>
//               <Segment stacked>
//                 <Form.Input
//                   onChange={this.handleChange}
//                   value={username}
//                   name="username"
//                   fluid
//                   icon="user"
//                   iconPosition="left"
//                   placeholder="Username"
//                 />
//                 <Form.Input
//                   onChange={this.handleChange}
//                   value={email}
//                   name="email"
//                   fluid
//                   icon="mail"
//                   iconPosition="left"
//                   placeholder="E-mail address"
//                 />
//                 <Form.Input
//                   onChange={this.handleChange}
//                   fluid
//                   value={password1}
//                   name="password1"
//                   icon="lock"
//                   iconPosition="left"
//                   placeholder="Password"
//                   type="password"
//                 />
//                 <Form.Input
//                   onChange={this.handleChange}
//                   fluid
//                   value={password2}
//                   name="password2"
//                   icon="lock"
//                   iconPosition="left"
//                   placeholder="Confirm password"
//                   type="password"
//                 />

//                 <Button
//                   color="teal"
//                   fluid
//                   size="large"
//                   loading={loading}
//                   disabled={loading}
//                 >
//                   Signup
//                 </Button>
//               </Segment>
//             </Form>
//             <Message>
//               Already have an account? <NavLink to="/login">Login</NavLink>
//             </Message>
//           </React.Fragment>
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     loading: state.auth.loading,
//     error: state.auth.error,
//     token: state.auth.token
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     signup: (username, email, password1, password2) =>
//       dispatch(authSignup(username, email, password1, password2))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Accaunt);
