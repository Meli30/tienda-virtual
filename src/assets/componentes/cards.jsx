import imgcalza1 from '../imagenes/calza 1.jpg'
import imgcalza2 from '../imagenes/calza 2.jpg'
import imgcalza3 from '../imagenes/calza 3.jpg'

const Cards = () => {
  return (
     <div className="p-6 bg-gray-100">
       
        <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">       
            {/* Tarjeta de Producto 1 */}   
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgcalza1} alt="Producto 1" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Producto 1</h3>
                    <p className="text-gray-600 mb-4">$19.99</p>
                    <button className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-500">Agregar al Carrito</button>
                </div>
            </div>

             {/* Tarjeta de Producto 2 */}   
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgcalza2} alt="Producto 1" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Producto 2</h3>
                    <p className="text-gray-600 mb-4">$19.99</p>
                    <button className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-500">Agregar al Carrito</button>
                </div>
            </div>

             {/* Tarjeta de Producto 3 */}   
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgcalza3} alt="Producto 1" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Producto 3</h3>
                    <p className="text-gray-600 mb-4">$19.99</p>
                    <button className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-500">Agregar al Carrito</button>
                </div>
            </div>

            {/* Tarjeta de Producto 4 */}   
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={imgcalza3} alt="Producto 1" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Producto 4</h3>
                    <p className="text-gray-600 mb-4">$19.99</p>
                    <button className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-500">Agregar al Carrito</button>
                </div>
            </div>
    </div>
    </div>
  )
}   
export default Cards;