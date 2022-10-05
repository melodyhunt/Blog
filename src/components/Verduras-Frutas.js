function VerdurasFrutas(props) {
  return (
    <div className="post">
      <p>
        La huerta es una actividad donde convergen el trabajo, la alimentación
        sana, el autoabastecimiento y el cuidado del medio ambiente, todo ello
        sin comprometer insumos escasos.
      </p>
      <p className="mb-10">
        Brinda la posibilidad de estar en contacto con “lo vivo” dentro de
        nuestra casa: tocar la tierra, sentir los olores y los sabores de las
        plantas, vincularse con los ritmos naturales y los ciclos vitales. Por
        ello, desde el programa consideramos a la huerta como un medio y un
        espacio que posibilita desarrollar múltiples sensaciones positivas y
        gratificantes desde la siembra hasta la cosecha, diferentes objetivos y
        vivencias, acordes a cada persona que se anime a realizarla. Es un
        proceso que permite comprender de dónde vienen los alimentos y
        dimensionar el trabajo que representa para quienes lo producen.
      </p>
      <input type="checkbox" className="estatico" id={`post-${props.id}`} />
      <section className="leer-mas">
        <div className="flex flex-col justify-center">
          <img
            className="w-16 h-16 p-2 rounded-full md:w-24 md:h-24 bg-color6 hover:bg-color4 "
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

export default VerdurasFrutas;
