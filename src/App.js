import Blog from "./blog";
import "./index.css";
import Plantas from "./pages/plantas";
import Materiales from "./pages/materiales";
import Huerta from "./pages/huerta";
import Paisajismo from "./pages/paisajismo";
import Arbusto from "./pages/arbusto";
import Cursos from "./pages/cursos";
import Contacto from "./pages/contacto";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="materiales" element={<Materiales />} />
        <Route path="plantas" element={<Plantas />} />
        <Route path="huerta" element={<Huerta />} />
        <Route path="paisajismo" element={<Paisajismo />} />
        <Route path="arbusto" element={<Arbusto />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
