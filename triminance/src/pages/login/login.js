import React,{ useState } from "react";
import './Login.css';
import logot from "../../img/logotriminance.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";




const Login =() => {

    const[datos,setDatos] = useState ({
        user:'',
        password:''
    });

    const actualizado=(event)=>{

        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        });
    };

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre+''+datos.password)
    };

    return (

        <div className="login-page">
            <div className="container">
                <img src={logot} height="90px" />

                <h1>El dinero <br /> de <b>tus sueños,</b> <br /> al <b>precio justo.</b></h1>

                <div className="form">
                    <p>Bienvenidos a <span>Triminance</span> /</p> <Link to="/Registro"><p>Registrarme</p></Link>

                    <form className="login-form" onSubmit={enviarDatos} >
                    
                        <input
                            name='user' 
                            type="text" 
                            placeholder="username" 
                            onChange={actualizado} 
                            required
                        />

                        <input
                            name='password' 
                            type="password" 
                            placeholder="password" 
                            onChange={actualizado} 
                            required
                        />


                        <button type='submit'>Acceder</button>


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
    )


};

export default Login;