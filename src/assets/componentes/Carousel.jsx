import { useState, useEffect } from "react";
import imgCarrusel from "../imagenes/Carrusel.jpg";
import imgCarrusel2 from "../imagenes/Carrusel2.jpg";

const slides = [
  {
    img: imgCarrusel2,
    text: "🔥 Nueva colección Verano 25/26 🔥",
    link: "/productos/deportivos",
  },
  {
    img: imgCarrusel,
    text: "25% OFF en toda la web",
    link: "/productos/ofertas",
  },
  
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden rounded-none sm:rounded-2xl shadow-lg">

      {/* Imagen */}
      <img
        src={slides[current].img}
        alt="Carrusel"
        className="
          w-full 
          h-[150px]
          sm:h-[235px]
          md:h-[450px]
          object-cover 
          transition-all duration-700 ease-in-out
        "
      />

      {/* FRASE + CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">

        {/* Frase */}
        <p className="
          text-white
          text-lg sm:text-3xl md:text-5xl
          font-extrabold
          bg-black/40 px-4 py-2 rounded-xl
          backdrop-blur-sm
        ">
          {slides[current].text}
        </p>

        {/* Boton de comprar ya*/}
        <a
          href={slides[current].link}
          className="
            bg-orange-700 hover:bg-orange-500
            text-white font-semibold
            text-sm sm:text-lg
            px-4 py-2 sm:px-6 sm:py-3
            rounded-xl
            shadow-lg
            transition
          "
        >
          Comprar ahora
        </a>

      </div>

      {/* Botón Izquierdo */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          text-white p-3 rounded-full hover:bg-black/60
        "
      >
        ❮
      </button>

      {/* Botón Derecho */}
      <button
        onClick={nextSlide}
        className="
          absolute right-3 top-1/2 -translate-y-1/2
          text-white p-3 rounded-full hover:bg-black/60
        "
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
