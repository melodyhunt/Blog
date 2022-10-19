function Cursito(props) {
  return (
    <div className="flex flex-col justify-center font-semibold font-principal ">
      <h2 className="text-xl font-extrabold uppercase font-secundario text-color5">
        {props.nombre}
      </h2>
      <p className="py-3 text-base">{props.historia}</p>
      <p className="pb-3 text-base text-color1 font-secundario">
        <span className="border-b-2 border-color2">Cupo:</span> {props.cupo}{" "}
      </p>
      <p className="pb-3 text-base text-color1 font-secundario">
        <span className="border-b-2 border-color2">Metodo :</span>{" "}
        {props.metodo}{" "}
      </p>
      <p className="pb-3 text-xl font-extrabold text-color3 font-secundario">
        ${props.precio}
      </p>
    </div>
  );
}

export default Cursito;
