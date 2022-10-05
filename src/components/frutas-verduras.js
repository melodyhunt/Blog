function FrutasVerduras(props) {
  return (
    <div className="post">
      <input type="checkbox" className="estatico" id={`post-${props.id}`} />
      <section className="leer-mas">
        <div className="flex flex-col justify-center">
          <img
            className="w-16 h-16 p-2 rounded-full md:w-24 md:h-24 bg-color2 hover:bg-color5 "
            src={props.imagen}
            alt="icono"
          />
          <h2 className="text-4xl font-bold text-center font-principal text-color1">
            {props.nombre}
          </h2>
        </div>
        <p className="text-xl objetivo text-color1 font-secundario">
          <span className="border-b-2 border-color6">Metodo de siembra :</span>{" "}
          {props.siembra}{" "}
        </p>
        <p className="text-xl objetivo text-color1 font-secundario">
          <span className="border-b-2 border-color6">Dias de cosecha :</span>{" "}
          {props.fecha}{" "}
        </p>
      </section>
      <label
        for={`post-${props.for}`}
        className="disparador text-color1"
      ></label>
    </div>
  );
}

export default FrutasVerduras;
