import Navegacion from "../components/navbar";
import Carretilla from "../assets/huerta32.png";
import CarretillaFlor from "../assets/huerta33.png";
import { NavLink } from "react-router-dom";

const plantas = () => {
  return (
    <div>
      <Navegacion />
      <div className="bg-[url('./assets/fond.jpg')] bg-no-repeat bg-cover block">
        <h1 className="py-12 font-bold text-center font-principal text-7xl text-color5">
          Que podemos plantar segun la época del año
        </h1>
        <p className="px-20 text-3xl font-secundario text-color1 ">
          {" "}
          Cada estación tiene su variedad de cultivo, dependiendo del ambiente,
          tendrás que planificar lo que vas a sembrar o plantar, de esta manera
          tendrás el éxitos esperado, y los alimentos no te van a faltar.
        </p>
        <div className="flex flex-col justify-center lg:flex-row">
          <NavLink
            className="p-0 m-10 border-2 md:px-24 md:pt-16 md:pb-24 md:m-24 primavera border-color1"
            exact="true"
            activeclassname="active"
            to="/primavera-verano"
          >
            <img
              className="w-60 h-60"
              src={CarretillaFlor}
              alt="primavera-verano"
            />
            <h1 className="m-20 mt-32 text-4xl font-bold font-principal text-color1 ">
              Primavera-Verano
            </h1>
          </NavLink>
          <NavLink
            className="p-0 m-10 border-2 md:px-24 md:pt-16 md:pb-24 md:m-24 invierno border-color1"
            exact="true"
            activeclassname="active"
            to="/invierno"
          >
            <img className="w-60 h-60" src={Carretilla} alt="otoño-invierno" />
            <h1 className="m-20 mt-32 text-4xl font-bold font-principal text-color1">
              Otoño-Invierno
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default plantas;
