import React from "react";
import Navegacion from "../components/navbar";
import Maceta from "../assets/huerta9.png";
import Beneficios from "../components/beneficios";

const Huerta = () => {
  return (
    <div>
      <Navegacion />
      <div className="bg-[url('./assets/fond.jpg')] bg-no-repeat bg-cover block">
        <h1 className="font-bold text-center text-7xl font-principal md:text-9xl text-color5">
          Huerta
        </h1>
        <div className="flex flex-col items-center md:flex-row">
          <div className="block ml-10 mr-10 text-3xl md:mr-0 lg:ml-32 text-color1 font-secundario">
            <p>
              La huerta es una actividad donde convergen el trabajo, la
              alimentación sana, el autoabastecimiento y el cuidado del medio
              ambiente, todo ello sin comprometer insumos escasos.
            </p>
            <p className="mb-10">
              Brinda la posibilidad de estar en contacto con “lo vivo” dentro de
              nuestra casa: tocar la tierra, sentir los olores y los sabores de
              las plantas, vincularse con los ritmos naturales y los ciclos
              vitales. Por ello, desde el programa consideramos a la huerta como
              un medio y un espacio que posibilita desarrollar múltiples
              sensaciones positivas y gratificantes desde la siembra hasta la
              cosecha, diferentes objetivos y vivencias, acordes a cada persona
              que se anime a realizarla. Es un proceso que permite comprender de
              dónde vienen los alimentos y dimensionar el trabajo que representa
              para quienes lo producen.
            </p>
          </div>
          <img
            className="mx-10 my-20 lg:mx-30 xl:mx-40 2xl:mx-60 w-96 h-96"
            src={Maceta}
            alt="maceta"
          />
        </div>
        <div>
          <h3 className="mb-10 ml-12 font-principal text-color3 text-7xl">
            Beneficios de tener una huerta en casa
          </h3>
          <div>
            <Beneficios />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Huerta;
