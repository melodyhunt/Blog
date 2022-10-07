import Blog from "./blog";
import "./index.css";
import Plantas from "./pages/plantas";
import Materiales from "./pages/materiales";
import Huerta from "./pages/huerta";
import Paisajismo from "./pages/paisajismo";
import Siembra from "./pages/siembra";

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
        <Route path="siembra" element={<Siembra />} />
      </Routes>
    </div>
  );
}

export default App;
