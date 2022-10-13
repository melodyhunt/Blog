function Cursito(props) {
  return (
    <div className="block p-5 m-5 border-2 rounded-lg bg-opacity-10 bg-color4 border-color1">
      <div className="flex flex-col justify-center ">
        <h2 className="text-4xl font-extrabold text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-900 to-orange-600">
          {props.nombre}
        </h2>
        <p>{props.historia}</p>
        <p className="text-xl text-color1 font-secundario">
          <span className="border-b-2 border-color2">Cupo:</span> {props.cupo}{" "}
        </p>
        <p className="text-xl text-color1 font-secundario">
          <span className="border-b-2 border-color2">Dias de cosecha :</span>{" "}
          {props.metodo}{" "}
        </p>
        <p>{props.precio}</p>
      </div>
    </div>
  );
}

export default Cursito;
