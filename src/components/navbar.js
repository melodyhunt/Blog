import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navegacion = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between bg-color3">
      <Link
        className="text-4xl font-bold text-white md:text-7xl font-principal"
        to="/"
      >
        <h1 className="m-9">Huerta en Casa</h1>
      </Link>
      <span>
        {!open && (
          <FaBars
            className="items-center block w-10 h-10 mt-10 text-white cursor-pointer hover:text-color5 mr-9 md:hidden"
            onClick={() => setOpen(true)}
          />
        )}
      </span>

      <div className="hidden text-4xl md:flex md:flex-row font-secundario">
        <NavLink className="text-white m-9 " to="/materiales">
          <h3 className="text-white hover:text-color5">Materiales</h3>
        </NavLink>
        <NavLink to="/plantas">
          <h3 className="text-white m-9 hover:text-color5">Que Plantar</h3>
        </NavLink>
      </div>
      {open && (
        <div className="flex flex-row">
          <div className="block mt-32 mr-10 text-2xl text-white px-7 font-secundario">
            <NavLink exact="true" activeclassname="active" to="/materiales">
              <p className="text-white hover:text-color6">Materiales</p>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/plantas">
              <p className="pt-3 text-white pb-7 hover:text-color6">
                Que Plantar
              </p>
            </NavLink>
          </div>
          <div>
            <span onClick={() => setOpen(false)}>
              <FaTimes className="w-10 h-10 mt-10 text-white cursor-pointer hover:text-color5 mr-9" />
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navegacion;
