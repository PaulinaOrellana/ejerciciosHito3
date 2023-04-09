import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../context/Contexto';


const Homeprivado = () => {

    const { setConectado } = useContext(Contexto);
    const navigate =  useNavigate();

    const cerrarApp = () =>{
        setConectado(false);
        navigate('/');
    }

  return (
    <div>
        <div style={{display: ' flex', justifyContent:'space-between'}}>
    <NavLink to="/publicar">Publicar</NavLink>
    <NavLink to="/perfil">Perfil</NavLink>
    <button type="button" onClick={() => cerrarApp()}>Salir</button>
    </div>
    <div>este es home privado</div>
    </div>
    
  )
}

export default Homeprivado