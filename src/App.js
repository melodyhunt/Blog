import Huerta from "./huerta/";
import "./index.css";
import Plantas from "./pages/plantas";
import Materiales from "./pages/materiales";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Huerta />} />
        <Route path="materiales" element={<Materiales />} />
        <Route path="plantas" element={<Plantas />} />
      </Routes>
    </div>
  );
}

export default App;
