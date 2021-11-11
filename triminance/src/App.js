import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Registro from './pages/registro/Registro';
import Login from './pages/login/Login';
import Inicio from './pages/inicio/Inicio'
import { useEffect } from 'react';

function App() {
  //como convertir los datos un formulario en un formato json
  const url ='http://45.236.129.73:8888/user/'

  const fetchCharacters = (url) =>{
    
    fetch(url)
      .then(Response => Response.json())
      .then(data =>console.log(url.status))
      .catch(error => console.log (error))

  }

  
  useEffect(()=> {
    fetchCharacters(url);
  }, [])

  
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
