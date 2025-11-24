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

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      gap-6
      justify-center
      mx-auto
      max-w-6xl
    "
  >
    {/* Card 1 */}
    <Link to="/productos">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
        <img src={imgLenceria} 
             className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-4xl font-semibold transition-opacity duration-300">Lencería</div>
      </div>
    </Link>

    {/* Card 2 */}
    <Link to="/productos">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
        <img src={imgBombis} className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-4xl font-semibold transition-opacity duration-300">Bombis</div>
      </div>
    </Link>

    {/* Card 3 */}
    <Link to="/productos">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
        <img src={imgBikinis} className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-4xl font-semibold transition-opacity duration-300">Bikinis</div>
      </div>
    </Link>

    {/* Card 4 */}
    <Link to="/productos">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
        <img src={imgBlanqueria} className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-4xl font-semibold transition-opacity duration-300">Blanquería</div>
      </div>
    </Link>

    {/* Card 5 */}
    <Link to="/productos">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
        <img src={imgDeportivo} className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-4xl font-semibold transition-opacity duration-300">Deportivo</div>
      </div>
    </Link>
  </div>
</div>


  )
}   
export default Cards;