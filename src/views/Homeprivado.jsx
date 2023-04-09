import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../context/Contexto';


const Homeprivado = () => {

    const { usuario, setUsuario } = useContext(Contexto);
    const navigate =  useNavigate();

    const cerrarApp = () =>{
        setUsuario({conectado: false, nombre: ''});
        navigate('/');
    }

  return (
    <div>
        <div style={{display: ' flex', justifyContent:'space-between'}}>
    <NavLink to="/publicar">Publicar</NavLink>
    <NavLink to="/perfil">Perfil</NavLink>
    </div>
    <strong>{usuario.email}</strong>
    <button type="button" onClick={() => cerrarApp()}>Salir</button>
   
    </div>
    
  )
}

export default Homeprivado