function VerdurasFrutas(props) {
  return (
    <div className="block p-5 m-5 border-2 rounded-lg bg-opacity-10 bg-color2 border-color1">
      <section className="">
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl font-extrabold text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-900 to-orange-600">
            {props.nombre}
          </h2>
        </div>
        <p className="text-xl text-color1 font-secundario">
          <span className="border-b-2 border-color2">Metodo de siembra :</span>{" "}
          {props.siembra}{" "}
        </p>
        <p className="text-xl text-color1 font-secundario">
          <span className="border-b-2 border-color2">Dias de cosecha :</span>{" "}
          {props.fecha}{" "}
        </p>
      </section>
    </div>
  );
}

export default VerdurasFrutas;
