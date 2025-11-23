import Header from './assets/componentes/Header.jsx';
import Carousel from './assets/componentes/Carousel.jsx';
import Menu from './assets/componentes/Menu.jsx';
import Cards from './assets/componentes/Cards.jsx';
import Productos from './assets/componentes/Productos.jsx';
import Whatsapp from './assets/componentes/Whatsapp.jsx';
import Ofertas from './assets/componentes/Ofertas.jsx';
import Footer from './assets/componentes/Footer.jsx';

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
        <Route path="/whatsapp" element={<Whatsapp />} />
        
          {/*OFERTAS*/}
        <Route path="/ofertas" element={<Ofertas />} /> 

        {/*PÁGINAS */}
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;

