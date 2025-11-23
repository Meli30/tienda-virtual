import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioGuardado) {
      setMensaje("❌ No existe ninguna cuenta registrada.");
      return;
    }

    if (usuarioGuardado.email !== email || usuarioGuardado.password !== password) {
      setMensaje("❌ Email o contraseña incorrectos.");
      return;
    }

    // Guardar sesión
    localStorage.setItem("sesion", JSON.stringify({ email }));

    setMensaje("✅ Inicio de sesión exitoso. Redirigiendo...");
    
    setTimeout(() => navigate("/"), 1500); // redirige al home
  };

  return (
   <div className="flex flex-col min-h-screen bg-yellow-100 p-2">

    {/* Botón ATRÁS */}
    <Link to="/"> 
    <button
      className="bg-orange-700 rounded-2xl mt-4 text-white w-20 h-10 mb-4">
        <span className="text-lg">← </span> 
        Atrás
    </button>
    </Link>

 <div className="flex justify-center items-center bg-yellow-100 p-2">
  <div className="w-full max-w-md flex flex-col items-start">
    {/* Formulario */}
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-700">
        Iniciar Sesión
      </h2>

      {mensaje && <p className="mb-4 text-center font-semibold">{mensaje}</p>}

      <div className="mb-4">
        <label className="block font-semibold mb-1">Correo electrónico</label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          className="w-full p-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-1">Contraseña</label>
        <input
          type="password"
          placeholder="********"
          className="w-full p-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-700 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
      >
        Iniciar sesión
      </button>
    </form>
  </div>
</div>
</div>
);
};

export default Login;
