import Navegacion from "../components/navbar";
import { NavLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { BsInfoCircleFill } from "react-icons/bs";
import Modal from "react-modal";
import { useState } from "react";
import Footer from "../components/footer";

Modal.setAppElement("#root");
const Contacto = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <Navegacion />
      <div className="bg-[url('./assets/verde.png')] bg-repeat  ">
        <NavLink
          className="flex flex-row p-10 px-3 text-xl hover:text-2xl font-secundario text-color1 hover:text-color5"
          to="/"
        >
          <HiArrowLeft className="my-1" />
          <h3>Volver</h3>
        </NavLink>
        <h1 className="pb-12 font-bold text-center font-principal text-7xl text-color5">
          Contacto
        </h1>
        <div class="flex h-screen font-principal items-center justify-center  mt-32 mb-32">
          <div class="grid bg-white bg-opacity-50 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 p-16 mb-56">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  nombre
                </label>
                <input
                  class="py-2 px-3 rounded-lg border-2 border-color1 mt-1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
                  type="text"
                  placeholder="nombre"
                />
              </div>
              <div class="grid grid-cols-1">
                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  apellido
                </label>
                <input
                  class="py-2 px-3 rounded-lg border-2  border-color1 mt-1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
                  type="text"
                  placeholder="apellido"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 mt-5 mx-7">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Correo
              </label>
              <input
                class="py-2 px-3 rounded-lg border-2 border-color1 mt-1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
                type="email"
                placeholder="correo@correo.com"
              />
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Cursos
              </label>
              <select class="py-2 px-3 rounded-lg border-2 border-color1 mt-1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent">
                <option>Selecciona</option>
                <option>Diseño de jardines</option>
                <option>Huerto Organico</option>
                <option>Tecnicas y diseño</option>
                <option>Redes Sociales</option>
                <option>Digitaliza tus ideas</option>
                <option>Tecnicas y diseño</option>
              </select>
            </div>

            <div class="grid grid-cols-1 mt-5 mx-7">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Mensajes
              </label>
              <textarea
                class="py-2 px-3 rounded-lg border-2 w-full h-32 border-color1 mt-1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
                type="text"
                placeholder="Dejanos tu consulta"
              />
            </div>
            <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <button
                onClick={toggleModal}
                className="w-auto px-4 py-2 text-2xl font-medium text-white uppercase rounded-lg shadow-xl font-secundario bg-color2 hover:bg-color3"
              >
                Enviar
              </button>
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-60 bg-slate-800"
              >
                <div
                  class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700"
                  role="alert"
                >
                  <BsInfoCircleFill className="mx-1 mt-1 text-xl" />
                  <p className="text-xl">
                    <span class="font-medium">Mensaje Enviado con exito!</span>{" "}
                    En Breve nos contaremos con ustedes
                  </p>
                </div>
                <button
                  onClick={toggleModal}
                  className="px-6 py-3 text-2xl text-white uppercase rounded-md bg-color1 hover:bg-color2"
                >
                  Cerrar
                </button>
              </Modal>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacto;
