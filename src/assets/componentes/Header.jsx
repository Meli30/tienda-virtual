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
  <header className="bg-yellow-200 w-full">

    {/* --- 1. PRIMERA FILA (Título + Login) --- */}
    <div className="flex flex-col items-center text-center p-4 
                    sm:flex-row sm:justify-between sm:items-center sm:text-left gap-3">

      {/* IZQUIERDA (vacío para alineación en desktop) */}
      <div className="hidden sm:block w-1/3"></div>

      {/* TÍTULO */}
      <figure className="text-3xl font-bold sm:w-1/3">
        buscando nombre
      </figure>

      {/* LOGIN / USUARIO */}
      <ul 
        className="flex justify-center sm:justify-end text-2xl font-bold relative sm:w-1/3"
        ref={menuRef}
      >
        <li className="cursor-pointer p-2" onClick={() => setOpen(!open)}>
          {usuario ? `👤 Hola ${usuario.nombre}` : "👤"}
        </li>

        {open && (
          <div className="absolute top-full right-0 mt-2 bg-yellow-300 rounded-lg p-2 flex flex-col text-xl z-50">
            {usuario ? (
              <button
                className="py-2 px-4 hover:bg-gray-200 rounded text-left"
                onClick={logout}
              >
                Cerrar sesión
              </button>
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

    {/* --- 2. FRASE BIENVENIDA --- */}
    <div className="text-center px-4 pb-2">
      <p className="text-sm sm:text-base">
        ¡¡Bienvenida buscando nombre!! | Te estábamos esperando | Envíos a todo el país
      </p>
    </div>

    {/* --- 3. CONTACTO + BUSCADOR --- */}
    <nav className="flex flex-col items-center space-y-4 px-4 pb-4">

      {/* Bloque de contacto RESPONSIVE */}
      <div className="flex flex-col items-center gap-2 text-center
                      sm:flex-row sm:justify-center sm:gap-10">

        <p>📞 +5493576525383</p>
        <p>📍 Arroyito-Córdoba</p>
        <p>✉️ buscandonombre@gmail.com</p>
      </div>

      {/* Buscador responsive */}
      <div className="flex w-full max-w-sm">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="p-2 rounded-l-2xl bg-amber-200 text-black flex-grow"
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
