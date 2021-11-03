import React  from "react";
import './Registro.css';
import logo from "../../img/logotriminance.png";



const Registro = () => {  


  return (

    <container>

      
      
          <div class='arriba'>
            <img src={logo} height="70px" />
            <h1>El dinero de <b>tus sueños,</b>  al <b>precio justo.</b></h1>
          </div>

          <h2>Registro de Usuario</h2>
        


          <div className="container"> 

            <form className="login-form">
              <input type="text" placeholder="Email" required/>
              <input type="password" placeholder="Confirmar email" required/>
              <input type="text" placeholder="Telefono movil" required/>
              <input type="password" placeholder="Usuario" required/>
              <input type="text" placeholder="Pais" required/>
              <input type="password" placeholder="Estado" required/>
              <input type="password" placeholder="Ciudad" required/>
              
      
              <p>Acepto los <p>Terminos y Condiciones</p><input type="checkbox" id='boton'/></p> 

          

              <button class='boton'>Registrarse</button>

              <button class='boton'>Cancelar</button>

            
            </form>
          </div> 
      
   </container>      
  )
};
  
export default Registro;