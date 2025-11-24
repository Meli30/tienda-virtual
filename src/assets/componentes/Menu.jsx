import { Link } from "react-router-dom";

const Menu = () => {
 return (
  <div className="bg-amber-700 text-white rounded-2xl w-full">
  <nav className="flex flex-row justify-around items-center p-2 
                  sm:flex-row sm:justify-around">

    {/* PRODUCTOS */}
    <Link to="/productos" className="relative group">
      <li className="list-none cursor-pointer p-3 text-center hover:text-yellow-400">

        {/* Ícono en CELULAR */}
        <span className="text-2xl sm:hidden">🛒</span>

        {/* Texto en COMPUTADORA */}
        <span className="hidden sm:inline">🛒 Productos</span>

        {/* Tooltip solo en CELULAR */}
        <span className="
          absolute left-1/2 -translate-x-1/2 top-full mt-1
          w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0
          group-hover:opacity-100 transition-opacity
          sm:hidden
        ">
          Productos
        </span>
      </li>
    </Link>

    {/* WHATSAPP */}
    <Link to="/whatsapp" className="relative group">
      <li className="list-none cursor-pointer p-3 text-center hover:text-yellow-400">

        <span className="text-2xl sm:hidden">📱</span>
        <span className="hidden sm:inline">📱 Accesoramiento por WhatsApp</span>

        <span className="
          absolute left-1/2 -translate-x-1/2 top-full mt-1
          w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0
          group-hover:opacity-100 transition-opacity
          sm:hidden
        ">
          Accesoramiento por WhatsApp
        </span>
      </li>
    </Link>

    {/* OFERTAS */}
    <Link to="/ofertas" className="relative group">
      <li className="list-none cursor-pointer p-3 text-center hover:text-yellow-400">

        <span className="text-2xl sm:hidden">🔥</span>
        <span className="hidden sm:inline">🔥 Ofertas</span>

        <span className="
          absolute left-1/2 -translate-x-1/2 top-full mt-1
          w-max bg-black text-white text-xs rounded-md px-2 py-1 opacity-0
          group-hover:opacity-100 transition-opacity
          sm:hidden
        ">
          Ofertas
        </span>
      </li>
    </Link>

  </nav>
</div>


 )

}

export default Menu;
  