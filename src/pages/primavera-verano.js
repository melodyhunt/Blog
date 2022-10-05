import Navegacion from "../components/navbar";
import Zapato from "../assets/huerta16.png";
import Planta from "../assets/huerta23.png";
import Flor from "../assets/huerta20.png";
import { NavLink } from "react-router-dom";
import FrutasVerduras from "../components/frutas-verduras";
import VerdurasFrutas from "../components/Verduras-Frutas";

const Verano = () => {
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
          Primavera-Verano
        </h1>
        <p className="px-10 pb-20 text-3xl md:px-20 font-secundario text-color1">
          La disponibilidad de luz solar es alta, lo cual beneficia el inicio
          del crecimiento de las plantas de la huerta que nos brindan hojas,
          frutos y tallos comestibles.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-color1 font-principal">
          <FrutasVerduras
            id="10"
            imagen={Zapato}
            nombre="Tomate"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="80-100"
            for="10"
          />
          <FrutasVerduras
            id="11"
            imagen={Planta}
            nombre="Morrón"
            siembra="Almacigo: Jul-Ago o Transplante: Oct"
            fecha="80-100"
            for="11"
          />
          <VerdurasFrutas
            id="12"
            imagen={Flor}
            nombre="Papa"
            siembra="Almacigo: Ago o Transplante: Oct"
            fecha="140-150"
            for="12"
          />
          <VerdurasFrutas
            id="13"
            imagen={Zapato}
            nombre="Zapallito"
            siembra="Directa a golpes: Oct-Ene"
            fecha="45-60"
            for="13"
          />
          <FrutasVerduras
            id="14"
            imagen={Planta}
            nombre="Calabaza"
            siembra="Directo a golpes: Oct-Nov"
            fecha="120-150"
            for="14"
          />
          <FrutasVerduras
            id="15"
            imagen={Flor}
            nombre="Berenjena"
            siembra="Almacigo: Ago-Sep o Transplante: Oct-Nov"
            fecha="90-120"
            for="15"
          />
          <VerdurasFrutas
            id="16"
            imagen={Zapato}
            nombre="Acelga"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="80-100"
            for="16"
          />
          <VerdurasFrutas
            id="17"
            imagen={Planta}
            nombre="Lechuga"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="30-60"
            for="17"
          />
          <FrutasVerduras
            id="18"
            imagen={Flor}
            nombre="Albahaca"
            siembra="Almacigo: Ago-Sep o Transplante: Oct-Nov"
            fecha="90-100"
            for="18"
          />
          <FrutasVerduras
            id="19"
            imagen={Zapato}
            nombre="Poroto"
            siembra="Directa a golpes: Oct-Ene"
            fecha="70"
            for="19"
          />
          <VerdurasFrutas
            id="20"
            imagen={Planta}
            nombre="Rabanito"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="30-60"
            for="20"
          />
          <VerdurasFrutas
            id="21"
            imagen={Flor}
            nombre="Maiz"
            siembra="Directa a golpes: Oct-Dic"
            fecha="100-130"
            for="21"
          />
          <FrutasVerduras
            id="22"
            imagen={Zapato}
            nombre="Puerro"
            siembra="Almacigo: Ago-Sep o Transplante: Sep-Oct"
            fecha="120"
            for="22"
          />
          <FrutasVerduras
            id="23"
            imagen={Planta}
            nombre="Pepino"
            siembra="Directa a golpes: Oct"
            fecha="50-70"
            for="23"
          />
          <VerdurasFrutas
            id="24"
            imagen={Flor}
            nombre="Melon"
            siembra="Directa a golpes: Oct"
            fecha="100"
            for="24"
          />
        </div>
        {/* <div> */}
        {/* <h2 className="py-20 text-5xl font-bold text-center font-principal text-color5">
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
  </div> */}
      </div>
    </div>
  );
};

export default Verano;
