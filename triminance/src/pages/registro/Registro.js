import React,{useState}  from "react";
import './Registro.css';
import logo from "../../img/logotriminance.png";
import TyC from "../TyC/TyC";


const Registro = () => {  
  const [estadoModal, cambiarEstadoModal] = useState(false);


  return (

    <container>

      
      
          <div class='arriba'>
            <img src={logo} height="60px" />
            <p class='h1'>El dinero de <b>tus sueños,</b>  al <b>precio justo.</b></p>
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
              
      
              <p onClick={() => cambiarEstadoModal(!estadoModal)}>Acepto los  Terminos y Condiciones</p> 
              <input type="checkbox" class='boton1'/>

              <TyC 
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}>
              </TyC>

          

              <button class='boton'>Registrarse</button>


            </form>

            <button class='boton'>Cancelar</button>

          </div> 
      
   </container>      
  )
};
  
export default Registro;