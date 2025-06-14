import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Principal from "./pages/Principal";
import Peliculas from "./pages/Peliculas";
import Publicidad from "./components/Publicidad";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-center mt-3">CINEMATECA BOLIVIANA</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f2f2f2", padding: "1rem" }}>
          <div style={{ flex: 1 }}>
            <Footer />
          </div>
          <div style={{ flex: "none" }}>
            <Publicidad />
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;

