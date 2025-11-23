import { Link } from "react-router-dom";

const Menu = () => {
  return (      

<div className='rounded-2xl bg-amber-700 flex justify-between gap-20 w-full text-center'>
          
          <ul className='flex justify-evenly p-2 gap-10 w-full rounded-2xl'>
            <Link to="/productos">
            <li className="hover:text-yellow-400 cursor-pointer p-4"> 🛒 Productos</li>
            </Link>
          </ul>

          <ul className='flex justify-evenly p-2 gap-10 w-full rounded-2xl'>
            <Link to="/whatsapp"> 
            <li className="hover:text-yellow-400 cursor-pointer p-4">📱 Accesoriamiento por whatsapp</li>
            </Link>
          </ul>

          <ul className='flex justify-evenly p-2 gap-10 w-full rounded-2xl'>
            <Link to="/ofertas">  
            <li className="hover:text-yellow-400 cursor-pointer p-4">🔥 Ofertas</li>
            </Link>
          </ul>

               
          </div>
);
}

export default Menu;
  