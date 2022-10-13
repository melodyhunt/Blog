import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

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
          <NavLink to="/cursos">Todos los cursos</NavLink>
        </li>
        <li className="px-3 py-1 rounded-sm hover:bg-color3">DevOps</li>

        <li className="px-3 py-1 rounded-sm hover:bg-color3">Testing</li>
      </ul>
    </div>
  );
}
