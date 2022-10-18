import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/terra.png";
import DropdownComponent from "./Dropwns";

const Navegacion = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-col border-b-2 border-color2">
      <Link className="w-56 place-self-center font-principal md:w-96" to="/">
        <img src={Logo} alt="Logo" className="items-center"></img>
      </Link>
      <span>
        {!open && (
          <FaBars
            className="block w-10 h-10 mb-1 ml-4 cursor-pointer place-items-start text-color2 hover:text-color5 md:hidden"
            onClick={() => setOpen(true)}
          />
        )}
      </span>

      <div className="justify-center hidden text-4xl bg-color2 md:flex md:flex-row font-secundario">
        <DropdownComponent />

        <NavLink to="/contacto">
          <h3 className="my-3 text-white mx-9 hover:text-color3">Contacto</h3>
        </NavLink>
      </div>
      {open && (
        <div className="flex flex-row md:hidden ">
          <div>
            <span onClick={() => setOpen(false)}>
              <FaTimes className="w-10 h-10 ml-4 cursor-pointer text-color2 hover:text-color5" />
            </span>
          </div>
          <div className="block px-16 pt-4 mb-2 ml-1 text-2xl text-center text-white rounded-tr-full rounded-bl-full arriba bg-color2 font-secundario">
            <NavLink exact="true" activeclassname="active" to="/cursos">
              <p className="text-white hover:text-color6">Cursos</p>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/contacto">
              <p className="pt-3 text-white pb-7 hover:text-color6">Contacto</p>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navegacion;
