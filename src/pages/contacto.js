import Navegacion from "../components/navbar";
import { NavLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";


import Footer from "../components/footer";

import Formulario from "../components/formulario";

const Contacto = () => {
  return (
    <div>
      <Navegacion />
      <div className="bg-[url('./assets/verde.png')] bg-repeat  ">
        <NavLink
          className="flex flex-row px-3 text-5xl font-secundario text-color1 hover:text-color5"
          to="/"
        >
          <HiArrowLeft className="my-1" />
        </NavLink>
        <h1 className="pb-4 font-bold text-center lg:pb-32 2xl:p-0 font-principal text-7xl text-color5">
          Contacto
        </h1>
        <Formulario />
        <Footer />
      </div>
    </div>
  );
};

export default Contacto;
