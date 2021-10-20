import React from "react";
import './Login.css';
import logot from "../../img/logotriminance.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import Registro from '../Registro/Registro'

const Login = () => {
    return (
        
        <Router>
            <Route exact path='/registro' component={Registro} />
        <div className="login-page">
            <div className="container">
            
                <img src={logot} height="90px" />
                <h1>El dinero <br /> de <b>tus sueños,</b> <br /> al <b>precio justo.</b></h1>


                <div className="form">
                    <form className="login-form">
                    <input type="text" placeholder ="username" required/>
                    <input type="password" placeholder ="password" required/>
                <p>Bienvenidos a <span>Triminance</span> <Link to='/registro'>Registarme</Link> </p>
                    <button>Acceder</button>
                    <p className="message"><a href="#">He olvidado mi contraseña</a></p>
                    </form>
                </div>
                
                <div className="social_link">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>
        </div>       
        </Router>
    )
};

export default Login;