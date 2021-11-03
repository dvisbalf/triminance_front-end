import React from "react";
import './Inicio.css';
import LOGO from'../../img/LOGO.png';

const Inicio =()=>{
    return(
        
        <div>
            
            <div class='hola'>
                
                <header>
                    <img src={LOGO} height="90px" />
                    <p>Hola, </p>
                    <hr />
                </header>

            </div>
        
        
        </div>


    )

};
export default Inicio;