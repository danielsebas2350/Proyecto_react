import { useState } from "react";
import ModalResumen from "../components/ModalResumen";

const peliculas = [
  { titulo: "Yawar Mallku", resumen: "Película sobre problemas indígenas." },
  { titulo: "Los Andes no creen en Dios", resumen: "Drama histórico boliviano." },
  { titulo: "Zona Sur", resumen: "Conflictos sociales en La Paz." },
  { titulo: "American Visa", resumen: "Hombre busca visa para irse a EE.UU." },
  { titulo: "El día que murió el silencio", resumen: "Un forastero cambia a un pueblo." }
];

function Peliculas() {
  const [seleccionada, setSeleccionada] = useState(null);

  return (
    <div style={{ textAlign: "center" }}>
      {peliculas.map((peli, index) => (
        <button key={index} onClick={() => setSeleccionada(peli)} style={{ margin: "10px" }}>
          {peli.titulo}
        </button>
      ))}
      {seleccionada && <ModalResumen pelicula={seleccionada} onClose={() => setSeleccionada(null)} />}
    </div>
  );
}

export default Peliculas;
