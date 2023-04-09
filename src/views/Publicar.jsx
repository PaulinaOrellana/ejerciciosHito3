import React, { useContext, useState } from 'react';
import Contexto from '../context/Contexto';
import { useNavigate } from 'react-router-dom';

const Publicar = () => {

  const{ lstProductos, setLstProductos } = useContext(Contexto);

  const [nombre, setNombre] = useState('');

  const navigate = useNavigate();

  const publicarProducto = () => {
      setLstProductos([...lstProductos,{name:nombre}]);
      navigate('/homeprivado'); 
  }

  return (  
    <form>
    <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder='Nombre de Juego'/>
    <hr/>
    
    <button type="button" onClick={() => publicarProducto()}>Publicar</button> 
 </form>
  )
}

export default Publicar