import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext , useEffect} from 'react';
import Contexto from '../context/Contexto';


const Homeprivado = () => {

    const { usuario, setUsuario, setLstProductos, lstProductos} = useContext(Contexto);
    const navigate =  useNavigate();

    const cerrarApp = () =>{
        setUsuario({conectado: false, nombre: ''});
        navigate('/');
    } 
     const cargarDatos = async () => {
        const res = await fetch ('http://localhost:3000/juegos.json');
        const data = await res.json();

        setLstProductos([...data]);
         } 

      useEffect(() => { 
        cargarDatos();
       }, [])
      

  return (
    <div>
        <div style={{display: 'flex', justifyContent:'space-between'}}>
          <NavLink to="/publicar">Publicar</NavLink>
          <NavLink to="/perfil">Perfil</NavLink> 
          <div>
              <strong>{usuario.email}</strong>
              <button type="button" onClick={() => cerrarApp()}>Salir</button>
            </div>
       </div>

    <div style={{display:'flex'}}> 
    {
            lstProductos.map((producto) => {
              return (
                <div style={{width:'25%'}}>
                
                 {producto.name} 
                 
                  </div>
              );
            })}
    </div>
    </div>
    
  );
};

export default Homeprivado;