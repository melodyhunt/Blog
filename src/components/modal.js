import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillStar, AiOutlineCloseCircle } from "react-icons/ai";

Modal.setAppElement("#root");

const Modale = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-1/2 text-black bg-slate-300">
      <button onClick={toggleModal}>Ver Mas</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-50 bg-slate-800"
      >
        <AiOutlineCloseCircle onClick={toggleModal} />
        <h1>{props.nombre}</h1>
        <div className="flex flex-row w-1/2 p-10 bg-green-100">
          <p>{props.descripcion}</p>
          <img
            src={require(`../assets/${props.imagen}.jpg`)}
            alt="cursos"
            className="w-96"
          />
        </div>
        <p>
          Metodo: <span>{props.metodo}</span>
        </p>
        <p>
          Duracion: <span>{props.duracion}</span>
        </p>
        <section className="flex flex-row">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </section>
        <section>
          <p>{props.precio}</p>
          <h1>Medios de pago:</h1>
          <p>Efectivo o transferencia</p>
        </section>
        <button onClick={toggleModal}>Contactanos</button>
      </Modal>
    </div>
  );
};
export default Modale;
