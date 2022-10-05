import Huerta from "./huerta/";
import "./index.css";
import Plantas from "./pages/plantas";
import Materiales from "./pages/materiales";
import Invierno from "./pages/invierno";
import Verano from "./pages/primavera-verano";
import Siembra from "./pages/siembra";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Huerta />} />
        <Route path="materiales" element={<Materiales />} />
        <Route path="plantas" element={<Plantas />} />
        <Route path="invierno" element={<Invierno />} />
        <Route path="primavera-verano" element={<Verano />} />
        <Route path="siembra" element={<Siembra />} />
      </Routes>
    </div>
  );
}

export default App;
