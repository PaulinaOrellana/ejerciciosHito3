import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div style={{display: ' flex', justifyContent:'space-between'}}>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/registro">Registro</NavLink>
    </div>
    <div>este es el Home Publico</div>
    </div>
  )
}

export default Home 