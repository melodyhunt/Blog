import React from "react";
import Navegacion from "../components/navbar";
import Primavera from "../assets/organica.jpg";
import Flor from "../assets/marga.jpg";
import Interiores from "../assets/interiores.jpg";
import { Link } from "react-router-dom";

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
        <div className="flex flex-row p-16">
          <div className="w-2/3">
            <section className="mb-12">
              <img
                src={Interiores}
                alt="Huerta primavera verano"
                className="brightness-50"
              ></img>
              <h3 className="my-4 text-2xl font-bold uppercase font-secundario text-color1">
                Las cuatro claves del paisajismo moderno
              </h3>
              <p className="mb-6 text-xl text-black font-secundario">
                Cada estación tiene su variedad de cultivo, dependiendo del
                ambiente, tendrás que planificar lo que vas a sembrar o plantar,
                de esta manera tendrás el éxitos esperado, y los alimentos no te
                van a faltar.
              </p>
              <Link
                className="px-6 py-3 text-2xl text-white uppercase bg-color3 hover:bg-color2"
                to="/paisajismo "
              >
                Leer Entrada
              </Link>
            </section>
            <section className="pt-12 pb-12 border-t-2 border-gray-300">
              <img
                src={Flor}
                alt="Huerta primavera verano"
                className="brightness-50"
              ></img>
              <h3 className="my-4 text-2xl font-bold uppercase font-secundario text-color1">
                5 plantas para decorar tu balcón
              </h3>
              <p className="mb-6 text-xl text-black font-secundario">
                Hace un par de años parecía que quien tenía un balcón, tenía un
                trastero. Era un espacio que, por ser pequeño, no se consideraba
                habitable y ni mucho menos rentable para cuidarlo y decorarlo.
              </p>
              <Link
                className="px-6 py-3 text-2xl text-white uppercase bg-color3 hover:bg-color2"
                to="/plantas "
              >
                Leer Entrada
              </Link>
            </section>
            <section className="pt-12 pb-12 border-t-2 border-gray-300">
              <img
                src={Interiores}
                alt="Huerta primavera verano"
                className="brightness-50"
              ></img>
              <h3 className="my-4 text-2xl font-bold uppercase font-secundario text-color1">
                Las cuatro claves del paisajismo moderno
              </h3>
              <p className="mb-6 text-xl text-black font-secundario">
                Cada estación tiene su variedad de cultivo, dependiendo del
                ambiente, tendrás que planificar lo que vas a sembrar o plantar,
                de esta manera tendrás el éxitos esperado, y los alimentos no te
                van a faltar.
              </p>
              <Link
                className="px-6 py-3 text-2xl text-white uppercase bg-color3 hover:bg-color2"
                to="/"
              >
                Leer Entrada
              </Link>
            </section>
            <section className="pt-12 pb-12 border-t-2 border-gray-300">
              <img
                src={Primavera}
                alt="Huerta primavera verano"
                className="brightness-50"
              ></img>
              <h3 className="my-4 text-2xl font-bold uppercase font-secundario text-color1">
                Que podemos plantar en Primavera-Verano
              </h3>
              <p className="mb-6 text-xl text-black font-secundario">
                Cada estación tiene su variedad de cultivo, dependiendo del
                ambiente, tendrás que planificar lo que vas a sembrar o plantar,
                de esta manera tendrás el éxitos esperado, y los alimentos no te
                van a faltar.
              </p>
              <Link
                className="px-6 py-3 text-2xl text-white uppercase bg-color3 hover:bg-color2"
                to="/huerta "
              >
                Leer Entrada
              </Link>
            </section>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Huerta;
