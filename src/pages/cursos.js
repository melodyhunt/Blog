import Navegacion from "../components/navbar";
import Cursito from "../components/cursos";
import Modale from "../components/modal";

const Cursos = () => {
  return (
    <div>
      <Navegacion />
      <h1>Cursos</h1>
      <div>
        <Cursito
          nombre="Las 20 Tácticas para el Diseño de Jardines"
          historia="Aprende y domina las técnicas más poderosas para componer los espacio verdes."
          cupo="20"
          metodo="Virtual"
          precio="23980"
        />
        <Modale
          nombre="Las 20 Tacticas para el Diseño de Jardines"
          descripcion="Aprende y domina las técnicas más poderosas para componer los espacio verdes, a través de 20 estrategias que cambiarán tu forma de comprender y encarar cualquier proyecto, sin importar su complejidad ni dimensiones. Diseña en forma más ágil, con confianza y deja de estresarte por el plano en blanco."
          imagen="arb1"
          metodo="Virtual"
          precio="$23900"
          duracion="9 meses"
        />
      </div>
    </div>
  );
};
export default Cursos;
