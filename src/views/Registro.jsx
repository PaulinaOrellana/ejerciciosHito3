import React, { useContext, useState } from 'react';
import Contexto from '../context/Contexto.jsx';
import { useNavigate } from 'react-router-dom';

const Registro = () => {

    const [email, setEmail]= useState('');
    const [telefono, setTelefono]= useState('');
    const [password, setPassword]= useState('');

    const { lstUsuarios } = useContext(Contexto);
    const navigate = useNavigate();

    const registrarUsuario = () =>{
        lstUsuarios.push({email:email, clave:password, telefono:telefono});
        navigate('/login');
    }

  return (
    <form>
    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
    <hr/>
    <input type="number" onChange={(e) => setTelefono (e.target.value)} placeholder='teléfono'/>
    <hr/>
    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Clave'/>
    <hr/>
    <button type="button" onClick={() => registrarUsuario()}>REGISTRAR</button> 
 </form>
  )
}

export default Registro 