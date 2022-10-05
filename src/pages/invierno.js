import Navegacion from "../components/navbar";
import { NavLink } from "react-router-dom";
import Zapato from "../assets/huerta16.png";
import Planta from "../assets/huerta23.png";
import Flor from "../assets/huerta20.png";
import FrutasVerduras from "../components/frutas-verduras";
import VerdurasFrutas from "../components/Verduras-Frutas";

const Invierno = () => {
  return (
    <div>
      <Navegacion />
      <div className="bg-[url('./assets/fond.jpg')] pt-10 bg-no-repeat bg-cover block">
        <NavLink
          className="px-3 mx-10 text-4xl border-2 font-secundario text-color4 border-color4 hover:border-color5 hover:text-color5"
          to="/plantas"
        >
          Volver
        </NavLink>
        <h1 className="py-20 font-bold text-center font-principal text-7xl text-color4">
          Otoño-Invierno
        </h1>
        <p className="px-10 pb-20 text-3xl md:px-20 font-secundario text-color1">
          Permite cultivar una gran cantidad de especies hortícolas de gran
          valor nutricional para la dieta diaria de la familia.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-color1 font-principal">
          <FrutasVerduras
            id="23"
            imagen={Zapato}
            nombre="Zanahoria"
            siembra="Almacigo: Abr-Jul "
            fecha="80-100"
            for="23"
          />
          <FrutasVerduras
            id="24"
            imagen={Planta}
            nombre="Lechuga"
            siembra="Almacigo: Mar-Abr "
            fecha="80-100"
            for="24"
          />
          <VerdurasFrutas
            id="25"
            imagen={Flor}
            nombre="Espinaca"
            siembra="Almácigo: Feb/Mar–Jun"
            fecha="45-60"
            for="25"
          />
          <VerdurasFrutas
            id="26"
            imagen={Zapato}
            nombre="Haba"
            siembra="Directa a golpes: Abr-May o Jun-Jul"
            fecha="120-180"
            for="26"
          />
          <FrutasVerduras
            id="27"
            imagen={Planta}
            nombre="Radicheta"
            siembra="Directa a chorrillo: Feb-May"
            fecha="90(3 cortes)"
            for="27"
          />
          <FrutasVerduras
            id="28"
            imagen={Flor}
            nombre="Cebolla"
            siembra="Verdeo: Almácigo: Feb-Jun o Directa: Mar-May"
            fecha="150"
            for="28"
          />
          <VerdurasFrutas
            id="29"
            imagen={Zapato}
            nombre="Arveja"
            siembra="Directa: Jun-Ago"
            fecha="120-150"
            for="29"
          />
          <VerdurasFrutas
            id="30"
            imagen={Planta}
            nombre="Brocoli"
            siembra="Almácigo: Feb-Mar o Trasplante: Mar-Abr"
            fecha="80-100"
            for="30"
          />
          <FrutasVerduras
            id="31"
            imagen={Flor}
            nombre="Repollo"
            siembra="Almacigo: Feb-Mar o Transplante: Mar-Abril"
            fecha="90-100"
            for="31"
          />
          <FrutasVerduras
            id="32"
            imagen={Zapato}
            nombre="Ajo"
            siembra="Directa: Mar-Abr"
            fecha="150-180"
            for="32"
          />
          <VerdurasFrutas
            id="33"
            imagen={Planta}
            nombre="Rabanito"
            siembra="Almacigo: Feb-Mar o Transplante: Jun-Jul"
            fecha="30-60"
            for="33"
          />
          <VerdurasFrutas
            id="34"
            imagen={Flor}
            nombre="Espinaca"
            siembra="Almácigo: Feb/Mar–Jun"
            fecha="45-60"
            for="35"
          />
          <FrutasVerduras
            id="36"
            imagen={Zapato}
            nombre="Puerro"
            siembra="Almacigo: Feb-Abr o Transplante: May-Jul"
            fecha="120-150"
            for="36"
          />
        </div>
        <div>
          <h2 className="py-20 text-5xl font-bold text-center font-principal text-color5">
            Paso a paso para crear una huerta en un jardín, balcon o terraza
          </h2>
          <div className="mx-5 my-5 md:mx-10 lg:mx-20">
            <h1 className="text-3xl font-secundario text-color1">
              <span className="mb-20 text-4xl font-bold border-b-2 font-principal text-color6 border-color6">
                Paso 1:{" "}
              </span>{" "}
              Vamos a necesitar nuestros{" "}
              <span>
                <NavLink
                  className="border-b-2 text-color6 border-color6"
                  to="/materiales"
                >
                  materiales :
                </NavLink>
              </span>
            </h1>
          </div>
          <div className="mx-5 my-5 md:mx-10 lg:mx-20">
            <h1 className="text-3xl font-secundario text-color1">
              <span className="mb-10 text-4xl font-bold border-b-2 font-principal text-color3 border-color3">
                Paso 2:{" "}
              </span>
              Almácigos :
            </h1>
            <ul className="mx-5 text-2xl md:mx-10 lg:mx-20 font-secundario text-color1">
              <li>
                - Los almácigos son el dispositivo transitorio donde estará la
                planta hasta su trasplante definitivo. Algunas semillas pueden
                sembrarse directamente en el lugar definitivo, como el maíz y el
                zapallo, o las raíces y tubérculos como la zanahoria, rabanito o
                remolacha.
              </li>
              <li>
                - Los almácigos se pueden armar reutilizando vasitos de yogur,
                envases de cartón, o macetas pequeñas. Deben estar agujereados
                en la base para permitir el drenaje. Se cubren con tierra,
                dejando 1 cm. en el borde, y luego se depositan las semillas. La
                profundidad de siembra debe ser una vez y medio el tamaño de la
                semilla. Finalmente, se procede a regar.
              </li>
            </ul>
          </div>
          <div className="mx-5 my-5 md:mx-10 lg:mx-20 ">
            <h1 className="text-3xl font-secundario text-color1">
              <span className="mb-10 text-4xl font-bold border-b-2 font-principal text-color5 border-color5">
                Paso 3:{" "}
              </span>
              Trasplante :
            </h1>
            <ul className="mx-5 text-2xl md:mx-10 lg:mx-20 font-secundario text-color1">
              <li>
                - Se recomienda trasplantar al lugar definitivo, ya sea una
                maceta o cantero, cuando los plantines tengan entre 3 y 4 hojas.
              </li>
              <li>
                - En el caso de los frutos como el tomate, morrón o berenjena,
                cuando tengan una altura de 15 a 20 cm., y el tallo, el grosor
                de un lápiz.
              </li>
              <li>
                - Para trasplantar, se procede a regar y agregar mantillo, que
                es la cobertura que protege al suelo de la erosión, que además
                retiene la humedad. Puede ser de pasto seco, virutas de madera
                no tratadas, entre otros.
              </li>
            </ul>
          </div>
          <div className="mx-5 my-5 md:mx-10 lg:mx-20">
            <h1 className="text-3xl font-secundario text-color1">
              <span className="mb-10 text-4xl font-bold border-b-2 font-principal text-color4 border-color4">
                Paso 4:{" "}
              </span>{" "}
              Agregar diversidad :
            </h1>
            <ul className="pb-20 mx-5 text-2xl md:mx-10 lg:mx-20 font-secundario text-color1">
              <li>
                - Es recomendable incorporar una variedad de plantas aromáticas
                para controlar plagas y enfermedades.
              </li>
              <li>
                - Algunos ejemplos de ellas son orégano, tomillo, salvia,
                ciboulette, lavanda.
              </li>
              <li>
                - Para trasplantar, se procede a regar y agregar mantillo, que
                es la cobertura que protege al suelo de la erosión, que además
                retiene la humedad. Puede ser de pasto seco, virutas de madera
                no tratadas, entre otros.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invierno;
