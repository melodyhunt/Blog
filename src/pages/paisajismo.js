import Navegacion from "../components/navbar";
import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Interiores from "../assets/interiores.jpg";
import Footer from "../components/footer";

const Paisajismo = () => {
  return (
    <div className="text-justify ">
      <Navegacion />
      <div className=" lg:px-24 px-6 pt-2 md:pt-12 bg-[url('./assets/brown.png')] bg-no-repeat bg-cover ">
        <NavLink
          className="flex flex-row text-3xl md:px-3 md:text-5xl font-secundario text-color1 hover:text-color5"
          to="/"
        >
          <HiArrowLeft className="my-1" />
        </NavLink>

        <h1 className="pt-4 pb-12 text-4xl font-bold text-center font-principal md:text-5xl lg:text-7xl text-color5">
          Las cuatro claves del paisajismo moderno
        </h1>
        <p className="text-2xl font-bold text-black font-principal">
          El paisajismo es una disciplina que engloba la planificación, gestión,
          conservación y rehabilitación de un espacio o paisaje, que va más allá
          de ser un recurso estético, y que se ha convertido en una herramienta
          esencial para la conservación del medio ambiente. Y es que desde el
          principio de los tiempos, el ser humano ha modificado el paisaje que
          lo rodeaba, convirtiéndose el jardín en la máxima expresión de esta
          disciplina.
        </p>
        <img
          src={Interiores}
          alt="interiores"
          className="float-none my-2 lg:mx-6 lg:float-right"
        />
        <p className="text-2xl font-semibold text-black font-principal">
          El primer acercamiento a los jardines llegó de la mano de los
          mesopotámicos, que crearon espacios verdes resguardados entre muros,
          seguidos de los persas, con jardines como los de Babilonia, que se
          caracterizaban por tener forma de pirámide, lo que se conoce como
          ‘Zigurat’. Durante la época del Imperio Romano, se adoptaron pequeños
          huertos cerrados que se ubicaban en el interior del patio, mientras
          que en la Edad Media, los jardines se reservaron exclusivamente para
          la iglesia y los monasterios. No fue hasta la llegada del renacimiento
          cuando los jardines vivieron su época dorada, con el jardín francés y
          el jardín inglés entre los más destacados.
        </p>
        <p className="text-2xl font-semibold text-black font-principal">
          En la actualidad, y tras miles de años de evolución, los espacios
          verdes han llegado a la sociedad, integrándose nuestro día a día y
          adaptándose a los tiempos actuales. Esto ha hecho que la figura del
          paisajista haya cobrado mayor relevancia y haya exigido de mayor
          preparación, que va más allá del conocimiento del terreno o la
          vegetación. Estas son algunas de las claves que definen el paisajismo
          moderno:
        </p>
        <div className="flex flex-col pb-16 mt-16">
          <div className="post ">
            <input type="checkbox" className="estatico" id="post-1" />
            <section className="leer-mas">
              <div>
                <h1 className="text-xl font-bold uppercase font-principal text-color3">
                  Planificación mediante drones o realidad virtual:
                </h1>
                <p className="text-base text-black font-secundario">
                  Hoy en día los paisajistas cuentan con varias herramientas
                  tecnológicas que permiten perfeccionar el diseño de un jardín
                  o espacio verde, que comienzan desde los programas básicos
                  para el diseño del proyecto, hasta tecnologías de realidad
                  virtual o 3D,para alcanzar una mayor fidelidad al proyectar el
                  jardín.
                </p>
              </div>
              <p className="text-base text-black objetivo font-secundario">
                {" "}
                Pero existen otras tecnologías, como los drones, que se utilizan
                para tener una mejor vista de cara a la planificación de estos
                proyectos y poder ejecutarlos con una mayor perspectiva y
                precisión. Estos elementos también se utilizan en la
                agricultura, ya que permite realizar un preciso control y
                análisis de los cultivos o incluso medir el estrés hídrico de
                las plantas. Además, su uso se ha extendido a la hora de
                realizar fumigaciones, ya que permiten sobrevolar grandes
                extensiones de tierra y llegar a zonas de difícil acceso.
              </p>
            </section>
            <label for="post-1" className="disparador"></label>
          </div>

          <div className="post ">
            <input type="checkbox" className="estatico" id="post-3" />
            <section className="leer-mas">
              <div>
                <h1 className="text-xl font-bold uppercase font-principal text-color3">
                  Uso de materiales y energías sostenibles:
                </h1>
                <p className="text-base text-black font-secundario">
                  Aunque durante la primera mitad del 2020 se redujeron las
                  emisiones de CO2 un 8,8% que en el mismo periodo que 2019
                  según un estudio de la Universidad de Tsinghua en Pekín, la
                  contaminación sigue siendo uno de los grandes problemas de
                  nuestra sociedad. Existe una gran corriente en el paisajismo
                  que aboga por la inclusión de materiales sostenibles y
                  reciclados.
                </p>
              </div>
              <p className="text-base text-black objetivo font-secundario">
                {" "}
                Actualmente es posible encontrar una amplia variedad de
                productos que nos permiten sustituir aquellos más dañinos, como
                pueden ser el Geosilex, que sustituye al hormigón o la Resysta,
                que sustituye a la madera. Además, se está apostando por el uso
                de energías renovables con la instalación de paneles solares,
                materiales sostenibles o sistemas de riego inteligente que
                incluyen materiales de acero inoxidable o temporizadores
                mecánicos e iluminación led.
              </p>
            </section>
            <label for="post-2" className="disparador "></label>
          </div>
          <div className="post ">
            <input type="checkbox" className="estatico" id="post-3" />
            <section className="leer-mas">
              <div>
                <h1 className="text-xl font-bold uppercase font-principal text-color3">
                  Reforestación consciente:
                </h1>
                <p className="text-base text-black font-secundario">
                  Al grave problema de la contaminación ambiental, se suma el
                  rápido avance de la deforestación en todo el mundo, perdiendo
                  así la gran capacidad que tienen los árboles de reducir los
                  niveles de CO2 y transformarlo en oxígeno. En este sentido, un
                  paisajista debe utilizar sus conocimientos para llevar a cabo
                  una reforestación consciente, que apueste por la inclusión de
                  especies autóctonas o evitar variedades de rápido crecimiento
                  puede agotar los alimentos y nutrientes y reducir la
                  fertilidad del lugar.
                </p>
              </div>
              <p className="text-base text-black objetivo font-secundario">
                Apostar por la reforestación tiene un gran impacto positivo en
                el paisaje, ya que se protege al suelo de la erosión y se
                aumenta su fertilidad, sirve a modo de barrera natural contra el
                viento para proteger los cultivos o reduce el flujo rápido de
                las lluvias, lo que puede servir para frenar el impacto de los
                desastres naturales.
              </p>
            </section>
            <label for="post-3" className="disparador "></label>
          </div>
          <div className="post ">
            <input type="checkbox" className="estatico" id="post-4" />
            <section className="leer-mas">
              <div>
                <h1 className="text-xl font-bold uppercase font-principal text-color3">
                  Automatización y control inteligente:
                </h1>
                <p className="text-base text-black font-secundario">
                  La tecnología también ha influido en el mantenimiento de estos
                  espacios verdes, no solo en su planificación. La tendencia de
                  los hogares y empresas conectadas está en alza y cada vez son
                  más los espacios que funcionan de forma automatizada. Esto ha
                  llegado también al paisajismo, teniendo la posibilidad de
                  controlar los elementos del espacio verde para conseguir un
                  cuidado más eficiente, programando el riego, controlando la
                  eficiencia energética, modificando el ángulo de inclinación
                  del sistema de sombreado o incluso programando el corte del
                  césped utilizando robots.
                </p>
              </div>
              <p className="text-base text-black objetivo font-secundario">
                En el caso de tener una piscina, se puede optar por sistemas de
                mantenimiento y de control de la calidad del agua controlado por
                un smartphone o la programación del limpiado de piscinas.
              </p>
            </section>
            <label for="post-4" className="disparador "></label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Paisajismo;
