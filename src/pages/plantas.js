import Navegacion from "../components/navbar";
import Violeta from "../assets/flor.jpg";
import Petunia from "../assets/petunia.png";
import Euphoria from "../assets/euphoria.jpg";
import Margarita from "../assets/marga.jpg";
import Lobularia from "../assets/lobularia.jpg";
import { HiArrowLeft } from "react-icons/hi";
import Footer from "../components/footer";

import { NavLink } from "react-router-dom";

const plantas = () => {
  return (
    <div>
      <Navegacion />
      <div className="p-12 text-justify bg-[url('./assets/verde.png')] bg-no-repeat bg-cover">
        <NavLink
          className="flex flex-row px-3 text-3xl md:text-5xl font-secundario text-color1 hover:text-color5"
          to="/"
        >
          <HiArrowLeft className="my-1" />
        </NavLink>

        <h1 className="py-12 text-4xl font-bold text-center font-principal md:text-6xl lg:text-7xl text-color5">
          5 plantas para decorar tu balcón
        </h1>
        <p className="text-2xl text-black font-principal">
          Tras la pandemia, hemos visto la importancia de aprovechar cada
          espacio de nuestra casa y sobre todo cualquiera en el que se pueda
          disfrutar del exterior. Cada vez más gente se ha animado a arreglar su
          balcón para usarlo como una estancia más de su hogar y por ello ha
          vuelto la tendencia de los balcones floridos. Las ciudades se llenan
          de colorido y en los vecindarios comienza a existir un entorno
          paisajístico natural muy primaveral.
        </p>
        <h1 className="text-2xl font-bold md:text-3xl font-secundario text-color2 m-9">
          ¿Qué flores plantar en el balcón?
        </h1>
        <p className="text-2xl text-black font-principal">
          Antes de empezar deberás tener en cuenta una serie de factores para
          elegir la plantación para tu balcón, como: el clima, la exposición
          solar, la orientación al sol, el viento, el peso que puede soportar,
          tamaño, etc. Hemos hecho una selección de cinco plantas resistentes,
          floríferas y colgantes; perfectas para situar en nuestros balcones:
        </p>
        <div>
          <section className="text-center ">
            <h2 className="mt-12 mb-4 text-3xl text-color3 border-color4 border-y-2">
              Geranium ‘Rozanne’
            </h2>
            <img
              src={Violeta}
              alt="Geranium ‘Rozanne’"
              className="float-none my-2 rounded-lg shadow-lg lg:shadow-2xl md:mx-4 md:float-right w-80 lg:w-96"
            />
            <p className="py-4 text-2xl text-left text-black 2xl:mt-24 lg:mt-12 lg:py-9 font-principal">
              Esta variedad perenne, suele confundirse con el geranio común por
              ser de la misma familia. Es una planta típica de climas templados,
              es herbácea y crece en forma de matas tupidas. Sus hojas son
              verdes y palmeadas y sus flores lucen un color violeta con el
              centro de color blanco. Es una planta muy resistente y con gran
              adaptabilidad al terreno y además es perfecta para cultivar en
              macetas.
            </p>
          </section>
          <section className="text-center ">
            <h2 className="mt-12 mb-4 text-3xl text-color3 border-color4 border-y-2">
              Euphorbia myrsinites
            </h2>
            <img
              src={Euphoria}
              alt="Euphorbia myrsinites"
              className="float-none my-2 rounded-lg shadow-lg lg:shadow-2xl md:mx-4 md:float-left w-80 lg:w-96 "
            />
            <p className="py-4 text-2xl text-left text-black 2xl:mt-24 lg:mt-12 lg:py-9 font-principal">
              Pertenece a la familia de las euforbiáceas. Es una planta muy
              resistente al sol que necesita muy poco riego. Tienen una base
              leñosa de la que surgen ramas muy ornamentales. Sus hojas ovales y
              suculentas se disponen en forma espiral y terminan con flores
              amarillas muy vistosas. También puede plantarse en macetas, pero
              hay que tener precaución porque contiene látex que puede causar
              muy irritabilidad cuando toca piel y ojos.
            </p>
          </section>
          <section className="text-center ">
            <h2 className="mt-12 mb-4 text-3xl text-color3 border-color4 border-y-2">
              Erigeron karvinskianus
            </h2>
            <img
              src={Margarita}
              alt="Erigeron karvinskianus"
              className="float-none my-2 rounded-lg shadow-lg lg:shadow-2xl md:mx-4 md:float-right w-80 lg:w-96"
            />
            <p className="py-4 text-2xl text-left text-black 2xl:mt-24 lg:mt-12 lg:py-9 font-principal">
              Esta planta, originaria de México, es muy versátil. Sus flores son
              un tipo de margaritas, que tienen una larga duración. En cuanto a
              las hojas, son pequeñas y perennes de color verde claro. Es una
              planta que puede aguantar tanto a pleno sol como en semisombra.
              Crece rápido, pero necesita un riego regular. Al igual que las
              especies anteriormente descritas, el Erigeron dependiendo de su
              disposición, puede colgar y crear masas floridas.
            </p>
          </section>
          <section className="text-center ">
            <h2 className="mt-12 mb-4 text-3xl text-color3 border-color4 border-y-2">
              Lobularia marítima
            </h2>
            <img
              src={Lobularia}
              alt="Lobularia marítima"
              className="float-none my-2 rounded-lg shadow-lg lg:shadow-2xl md:mx-4 md:float-left w-80 lg:w-96"
            />
            <p className="py-4 text-2xl text-left text-black 2xl:mt-24 lg:mt-12 lg:py-9 font-principal">
              También llamada, aliso marítimo, es una planta con origen
              mediterráneo. También se forma en matas y tiene una floración muy
              abundante y vistosa. Perfecta para plantar cuando empieza la
              primavera en macetas y tiestos. Es también, muy resistente a las
              inclemencias del tiempo, por lo que no será necesario mucho tiempo
              para su manutención. Sus pequeñas flores blancas, en ocasiones
              malvas y rosadas, se concentran en pequeños racimos y desprenden
              un olor a miel muy placentero
            </p>
          </section>
          <section className="text-center ">
            <h2 className="mt-12 mb-4 text-3xl text-color3 border-color4 border-y-2">
              Petunia ‘Surfinia’
            </h2>
            <img
              src={Petunia}
              alt="Petunia ‘Surfinia’"
              className="float-none my-2 rounded-lg shadow-lg lg:shadow-2xl md:mx-4 md:float-right w-80 lg:w-96"
            />
            <p className="py-4 text-2xl text-left text-black 2xl:mt-24 lg:mt-12 lg:py-9 font-principal">
              Estas flores, muy características durante la primavera, son un
              híbrido de las petunias. Tiene varias opciones de plantación, en
              macetas y cestos, según cómo las plantemos aportaremos un toque
              diferente y muy especial al balcón. Pero lo mejor es situarlas en
              lugar dónde pueda lucirse su caída, ya que cuelgan formando
              cascadas de color. Podemos combinar en la plantación diferentes
              variedades, combinando colores de la misma gama y tamaños
              diferentes o introducir juegos de colores.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default plantas;
