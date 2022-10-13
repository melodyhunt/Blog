import Navegacion from "../components/navbar";
import Arb1 from "../assets/arb1.jpg";
import Arb2 from "../assets/arb2.jpeg";
import Arb3 from "../assets/arb3.jpg";
import Arb4 from "../assets/arb4.jpg";
import Footer from "../components/footer";

import { HiArrowLeft } from "react-icons/hi";

import { NavLink } from "react-router-dom";

const Arbusto = () => {
  return (
    <div>
      <Navegacion />
      <div className="p-12 font-bold bg-[url('./assets/marron.png')] bg-no-repeat bg-cover">
        <NavLink
          className="flex flex-row px-3 text-5xl font-secundario text-color1 hover:text-color5"
          to="/"
        >
          <HiArrowLeft className="my-1" />
        </NavLink>

        <h1 className="py-12 font-bold text-center font-principal text-7xl text-color5">
          Los arbustos en el jardín
        </h1>
        <p className="text-2xl text-black font-principal">
          Hasta ahora sólo habíamos hablado de árboles, pero hoy hablaremos de
          uno de los elementos más prácticos para tu jardín, los arbustos. En
          Terra Santa consideramos los arbustos elementos principales para un
          jardín por la gran versatilidad que tienen. Los arbustos son plantas
          leñosas, pero a diferencia de los árboles, alcanzan una altura
          inferior a los 6 metros. Se ramifican desde la base y a veces se
          pueden llegar a confundir con matas.
        </p>
        <h1 className="text-3xl font-bold font-secundario text-color2 m-9">
          ¿Qué aportan los arbustos?
        </h1>
        <p className="text-2xl text-black font-principal">
          Los arbustos nos ayudan a completar espacios, a través de
          composiciones podemos aportar volumen y textura a nuestro jardín,
          enriqueciendo las composiciones. También suelen utilizarse para
          delimitar zonas del jardín separando espacios, o para aportar
          privacidad e intimidad en los márgenes del jardín. Pero no nos podemos
          olvidar de su gran capacidad decorativa, en el mercado podemos
          encontrar mucha variedad de formas, colores y texturas, con las que
          podremos dar mucha personalidad a nuestro jardín.
        </p>
        <h1 className="text-3xl font-bold font-secundario text-color2 m-9">
          Tipos de arbustos
        </h1>
        <p className="text-2xl text-black font-principal">
          Para elegir qué arbusto queremos, tendremos en cuenta los usos
          comentados anteriormente y sus características. Además de esto, como
          siempre que introduces una nueva especie en tu jardín, tendrás que
          contar con el clima, la orientación y el tipo de suelo.
        </p>
        <div>
          <section className="text-center ">
            <h2 className="mt-12 text-3xl text-color3 border-color4 border-y-4">
              Arbustos con flores
            </h2>
            <img
              src={Arb1}
              alt="Arbustos con flores"
              className="float-right mx-4 mt-8 rounded-lg shadow-2xl w-72 "
            />
            <p className="mt-24 text-2xl text-left text-black py-9 font-principal">
              Con este tipo de arbustos daremos color a cualquier espacio y
              podremos elegir entre una gran variedad de estilos y gamas. Además
              de colorido, también aportarán aroma y en ocasiones generarán
              frutos decorativos y/o comestibles.
            </p>
          </section>
          <section className="text-center ">
            <h2 className="mt-24 mb-4 text-3xl text-color3 border-color4 border-y-4">
              Arbustos ornamentales
            </h2>
            <img
              src={Arb2}
              alt="Arbustos ornamentales"
              className="float-left mx-4 rounded-lg shadow-2xl w-72 "
            />
            <p className="mt-12 text-2xl text-left text-black py-9 font-principal">
              Si aprecias más la forma que el color te aconsejamos los arbustos
              ornamentales como el boj. Podrás ser creativo y jugar con las
              formas y los tamaños para aportar características estéticas
              únicas. El único inconveniente es el cuidado constante que
              requiere para que se mantenga en un buen estado.
            </p>
          </section>
          <section className="text-center ">
            <h2 className="mt-24 mb-4 text-3xl text-color3 border-color4 border-y-4">
              Arbustos de hoja perenne
            </h2>
            <img
              src={Arb3}
              alt="Arbustos de hoja perenne"
              className="float-right mx-4 mt-4 rounded-lg shadow-2xl w-96 "
            />
            <p className="mt-12 text-2xl text-left text-black py-9 font-principal">
              Son ideales si queremos que luzcan verdes durante todo el año, ya
              que las hojas caerán en otoño e invierno, pero seguirán creciendo
              hojas nuevas durante todo el año. Además, aguantan bien las bajas
              temperaturas por lo que requieren menos cuidados. El acebo es un
              arbusto que aguanta bien y sus colores intensos darán vida al
              jardín.
            </p>
          </section>
          <section className="text-center ">
            <h2 className="mt-24 mb-4 text-3xl text-color3 border-color4 border-y-4">
              Arbustos para macetas
            </h2>
            <img
              src={Arb4}
              alt="Arbustos para macetas"
              className="float-left mx-4 rounded-lg shadow-2xl w-96 "
            />
            <p className="mt-12 text-2xl text-left text-black py-9 font-principal">
              En caso de querer arbustos y no tener un jardín grande donde
              plantarlos, podrás ponerlos en tu terraza o patio metidos en
              macetas. Normalmente los arbustos toleran bien las podas, por lo
              que se puede tener en maceta sin problema. Habrá que cuidar bien
              la tierra, por lo que es esencial el abonado y el riego con
              frecuencia. En Terra Santa los arbustos suponen una herramienta
              con la que trabajamos a diario, consúltanos las dudas que te
              surjan, nuestro equipo estará encantado de ayudarte.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Arbusto;
