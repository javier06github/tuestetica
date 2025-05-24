import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import "../styles/carrito.css";
import { Link } from "react-router-dom";

function Carrito() {
  const { productosCarrito, vaciarCarrito } = useContext(CarritoContext);

  const total = productosCarrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  if (productosCarrito.length === 0) {
    return (
      <div className="carrito-conteiner">
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos">
          <button className="boton-secundario">Ir a productos</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito-conteiner">
      <div className="carrito-titulos">
        <div className="carrito-titulo-producto">Producto</div>
        <div className="carrito-titulo-descripcion">Descripción</div>
        <div className="carrito-titulo-precio">Precio</div>
        <div className="carrito-titulo-cantidad">Cantidad</div>
        <div className="carrito-titulo-total">Subtotal</div>
      </div>

      {productosCarrito.map((item) => (
        <div key={item.id} className="carrito-card">
          <div className="carrito-producto">
            <img src={item.imagen} alt={item.name} className="carrito-image" />
            <span>{item.name}</span>
          </div>
          <div className="descripcion-carrito">{item.description}</div>
          <div>${item.price}</div>
          <div>{item.cantidad}</div>
          <div>${(item.price * item.cantidad).toFixed(2)}</div>
        </div>
      ))}

      <h3 style={{ textAlign: "right", marginTop: "1rem" }}>
        Total: ${total.toFixed(2)}
      </h3>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button onClick={vaciarCarrito} className="boton-secundario">
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default Carrito;
