function ModalResumen({ pelicula, onClose }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "10px", width: "300px" }}>
        <h2>{pelicula.titulo}</h2>
        <p>{pelicula.resumen}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalResumen;
