import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Registro from './pages/registro/Registro';
import Login from './pages/login/Login';
import Inicio from './pages/inicio/Inicio'

function App() {
  //como convertir los datos un formulario en un formato json

  return (

    <BrowserRouter>
      <Switch>

        <Route exact path='/Registro' component={Registro} />
        <Route exact path='/inicio' component={Inicio} />
        <Route exact path='/' component={Login} />
      </Switch>
    </BrowserRouter>
    
  )


}

export default App;
