import React from "react";
import './Registro.css';
import logot from "../../img/logotriminance.png";

const Registro = () => {

    return(
        <div>
            <div>
                <div className='header'>
                    <img src={logot} height="90px"/>
                    <h1>El dinero de <b>tus sueños,</b> <br /> al <b>precio justo.</b></h1>
                </div>
                <div>
                    <p>Registro de usuario</p>
                </div>
                    <form>
                        <input type ='email' placeholder='Email' required/>
                        <input type ='email' placeholder='Confirma email' required/>
                        <input type ='number' placeholder='Teléfono movil' required />
                        <input type ='text' placeholder='Nombre usuario' required />
                        <input type ='' placeholder='País' required />
                        <input type ='' placeholder='Estado' required />
                        <input type ='' placeholder='Ciudad' required />

                    </form>
                        <input type ='checkbox' required>Certifico que estoy de acuerdo con los</input>
            </div>
        </div>
    )
}

export default Registro;