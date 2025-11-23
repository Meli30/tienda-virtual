import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("usuario"));
    if (savedUser) setUsuario(savedUser);
  }, []);

  // Cerrar menú al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    navigate("/login");
  };

  return (
    <header className="bg-yellow-200 text-center p-4 flex flex-col items-center space-y-4 w-full">
      <div className="w-full flex items-center justify-between">
        <div className="w-1/3"></div>

        <figure className="text-3xl font-bold w-1/3 text-center">
         buscando nombre 
        </figure>

        <ul className="w-1/3 flex justify-end text-2xl font-bold relative " ref={menuRef}>
          <li className="cursor-pointer p-4 " onClick={() => setOpen(!open)}>
            {usuario ? `👤 Hola ${usuario.nombre}` : "👤"}
          </li>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-full right-0 mt-2   shadow-lg rounded-lg p-2 flex flex-col text-lg z-50">
              {usuario ? (
                <>
                  <button
                    className=" py-2 px-4 hover:bg-gray-200 rounded text-left"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to="/registro" className="py-2 px-4 hover:bg-orange-500 rounded">
                    Registro
                  </Link>
                  <Link to="/login" className="py-2 px-4 hover:bg-orange-500 rounded">
                    Iniciar sesión
                  </Link>
                </>
              )}
            </div>
          )}
        </ul>
      </div>

      <div className="flex justify-evenly items-center w-full">
        <p>
          ¡¡Bienvenida buscando nombre!! | Te estábamos esperando | Envíos a todo el país
        </p>
      </div>

      <nav className="flex flex-col items-center space-y-4">
        <div className="flex justify-between gap-10">
          <p>📞 +5493576525383</p>
          <p>📍 Arroyito-Córdoba</p>
          <p>✉️ buscandonombre@gmail.com</p>
        </div>

        <div className="flex bg-amber-600 p-2 rounded-2xl w-200 ">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="p-2 rounded-l-2xl bg-amber-200 text-black w-200"
          />
          <button className="bg-amber-700 p-2 rounded-r-2xl hover:bg-amber-500 text-white">
            Buscar
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
