import Contexto, { ContextoProvider } from './context/Contexto'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Login from "./views/Login.jsx";
import Homeprivado from "./views/Homeprivado.jsx";
import Novalido from "./views/Novalido.jsx";
import Home from './views/Home.jsx';
import Detalle from './views/Detalle.jsx';
import Perfil from './views/Perfil.jsx';
import Publicar from './views/Publicar.jsx';


function App() {

  const { conectado } = useContext(Contexto);
  
  return (
   
  <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>

            {conectado &&
            <> 
            <Route path="/homeprivado" element={<Homeprivado></Homeprivado>}></Route>
            <Route path="/detalle" element={<Detalle></Detalle>}></Route>
            <Route path="/perfil" element={<Perfil></Perfil>}></Route>
            <Route path="/publicar" element={<Publicar></Publicar>}></Route>
            </>
            }
            <Route path="*" element={<Novalido></Novalido>}></Route>

          </Routes>
  </BrowserRouter>
   

  );
}

export default App;
