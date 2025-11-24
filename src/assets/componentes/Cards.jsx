import imgLenceria from '../imagenes/Lenceria.jpg'
import imgBombis from '../imagenes/Bombachas.jpg'
import imgBikinis from '../imagenes/Bikinis.jpg'
import imgDeportivo from '../imagenes/Deportivo.jpg'
import imgBlanqueria from '../imagenes/Blanqueria.jpg'

import {Link} from 'react-router-dom'


const Cards = () => {
  return (
     <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Productos</h2>
        <div className="flex flex-cols-1 sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4
         justify-center items-center gap-6 mx-auto max-w-8xl">   

            {/* Tarjeta de Lenceria */}  
            <Link to="/productos"> 
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300">
                <img src={imgLenceria} 
                     alt="Producto 1" 
                     className="object-center"/>   
            </div>
            </Link>

             {/* Tarjeta de Bombis */}   
             <Link to="/productos">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgBombis} 
                     alt="Producto 1" 
                     className="object-cover"/>
            </div>
            </Link>

             {/* Tarjeta de Bikinis */}
             <Link to="/productos">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgBikinis} 
                alt="Producto 1" 
                className="object-cover"/>
            </div>
             </Link>
             
             {/* Tarjeta de Blanqueria */}   
            <Link to="/productos">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgBlanqueria} 
                alt="Producto 1" 
                className="object-cover"/>
            </div>
            </Link>

            {/* Tarjeta de Deportivo */}
            <Link to="/productos">  
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgDeportivo} 
                alt="Producto 1" 
                className="object-cover"/>
            </div>
            </Link> 

            

            
    </div>
    </div>
  )
}   
export default Cards;