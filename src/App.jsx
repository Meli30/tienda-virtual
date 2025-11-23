import Header from './assets/componentes/Header.jsx';
import Carousel from './assets/componentes/Carousel.jsx';
import Menu from './assets/componentes/Menu.jsx';
import Cards from './assets/componentes/Cards.jsx';
import Productos from './assets/componentes/Productos.jsx';

import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registro from "./assets/componentes/Registro.jsx";
import Login from "./assets/componentes/Login.jsx";

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

