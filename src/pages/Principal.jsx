import Cartilla from "../components/Cartilla";

function Principal() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      <Cartilla nombre="Carlos Valverde" imagen="https://picsum.photos/id/1005/200" />
      <Cartilla nombre="Carla Ortiz" imagen="https://picsum.photos/id/1011/200" />
      <Cartilla nombre="Ximena Herrera" imagen="https://picsum.photos/id/1027/200" />
    </div>
  );
}

export default Principal;
