import Header from './assets/componentes/Header.jsx';
import Carousel from './assets/componentes/carousel.jsx';
import Menu from './assets/componentes/menu.jsx';
import Cards from './assets/componentes/Cards.jsx';
import Productos from './assets/componentes/productos.jsx';

import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registro from "./assets/componentes/registro.jsx";
import Login from "./assets/componentes/login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        {/* HOME */}
        <Route 
          path="/" 
          element={
            <>
              <Carousel />
              <Menu />
              <Cards />
            </>
          } 
        />

          {/*PRODUCTOS */}
        <Route path="/productos" element={<Productos />} />

          {/*ASESORAMIENTO*/}
        <Route path="/whatsapp" element={<whatsapp />} />
        
          {/*OFERTAS*/}
        <Route path="/ofertas" element={<ofertas />} /> 

        {/*PÁGINAS */}
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

