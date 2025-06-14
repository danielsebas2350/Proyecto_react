import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "1rem" }}>
      <Link to="/">Principal</Link>
      <Link to="/peliculas">Películas</Link>
    </nav>
  );
}

export default Navbar;
