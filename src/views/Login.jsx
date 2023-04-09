import React, { useContext, useState } from 'react'
import Contexto from '../context/Contexto';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { lstUsuarios, setConectado } = useContext(Contexto);
    const navigate = useNavigate();

    const validarUsuario = () => {
      const usuarioValido = lstUsuarios.find((usuario) => usuario.email === email && usuario.clave === password)



      if (usuarioValido) {
            setConectado(true);
            navigate('/homeprivado'); 

      } else { 
        setConectado(false);
        alert('usuario invalido')
      }
    }

  return (
     <form>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <hr/>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <hr/>
        <button type="button" onClick={() =>validarUsuario()}>ENTRAR</button> 
     </form>
  )
}

export default Login