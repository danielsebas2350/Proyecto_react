function Cartilla({ nombre, imagen }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", width: "200px", textAlign: "center", margin: "1rem" }}>
      <img src={imagen} alt={nombre} style={{ width: "100%", borderRadius: "50%" }} />
      <h3>{nombre}</h3>
    </div>
  );
}

export default Cartilla;
