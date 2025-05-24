import { useState } from "react";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return (
    <section style={{
      padding: "3rem 1rem",
      maxWidth: "600px",
      margin: "auto",
      backgroundColor: "#fff0f5",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ color: "#bf1650", fontSize: "2rem", textAlign: "center", marginBottom: "1rem" }}>
        Contactanos
      </h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formulario.nombre}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formulario.email}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={formulario.mensaje}
          onChange={handleChange}
          rows="5"
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            resize: "none"
          }}
        />
        <button
          type="button"
          style={{
            padding: "0.75rem",
            backgroundColor: "#bf1650",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contacto;
