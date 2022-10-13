import Navegacion from "../components/navbar";
import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import VerdurasFrutas from "../components/Verduras-Frutas";
import Footer from "../components/footer";

const Huerta = () => {
  return (
    <div className="text-justify">
      <Navegacion />
      <div className="bg-[url('./assets/verduras.png')] bg-repeat  ">
        <NavLink
          className="flex flex-row px-3 text-5xl font-secundario text-color1 hover:text-color5"
          to="/"
        >
          <HiArrowLeft className="my-1" />
        </NavLink>
        <div className="px-24 pb-24 text-2xl text-black font-secundario">
          <h1 className="pb-12 font-bold text-center font-principal text-7xl text-color5">
            Que podemos plantar en Primavera-Verano
          </h1>
          <strong className="text-2xl text-black ">
            A poco del inicio de la temporada cálida en Argentina, tenes que
            conocer detalle a detalles los cultivos de las estaciones que se
            vienen. En esta nota te presentamos el calendario para que sepas que
            sembrar.
          </strong>
          <p>
            El año avanza y la temporada más cálida se asoma, es el momento de
            desempolvar las herramientas para la huerta y comenzar a planificar
            lo que vamos a sembrar para la primavera y el verano, instancias del
            año donde las temperaturas aumentan, la humedad y las lluvias son
            algo más frecuentes.
          </p>
          <p>
            Cómo todo horticultor, si eres aficionado a la huerta, tienes que
            saber que cada estación tiene su variedad de cultivo, dependiendo
            del ambiente, tendrás que planificar lo que vas a sembrar o plantar,
            de esta manera tendrás el éxitos esperado, y los alimentos no te van
            a faltar.
          </p>
          <p>
            Lo primero que tendrás que tener en cuenta, es el tipo de terreno,
            ya sea el estado del suelo y el espacio, ya que cada hortaliza tiene
            que ocupar un espacio ideal, saber donde realizar la siembra para
            respetar ese espacio, la profundidad y la planta pueda crecer sin
            problema.
          </p>
          <p className="mb-10">
            Después de haberte asegurado de contar con un espacio optimo para la
            siembra, tendrás que tener una mínima idea de los cultivos para cada
            estación, en este caso, los cultivos que vas a producir durante la
            primavera y el verano, es por esto que te vamos a detallar las
            variedades en un útil calendario.
          </p>
          <NavLink
            className="px-10 pt-4 text-3xl hover:underline font-secundario text-color1 hover:text-color5"
            to="/materiales"
          >
            Ver Materiales
          </NavLink>
        </div>
        <h1 className="px-24 mb-4 text-4xl font-semibold font-principal text-color2">
          Calendario de siembra para la primavera y el verano:
        </h1>
        <div className="grid grid-cols-2 px-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-principal">
          <VerdurasFrutas
            id="10"
            nombre="Tomate"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="80-100"
            for="10"
          />
          <VerdurasFrutas
            id="11"
            nombre="Morrón"
            siembra="Almacigo: Jul-Ago o Transplante: Oct"
            fecha="80-100"
            for="11"
          />
          <VerdurasFrutas
            id="12"
            nombre="Papa"
            siembra="Almacigo: Ago o Transplante: Oct"
            fecha="140-150"
            for="12"
          />
          <VerdurasFrutas
            id="13"
            nombre="Zapallito"
            siembra="Directa a golpes: Oct-Ene"
            fecha="45-60"
            for="13"
          />
          <VerdurasFrutas
            id="14"
            nombre="Calabaza"
            siembra="Directo a golpes: Oct-Nov"
            fecha="120-150"
            for="14"
          />
          <VerdurasFrutas
            id="15"
            nombre="Berenjena"
            siembra="Almacigo: Ago-Sep o Transplante: Oct-Nov"
            fecha="90-120"
            for="15"
          />
          <VerdurasFrutas
            id="16"
            nombre="Acelga"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="80-100"
            for="16"
          />
          <VerdurasFrutas
            id="17"
            nombre="Lechuga"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="30-60"
            for="17"
          />
          <VerdurasFrutas
            id="18"
            nombre="Albahaca"
            siembra="Almacigo: Ago-Sep o Transplante: Oct-Nov"
            fecha="90-100"
            for="18"
          />
          <VerdurasFrutas
            id="19"
            nombre="Poroto"
            siembra="Directa a golpes: Oct-Ene"
            fecha="70"
            for="19"
          />
          <VerdurasFrutas
            id="20"
            nombre="Rabanito"
            siembra="Almacigo: Sep-Oct o Transplante: Oct-Nov"
            fecha="30-60"
            for="20"
          />
          <VerdurasFrutas
            id="21"
            nombre="Maiz"
            siembra="Directa a golpes: Oct-Dic"
            fecha="100-130"
            for="21"
          />
          <VerdurasFrutas
            id="22"
            nombre="Puerro"
            siembra="Almacigo: Ago-Sep o Transplante: Sep-Oct"
            fecha="120"
            for="22"
          />
          <VerdurasFrutas
            id="23"
            nombre="Pepino"
            siembra="Directa a golpes: Oct"
            fecha="50-70"
            for="23"
          />
          <VerdurasFrutas
            id="24"
            nombre="Melon"
            siembra="Directa a golpes: Oct"
            fecha="100"
            for="24"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Huerta;
