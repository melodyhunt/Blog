import Navegacion from "../components/navbar";
import Cursito from "../components/cursos";
import Modale from "../components/modal";
import { NavLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import Footer from "../components/footer";

const Cursos = () => {
  return (
    <div className="text-justify">
      <Navegacion />
      <div className=" bg-[url('./assets/brown.png')] bg-no-repeat bg-cover ">
        <NavLink
          className="flex flex-row px-3 text-3xl md:text-5xl font-secundario text-color1 hover:text-color5"
          to="/"
        >
          <HiArrowLeft className="my-1" />
        </NavLink>
        <h1 className="pb-12 font-bold text-center font-principal text-7xl text-color5 ">
          Cursos
        </h1>
        <div className="grid grid-cols-1 gap-6 px-8 pb-16 md:grid-cols-2 lg:grid-cols-3 md:px-20 lg:px-32 ">
          <div className="p-6 rounded-lg hover:bg-opacity-70 bg-opacity-30 bg-color4 curso">
            <Cursito
              nombre="Curso Básico de Diseño de Jardines"
              historia="Cómo diseñar un jardín de manera profesional paso a paso"
              cupo="50"
              metodo="Semipresencial"
              precio="2980"
            />
            <Modale
              boton="Ver mas"
              nombre="Curso Básico de Diseño de Jardines"
              descripcion="Un jardín es el espacio verde que ayuda a mejorar las condiciones de vida de las personas, aporta al medio ambiente y es el pulmón verde de la ciudad.  En espacios grandes o pequeños podemos crear jardines para vivienda, oficinas, y más.En este curso aprenderás paso a paso a realizar un proyecto de diseño de un jardín como un profesional."
              imagen="jardin1.jpg"
              metodo="Semipresencial"
              precio="$2980"
              duracion="2 meses"
            />
          </div>
          <div className="p-6 rounded-lg hover:bg-opacity-70 bg-opacity-30 bg-color4 curso">
            <Cursito
              nombre="Huerto Orgánico en casa"
              historia="Aprende paso a paso como producir tus propios alimentos saludables y orgánicos desde tu casa."
              cupo="sin limite"
              metodo="Virtual"
              precio="1750"
            />
            <Modale
              boton="Ver mas"
              nombre="Huerto Orgánico en casa"
              descripcion="En este curso aprenderás desde cómo montar tu huerto en casa, qué contenedores debes de utilizar, a germinar, trasplantar, a conocer las necesidades de tus cultivos y cómo atacar plagas y enfermedades que puedan afectarlos."
              imagen="organica.jpg"
              metodo="Virtual"
              precio="$1750"
              duracion="6hs de videos"
            />
          </div>
          <div className="p-6 rounded-lg hover:bg-opacity-70 bg-opacity-30 bg-color4 curso">
            <Cursito
              nombre="Las 20 Tácticas para el Diseño de Jardines"
              historia="Aprende y domina las técnicas más poderosas para componer los espacio verdes."
              cupo="20"
              metodo="Presencial"
              precio="10550"
            />
            <Modale
              boton="Ver mas"
              nombre="Las 20 Tácticas para el Diseño de Jardines"
              descripcion="Aprende y domina las técnicas más poderosas para componer los espacio verdes, a través de 20 estrategias que cambiarán tu forma de comprender y encarar cualquier proyecto, sin importar su complejidad ni dimensiones. Diseña en forma más ágil, con confianza y deja de estresarte por el plano en blanco."
              imagen="jardin3.jpg"
              metodo="Presencial - 1 vez por semana "
              precio="$10550"
              duracion="6 meses"
            />
          </div>
          <div className="p-6 rounded-lg hover:bg-opacity-70 bg-opacity-30 bg-color4 curso">
            <Cursito
              nombre="Redes Sociales para Paisajistas"
              historia="¿Te gustaría diferenciarte de la competencia?"
              cupo="sin limite"
              metodo="Virtual"
              precio="8850"
            />
            <Modale
              boton="Ver mas"
              nombre="Redes Sociales para Paisajistas"
              descripcion="¿Te gustaría diferenciarte de la competencia? En las redes sociales está la oportunidad de oro. ¿Cómo? Aprendiendo el idioma que se habla en ellas y dominarlo como nadie en tu campo."
              imagen="jardin4.png"
              metodo="Virtual - 1 vez por semana "
              precio="$8850"
              duracion="3 meses"
            />
          </div>
          <div className="p-6 rounded-lg hover:bg-opacity-70 bg-opacity-30 bg-color4 curso">
            <Cursito
              nombre="Digitaliza tus Ideas"
              historia="Domina el diseño de jardines en PC y ofrece a tus clientes un servicio más profesional."
              cupo="30"
              metodo="Semipresencial"
              precio="9350"
            />
            <Modale
              boton="Ver mas"
              nombre="Redes Sociales para Paisajistas"
              descripcion="Domina el diseño de jardines en PC y ofrece a tus clientes un servicio más profesional. Crea tu portfolio de proyectos, vende mejor tus ideas y prepárate para afrontar con herramientas sólidas proyectos cada vez más desafiantes."
              imagen="jardin5.jpg"
              metodo="Virtual + 1 vez por semana "
              precio="$9350"
              duracion="3 meses"
            />
          </div>
          <div className="p-6 rounded-lg hover:bg-opacity-70 bg-opacity-30 bg-color4 curso">
            <Cursito
              nombre="Digitaliza tus Ideas"
              historia="Adquirir los conocimientos básicos necesarios para el cuidado, cultivo, sanidad y propagación de cactus y suculentas"
              cupo="30"
              metodo="virtual"
              precio="2950"
            />
            <Modale
              boton="Ver mas"
              nombre="Digitaliza tus ideas"
              descripcion="Adquirir los conocimientos básicos necesarios para el cuidado, cultivo, sanidad y propagación de cactus y suculentas"
              imagen="jardin6.jpg"
              metodo="Virtual "
              precio="$2950"
              duracion="40 hs"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cursos;
