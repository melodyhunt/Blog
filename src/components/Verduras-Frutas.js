function VerdurasFrutas(props) {
  return (
    <div className="block p-5 m-5 border-2 rounded-lg bg-opacity-10 bg-color5 border-color2 font-secundario">
      <section className="">
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-color5 to-color2 ">
            {props.nombre}
          </h2>
        </div>
        <p className="text-xl text-black ">
          <span className="border-b-2 border-color2">Metodo de siembra :</span>{" "}
          {props.siembra}{" "}
        </p>
        <p className="text-xl text-black ">
          <span className="border-b-2 border-color2">Dias de cosecha :</span>{" "}
          {props.fecha}{" "}
        </p>
      </section>
    </div>
  );
}

export default VerdurasFrutas;
