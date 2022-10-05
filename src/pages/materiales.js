import Navegacion from "../components/navbar";
import Guantes from "../assets/huerta19.png";
import Tierra from "../assets/huerta24.png";
import Compost from "../assets/huerta26.png";
import Regadera from "../assets/huerta7.png";
import Pala from "../assets/huerta5.png";
import Maceta from "../assets/huerta12.png";
import Semillas from "../assets/huerta13.png";
import Botella from "../assets/huerta31.png";

const materiales = () => {
  return (
    <div>
      <Navegacion />
      <div className="bg-[url('./assets/fond.jpg')]  bg-no-repeat bg-cover block">
        <h1 className="py-20 mb-20 font-bold text-center font-principal text-7xl text-color6">
          Materiales para crear tu propia Huerta
        </h1>
        <div className="grid grid-cols-1 mx-20 lg:mx-32 justify-items-center md:grid-cols-2 lg:grid-cols-4">
          <section>
            <img
              className="p-10 rounded-full w-60 h-60 bg-color3 hover:bg-color5 hover:p-5 "
              src={Guantes}
              alt="guantes"
            />
            <h3 className="m-10 text-4xl font-secundario text-color3">
              Guantes
            </h3>
          </section>
          <section>
            <img
              className="p-10 rounded-full w-60 h-60 bg-color6 hover:bg-color2 hover:p-5"
              src={Tierra}
              alt="tierra"
            />
            <h3 className="m-10 text-4xl font-secundario text-color3">
              Tierra
            </h3>
          </section>
          <section>
            <img
              className="p-10 rounded-full w-60 h-60 hover:bg-color6 hover:p-5 bg-color2"
              src={Compost}
              alt="compost"
            />
            <h3 className="m-10 text-4xl font-secundario text-color3">
              Compost
            </h3>
          </section>
          <section>
            <img
              className="p-10 rounded-full w-60 h-60 hover:bg-color3 hover:p-5 bg-color5"
              src={Pala}
              alt="pala"
            />
            <h3 className="m-10 text-4xl font-secundario text-color3">
              Pala, Rastrillo
            </h3>
          </section>
          <section>
            <img
              className="p-10 rounded-full w-60 h-60 hover:bg-color2 hover:p-5 bg-color4"
              src={Regadera}
              alt="regadera"
            />
            <h3 className="m-10 text-4xl font-secundario text-color3">
              Regadera
            </h3>
          </section>
          <section>
            <img
              className="p-10 rounded-full w-60 h-60 hover:bg-color5 hover:p-5 bg-color2"
              src={Maceta}
              alt="maceta"
            />
            <h3 className="m-10 text-4xl font-secundario text-color3">
              Recipiente
            </h3>
          </section>
          <section>
            <img
              className="p-10 rounded-full w-60 h-60 hover:bg-color4 hover:p-5 bg-color3"
              src={Semillas}
              alt="semilla"
            />
            <h3 className="m-10 text-4xl font-secundario text-color3">
              Semillas
            </h3>
          </section>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row mt-28">
          <img
            className="p-10 rounded-full w-60 h-60 hover:bg-color6 hover:p-5 bg-color2"
            src={Botella}
            alt="botella"
          />
          <p className="w-4/5 px-10 py-2 text-2xl border-t-4 border-b-4 border-dotted lg:w-1/4 border-color6 text-color1">
            <strong>¡Recorda que podes usar materiales Reutilizables! </strong>
            Los envases plásticos funcionan muy bien como macetas y pintandolos
            podés generar tus propios diseños.
          </p>
        </div>
      </div>
    </div>
  );
};

export default materiales;
