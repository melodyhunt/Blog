import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const Modale = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        onClick={toggleModal}
        className="px-6 py-2 text-2xl text-white bg-color2 hover:bg-color5 rounded-xl"
      >
        {props.boton}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-60 bg-slate-800"
      >
        <div className="flex flex-col p-2 mx-2 text-base rounded-lg md:text-xl lg:w-1/2 lg:p-10 font-secundario bg-color4">
          <GrClose onClick={toggleModal} className="self-end cursor-pointer" />

          <h1 className="text-xl font-extrabold text-transparent uppercase md:2xl md:pb-6 lg:text-4xl bg-clip-text bg-gradient-to-r from-color3 to-color2">
            {props.nombre}
          </h1>
          <div className="flex flex-col py-2 md:py-6 md:flex-row ">
            <section>
              <p className="text-justify md:mr-2 lg:mr-12 ">
                {props.descripcion}
              </p>
              <p className="pb-1 my-2 font-semibold ">
                Metodo: <span className="font-light">{props.metodo}</span>
              </p>
              <p className="mb-2 font-semibold ">
                Duracion: <span className="font-light ">{props.duracion}</span>
              </p>
              <section className="flex flex-row text-color3">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </section>
            </section>
            <img
              src={require(`../assets/${props.imagen}`)}
              alt="cursos"
              className="w-56 ml-12 md:ml-0 md:w-72 lg:w-96 "
            />
          </div>

          <section>
            <p className="text-2xl font-bold text-center ">{props.precio}</p>
            <h1 className="font-semibold">Medios de pago:</h1>
            <p>Efectivo o transferencia</p>
          </section>
          <div className="flex flex-row justify-around my-6">
            <button className="px-6 py-3 text-xl text-white uppercase rounded-md md:text-2xl pulse bg-color2 hover:bg-color1">
              <Link to="/contacto">Contratar</Link>
            </button>
            <button
              onClick={toggleModal}
              className="px-6 py-3 text-xl text-white uppercase rounded-md md:text-2xl bg-color1 hover:bg-color2"
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Modale;
