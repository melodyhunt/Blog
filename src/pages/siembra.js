import React from "react";
import Navegacion from "../components/navbar";
import Huerta1 from "../assets/huerta24.png";

const Siembra = () => {
  return (
    <div>
      <Navegacion />
      <div className="bg-[url('./assets/fond.jpg')] bg-no-repeat bg-cover block px-32">
        <h1 className="py-12 font-bold text-center font-principal text-7xl text-color5">
          Tipos de siembra
        </h1>
        <div>
          <section>
            <h1 className="text-3xl font-bold font-principal text-color6">
              Almacigo
            </h1>
            <div className="flex flex-row justify-around">
              <ol className="text-2xl font-secundario text-color1">
                <li className="py-2">
                  1- Colocar Tierra en un recipiente hasta llenar 2/3 de la
                  maceta en el que se sembrará la semilla. Debe tener
                  perforaciones para que escurra el exceso de agua.
                </li>
                <li>
                  2- Sembrar en forma regular y espaciada. Cubrir la semilla con
                  una delgada capa de tierra fina y luego aplanar la superficie
                  suavemente.
                </li>
                <li className="py-2">
                  3- Regar permanentemente en forma de lluvia fina con el fin de
                  mantener siempre húmedo el suelo.
                </li>
                <li>
                  {" "}
                  4- De ser posible cubrir el recipiente con un plástico o
                  vidrio hasta que las semillas germinen, secando el material
                  con frecuencia para limpiar la evapotranspiración.
                </li>
                <li className="py-2">
                  {" "}
                  5- Cuando la planta tenga 4 hojas verdaderas, trasládela al
                  lugar definitivo, donde tenga el espacio adecuado para el
                  crecimiento.
                </li>
                <li className="py-2">
                  {" "}
                  6- Al plantar recuerde verificar la distancia entre hilera y
                  sobre hilera que viene indicada en los sobres según la especie
                  que eligió.
                </li>
              </ol>
              <img src={Huerta1} alt="Almacigo" className="w-64 h-64 p-5" />
            </div>
            <div>
              <h1 className="mt-12 text-3xl font-bold font-principal text-color5">
                Directa a golpes
              </h1>
              <p className="text-2xl font-secundario text-color1">
                Se colocan 2 ó 3 semillas por golpe de siembra (depresión en el
                suelo) a una distancia entre golpes que oscila entre 50 cm y 1
                metro. Se utiliza en cultivos que necesitan una superficie
                amplia para su desarrollo.
              </p>
            </div>
            <div>
              <h1 className="mt-12 text-3xl font-bold font-principal text-color5">
                Transplante
              </h1>
              <p className="text-2xl font-secundario text-color1">
                Regar la tierra previamente. Y luego con una pala pequeña (o un
                cuchillo, o cuchara de la cocina) se hace un agujero en la cama
                (lugar preparado para el cultivo) . Se introducen las raíces de
                la planta cuidando que éstas queden derechas hacia abajo, no
                dobladas ni hacia arriba ni hacia los lados. Luego cubrimos con
                tierra cuidando que no se rompan las raíces.
              </p>
            </div>
            <div>
              <h1 className="mt-12 text-3xl font-bold font-principal text-color5">
                Directa a chorrillo
              </h1>
              <p className="text-2xl font-secundario text-color1">
                Consiste en realizar un surco más o menos profundo en el suelo
                ―o sustrato― y esparcir las semillas de forma continua y lineal
                a lo largo de éste. Posteriormente se cubren las semillas
                aportando tierra al surco, tanto más cuanto más grandes sean
                éstas. Esto significa que si las semillas miden 3 mm, se
                cubrirán como máximo con 6 mm de tierra. Obviamente, esto se
                hace de forma aproximada y la experiencia del horticultor le
                ayudará mucho a acertar. No obstante, es mejor quedarse corto
                que pasarse.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Siembra;
