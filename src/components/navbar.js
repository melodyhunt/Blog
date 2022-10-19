import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/terra.png";
import DropdownComponent from "./Dropwns";

const Navegacion = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-col border-b-2 border-color2">
      <Link
        className="w-56 place-self-center font-principal md:w-80 2xl:w-96"
        to="/"
      >
        <img src={Logo} alt="Logo" className="items-center"></img>
      </Link>
      <span className="bg-color2">
        {!open && (
          <FaBars
            className="block w-8 h-8 m-1 ml-4 text-white cursor-pointer place-items-start hover:text-color5 md:hidden"
            onClick={() => setOpen(true)}
          />
        )}
      </span>

      <div className="justify-center hidden text-3xl bg-color2 md:flex md:flex-row font-secundario">
        <DropdownComponent className="pt-2" />

        <NavLink to="/contacto">
          <h3 className="my-3 text-white mx-9 hover:text-color3">Contacto</h3>
        </NavLink>
      </div>
      {open && (
        <div className="flex flex-row md:hidden bg-color2 ">
          <div>
            <span onClick={() => setOpen(false)}>
              <FaTimes className="w-8 h-8 mt-1 ml-4 text-white cursor-pointer hover:text-color5" />
            </span>
          </div>
          <div className="block px-16 pt-4 mb-2 ml-1 text-2xl text-center text-white arrib font-secundario">
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
