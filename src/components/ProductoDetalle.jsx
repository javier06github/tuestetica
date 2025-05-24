import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";

function ProductoDetalle() {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://6831d4946205ab0d6c3dc938.mockapi.io/productos")
      .then((res) => res.json())
      .then((datos) => {
        const productoEncontrado = datos.find((item) => item.id === id);
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setError("Producto no encontrado.");
        }
        setCargando(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setCargando(false);
      });
  }, [id]);

  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...producto, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return null;

  return (
    <div className="detalle-container">
      <img className="detalle-imagen" src={producto.imagen} alt={producto.name} />
      <div className="detalle-info">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p>{producto.price} $</p>

        <div className="detalle-contador">
          <button onClick={restarContador} style={contadorBtn}>−</button>
          <span style={cantidadEstilo}>{cantidad}</span>
          <button onClick={sumarContador} style={contadorBtn}>+</button>
        </div>

        <button onClick={funcionCarrito} style={botonPrincipal}>Agregar al carrito</button>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Link to="/productos">
            <button style={botonSecundario}>Volver a productos</button>
          </Link>
          <Link to="/carrito">
            <button style={botonSecundario}>Ir al carrito</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Estilos en línea
const botonPrincipal = {
  marginTop: "1rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#bf1650",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer"
};

const botonSecundario = {
  padding: "0.6rem 1.2rem",
  backgroundColor: "#fff",
  color: "#bf1650",
  border: "1px solid #bf1650",
  borderRadius: "8px",
  fontSize: "0.95rem",
  cursor: "pointer"
};

const contadorBtn = {
  padding: "0.4rem 1rem",
  fontSize: "1.2rem",
  backgroundColor: "#f3d0e0",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const cantidadEstilo = {
  fontSize: "1.2rem",
  margin: "0 1rem",
  fontWeight: "500"
};

export default ProductoDetalle;
