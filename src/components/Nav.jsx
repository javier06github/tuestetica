import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../contexts/CarritoContext";

function Nav() {
  const { productosCarrito } = useContext(CarritoContext);

  const navStyle = {
    backgroundColor: "#fff0f5",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    borderBottom: "1px solid #f3d0e0"
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "1rem",
    color: "#bf1650",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "8px"
  };

  const activeStyle = {
    backgroundColor: "#bf1650",
    color: "white"
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/carrito" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
            Carrito {productosCarrito.length > 0 && `(${productosCarrito.length})`}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
