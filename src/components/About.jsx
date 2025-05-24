function About() {
  return (
    <section style={{
      padding: "3rem 1rem",
      maxWidth: "800px",
      margin: "auto",
      backgroundColor: "#fff0f5",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#bf1650", fontSize: "2rem", marginBottom: "1rem" }}>Sobre Tu Estética</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
        En <strong>Tu Estética</strong> nos dedicamos con pasión a brindarte productos de belleza que realzan tu piel y elevan tu bienestar.
        Nuestra misión es acompañarte en tu rutina de cuidado con cremas, sérums y tratamientos seleccionados con amor y experiencia.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555", marginTop: "1rem" }}>
        Creemos que cada piel merece ser tratada con respeto y delicadeza. Por eso, nuestros productos están elaborados con ingredientes de alta calidad,
        pensados para todo tipo de pieles. Queremos que disfrutes de una experiencia de compra confiable, simple y hermosa.
      </p>
    </section>
  );
}

export default About;
