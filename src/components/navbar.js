import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/terra.png";

const Navegacion = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-col">
      <Link className=" place-self-center font-principal w-96" to="/">
        <img src={Logo} alt="Logo" className="items-center"></img>
      </Link>
      <span>
        {!open && (
          <FaBars
            className="items-center block w-10 h-10 mt-12 cursor-pointer text-color2 hover:text-color5 mr-9 md:hidden"
            onClick={() => setOpen(true)}
          />
        )}
      </span>

      <div className="justify-center text-4xl hiddenn bg-color2 md:flex md:flex-row font-secundario">
        <NavLink to="/materiales">
          <h3 className="my-3 text-white mx-9 hover:text-color3">Materiales</h3>
        </NavLink>
        <NavLink to="/plantas">
          <h3 className="my-3 text-white mx-9 hover:text-color3">
            Que Plantar
          </h3>
        </NavLink>
        <NavLink to="/siembra">
          <h3 className="my-3 text-white mx-9 hover:text-color3">Siembra</h3>
        </NavLink>
      </div>
      {open && (
        <div className="flex flex-row">
          <div className="block mt-32 mr-10 text-2xl text-white px-7 font-secundario">
            <NavLink exact="true" activeclassname="active" to="/materiales">
              <p className="text-white hover:text-color6">Materiales</p>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/plantas">
              <p className="pt-3 text-color2 pb-7 hover:text-color6">
                Que Plantar
              </p>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/siembra">
              <p className="pt-3 text-color2 pb-7 hover:text-color6">Siembra</p>
            </NavLink>
          </div>
          <div>
            <span onClick={() => setOpen(false)}>
              <FaTimes className="w-10 h-10 mt-10 cursor-pointer text-color2 hover:text-color5 mr-9" />
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navegacion;
