import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import Modale from "./modal";

export default function DropdownComponent() {
  return (
    <div className="inline-block group">
      <button className="flex items-center pt-2 text-white outline-none focus:outline-none min-w-32">
        <span className="flex-1 pr-1 font-secundario">Cursos</span>
        <span>
          <AiOutlineDown className="w-6 h-6 transition duration-300 ease-in-out transform fill-current group-hover:-rotate-180" />
        </span>
      </button>
      <ul className="absolute text-2xl text-white transition duration-300 ease-in-out origin-top transform scale-0 rounded-md font-principal bg-color2 group-hover:scale-100 min-w-32">
        <li className="px-3 py-1 rounded-sm hover:bg-color3">
          <Modale
            boton="Diseño de jardines"
            nombre="Curso Básico de Diseño de Jardines"
            descripcion="Un jardín es el espacio verde que ayuda a mejorar las condiciones de vida de las personas, aporta al medio ambiente y es el pulmón verde de la ciudad.  En espacios grandes o pequeños podemos crear jardines para vivienda, oficinas, y más.En este curso aprenderás paso a paso a realizar un proyecto de diseño de un jardín como un profesional."
            imagen="jardin1.jpg"
            metodo="Semipresencial"
            precio="$2980"
            duracion="2 meses"
          />
        </li>

        <li className="px-3 py-1 rounded-sm hover:bg-color3">
          <Modale
            boton="Huerto Organico"
            nombre="Huerto Orgánico en casa"
            descripcion="En este curso aprenderás desde cómo montar tu huerto en casa, qué contenedores debes de utilizar, a germinar, trasplantar, a conocer las necesidades de tus cultivos y cómo atacar plagas y enfermedades que puedan afectarlos."
            imagen="organica.jpg"
            metodo="Virtual"
            precio="$1750"
            duracion="6hs de videos"
          />
        </li>
        <li className="px-3 py-1 rounded-sm hover:bg-color3">
          <Modale
            boton="Tecnicas diseño"
            nombre="Las 20 Tácticas para el Diseño de Jardines"
            descripcion="Aprende y domina las técnicas más poderosas para componer los espacio verdes, a través de 20 estrategias que cambiarán tu forma de comprender y encarar cualquier proyecto, sin importar su complejidad ni dimensiones. Diseña en forma más ágil, con confianza y deja de estresarte por el plano en blanco."
            imagen="jardin3.jpg"
            metodo="Presencial - 1 vez por semana "
            precio="$10550"
            duracion="6 meses"
          />
        </li>
        <li className="px-3 py-1 rounded-sm hover:bg-color3">
          <Modale
            boton="Redes sociales"
            nombre="Redes Sociales para Paisajistas"
            descripcion="¿Te gustaría diferenciarte de la competencia? En las redes sociales está la oportunidad de oro. ¿Cómo? Aprendiendo el idioma que se habla en ellas y dominarlo como nadie en tu campo."
            imagen="jardin4.png"
            metodo="Virtual - 1 vez por semana "
            precio="$8850"
            duracion="3 meses"
          />
        </li>
        <li className="px-3 py-1 rounded-sm hover:bg-color3">
          <Modale
            boton="digitaliza tus ideas"
            nombre="Digitaliza tus ideas"
            descripcion="Adquirir los conocimientos básicos necesarios para el cuidado, cultivo, sanidad y propagación de cactus y suculentas"
            imagen="jardin6.jpg"
            metodo="Virtual "
            precio="$2950"
            duracion="40 hs"
          />
        </li>
        <li className="px-3 py-4 rounded-sm hover:bg-color3">
          <NavLink to="/cursos" className="text-2xl font-bold text-white ">
            Todos los cursos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
