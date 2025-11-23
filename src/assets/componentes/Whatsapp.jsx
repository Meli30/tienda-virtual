import { useState } from "react";
import { Link } from "react-router-dom";

const Whatsapp = () => {
    return (
        <div className="bg-yellow-100">

        {/* Botón ATRÁS */}
      <Link to="/">
      <button className="bg-orange-700 rounded-2xl mt-4 text-white w-20 h-10 mb-4"
      >
        <span className="text-lg">← </span> 
        Atrás
      </button>
      </Link>
      
        <h1 className="flex justify-center text-3xl font-bold mb-4"></h1>

        <div>
        <div>
            <h2 className="flex justify-center text-2xl font-semibold mb-4">Estamos trabajando..</h2> 

            <div className="flex justify-center">
              <img 
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDRsZnlhbnptOGMxNzd2NWc2NjVrNWtid29oZzI4emlya2Vlb3dyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lJNoBCvQYp7nq/giphy.gif" 
                alt="Próximamente" 
                className="flex w-64 h-64"
              />

             
              </div>
              <div className="flex justify-center mt-4 text-3xl">
                <h3>¡ Disculpe !</h3>
              </div>
        </div>
        </div>
      
      
      </div>
    );
}

export default Whatsapp;