import React from "react";
import Navegacion from "../components/navbar";

import Beneficios from "../components/beneficios";

const Huerta = () => {
  return (
    <div>
      <Navegacion />
      <div className="">
        <div className=" bg-[url('./assets/boho.jpg')] p-28 bg-no-repeat bg-cover block  ">
          <h2 className="px-32 pt-12 text-6xl font-bold text-white font-secundario">
            Un blog para vivir en exteriores con consejos y cursos.
          </h2>
          <p className="w-2/3 p-10 mx-32 mt-16 text-3xl text-white font-principal bg-opacity-60 bg-color2 rounded-xl">
            nos enfocamos en respetar los espacios para mantener un ecosistema
            orgánico y funcional.
          </p>
        </div>
        <div>
          <h3 className="mb-10 ml-12 font-principal text-color3 text-7xl">
            Beneficios de tener una huerta en casa
          </h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Huerta;
