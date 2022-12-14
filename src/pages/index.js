import React from "react";
import Navegacion from "../components/navbar";
import Primavera from "../assets/organica.jpg";
import Flor from "../assets/marga.jpg";
import Interiores from "../assets/interiores.jpg";
import Arbusto from "../assets/arbustos.jpeg";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Huerta = () => {
  return (
    <div>
      <Navegacion />
      <div className="">
        <div className=" bg-[url('./assets/boho.jpg')] lg:p-28 md:p-12 p-4 bg-no-repeat md:bg-cover block  ">
          <h2 className="px-4 pt-6 text-3xl font-bold text-white md:text-5xl md:pt-12 lg:px-32 md:px-16 anima font-secundario">
            Un blog para vivir en exteriores con consejos y cursos.
          </h2>
          <p className="p-2 px-6 mx-2 mt-6 text-xl text-white w-3/2 md:mt-16 md:p-4 lg:w-2/3 lg:p-10 md:text-2xl lg:mx-32 md:mx-16 anima font-principal bg-opacity-60 bg-color2 rounded-xl">
            nos enfocamos en respetar los espacios para mantener un ecosistema
            orgánico y funcional.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row p-16 md:px-10 px-4 lg:px-32 bg-[url('./assets/verde.png')] bg-repeat md:bg-cover">
          <div className="mr-5 lg:mr-10 lg:w-2/3 ">
            <h1 className="mb-10 text-4xl font-semibold lg:text-5xl text-color3 font-secundario">
              Blog
            </h1>
            <section className="mb-12">
              <img
                src={Interiores}
                alt="Huerta primavera verano"
                className="brightness-50"
              ></img>
              <h3 className="my-4 text-xl font-bold uppercase 2xl:text-2xl font-secundario text-color1">
                Las cuatro claves del paisajismo moderno
              </h3>
              <p className="mb-6 text-base text-black 2xl:text-xl font-secundario">
                Cada estación tiene su variedad de cultivo, dependiendo del
                ambiente, tendrás que planificar lo que vas a sembrar o plantar,
                de esta manera tendrás el éxitos esperado, y los alimentos no te
                van a faltar.
              </p>
              <Link
                className="px-6 py-3 text-base text-white uppercase 2xl:text-xl bg-color3 hover:bg-color2"
                to="/paisajismo "
                target="_top"
              >
                Leer Entrada
              </Link>
            </section>
            <section className="pt-12 pb-12 border-t-2 border-gray-300 ">
              <img
                src={Flor}
                alt="Huerta primavera verano"
                className="brightness-50"
              ></img>
              <h3 className="my-4 text-xl font-bold uppercase 2xl:text-2xl font-secundario text-color1">
                5 plantas para decorar tu balcón
              </h3>
              <p className="mb-6 text-base text-black 2xl:text-xl font-secundario">
                Hace un par de años parecía que quien tenía un balcón, tenía un
                trastero. Era un espacio que, por ser pequeño, no se consideraba
                habitable y ni mucho menos rentable para cuidarlo y decorarlo.
              </p>
              <Link
                className="px-6 py-3 text-base text-white uppercase 2xl:text-xl bg-color3 hover:bg-color2"
                to="/plantas "
                target="_top"
              >
                Leer Entrada
              </Link>
            </section>
            <section className="pt-12 pb-12 border-t-2 border-gray-300">
              <img
                src={Arbusto}
                alt="Huerta primavera verano"
                className="brightness-50 w-[700px]"
              ></img>
              <h3 className="my-4 text-xl font-bold uppercase 2xl:text-2xl font-secundario text-color1">
                Los arbustos en el jardín
              </h3>
              <p className="mb-6 text-base text-black 2xl:text-xl font-secundario">
                hablaremos de uno de los elementos más prácticos para tu jardín,
                los arbustos. En Terra Santa consideramos los arbustos elementos
                principales para un jardín por la gran versatilidad que tienen.
              </p>
              <Link
                className="px-6 py-3 text-base text-white uppercase 2xl:text-xl bg-color3 hover:bg-color2"
                to="/arbusto"
                target="_top"
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
              <h3 className="my-4 text-xl font-bold uppercase 2xl:text-2xl font-secundario text-color1">
                Que podemos plantar en Primavera-Verano
              </h3>
              <p className="mb-6 text-base text-black 2xl:text-xl font-secundario">
                Cada estación tiene su variedad de cultivo, dependiendo del
                ambiente, tendrás que planificar lo que vas a sembrar o plantar,
                de esta manera tendrás el éxitos esperado, y los alimentos no te
                van a faltar.
              </p>
              <Link
                className="px-6 py-3 text-base text-white uppercase 2xl:text-xl bg-color3 hover:bg-color2"
                to="/huerta"
                target="_top"
              >
                Leer Entrada
              </Link>
            </section>
          </div>
          <div className="text-xl font-bold font-principal ">
            <h1 className="mb-10 text-4xl font-semibold lg:text-5xl text-color3 font-secundario">
              Cursos
            </h1>
            <div>
              <section>
                <h1 className="mb-8 text-xl font-semibold 2xl:text-4xl lg:text-2xl text-color1 font-secundario">
                  Las 20 Tácticas para el Diseño de jardines
                </h1>
                <p className="pl-6 mb-6">
                  Cupo: <span className="font-light">20</span>
                </p>
                <p className="pl-6 mb-6">Presencial</p>
                <p className="pb-6 pl-6 border-b-2 border-gray-400">$10550</p>
              </section>
              <section>
                <h1 className="pt-2 mb-8 text-xl font-semibold lg:text-2xl 2xl:text-4xl text-color1 font-secundario">
                  Digitaliza tus ideas
                </h1>
                <p className="pl-6 mb-6">
                  Curso: <span className="font-light">30</span>
                </p>
                <p className="pl-6 mb-6">Semipresencial</p>
                <p className="pb-6 pl-6 mb-10 border-b-2 border-gray-400">
                  $9350
                </p>
              </section>
              <Link
                to="/cursos"
                className="px-6 py-3 text-xl font-light text-white uppercase 2xl:text-2xl lg:px-10 lg:py-5 font-secundario bg-color1 hover:bg-yellow-900"
                target="_top"
              >
                ver Todos los Cursos
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Huerta;
