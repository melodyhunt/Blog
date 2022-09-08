import Hoja from "../assets/huerta23.png";
import Flor from "../assets/huerta20.png";
const Beneficios = () => {
  return (
    <div className="grid grid-cols-1 gap-4 text-xl md:grid-cols-2 lg:grid-cols-3 text-color1 font-secundario">
      <div className="post">
        <input type="checkbox" className="estatico" id="post-1" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">Producción local.</h4>
            <img className="w-8 h-8" src={Hoja} alt="Hoja" />
          </div>
          <p className="objetivo">
            Hoy en día podemos comer cualquier fruta u hortaliza en cualquier
            época del año. Tenemos melones en febrero, tomates en diciembre,
            kiwis, mango,… pero has pensado de donde vienen todos estos
            alimentos? No llegan al supermercado de casa de forma gratuita, y no
            me refiero al coste en euros, sino al coste ambiental que supone
            traerlos desde miles de kilómetros. Debemos ser conscientes de las
            emisiones de CO2 que supone el transporte de mercancías. Si cultivas
            tus alimentos de temporada en casa, seras mas consciente de lo que
            realmente se cultiva en tu zona.
          </p>
          <label for="post-1" className="disparador text-color1"></label>
        </section>
      </div>

      <div className="post">
        <input type="checkbox" className="estatico" id="post-2" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">Educativo.</h4>
            <img className="w-8 h-8" src={Flor} alt="Hoja" />
          </div>
          <p className="objetivo">
            La mejor forma de aprender es jugando, realizando una actividad que
            te guste. Plantar una semilla y ver como germina, crece y después la
            cosechas despierta la imaginación y la curiosidad en los mas
            pequeños. Además de enseñar el sentido de responsabilidad y amor por
            la naturaleza. Es una parte también importante en la educación
            emocional de los niños, pues aprenden a gestionar sus frustraciones
            y éxitos, cuando muere una planta por ejemplo.
          </p>
          <label for="post-2" className="disparador"></label>
        </section>
      </div>

      <div className="post">
        <input type="checkbox" className="estatico" id="post-3" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">
              Fomenta el Contacto con el aire libre.
            </h4>
            <img className="w-8 h-8" src={Hoja} alt="Hoja" />
          </div>
          <p className="objetivo">
            La mayor parte de la actividad al cuidar de un huerto urbano se
            realiza en el exterior. Pasamos muchas horas encerrados en oficinas,
            escuelas, gimnasios, etc. Salir a buscar plantas para el huerto,
            regarlo o cuidarlo hará que estés mas horas en el exterior, al aire
            libre.
          </p>
          <label for="post-3" className="disparador text-color1"></label>
        </section>
      </div>
      <div className="post">
        <input type="checkbox" className="estatico" id="post-4" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">Reduce el estrés.</h4>
            <img className="w-8 h-8" src={Flor} alt="Hoja" />
          </div>
          <p className="objetivo">
            Consumir tus propios alimentos genera sensación de satisfacción, de
            esta manera reducirás el estrés acumulado durante la jornada de
            trabajo. Podrás gestionar mejor tus emociones porque estarás mas
            tranquilo, tendrás mas paciencia y podrás saborear mejo cada momento
            de tu vida. En definitiva, dispondrás de una excelente terapia, y
            gratuita!
          </p>
          <label for="post-4" className="disparador text-color1"></label>
        </section>
      </div>
      <div className="post">
        <input type="checkbox" className="estatico" id="post-5" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">Ecológico.</h4>
            <img className="w-8 h-8" src={Hoja} alt="Hoja" />
          </div>
          <p className="objetivo">
            Desde el momento que plantas tus semillas o plantel, tu decides si
            lo quieres hacer con abono orgánico, con pesticidas, insecticidas,…
            es decir, tu decides si quieres que tus alimentos sean ecológicos o
            no.
          </p>
          <label for="post-5" className="disparador text-color1"></label>
        </section>
      </div>
      <div className="post">
        <input type="checkbox" className="estatico" id="post-6" />
        <section className="leer-mas">
          <div className="flex flex-row justify-start">
            <h4 className="uppercase text-color6">
              Consumir alimentos sanos, frescos y sin pesticidas.
            </h4>
            <img className="w-8 h-8" src={Flor} alt="Hoja" />
          </div>
          <p className="objetivo">
            Es importante saber la procedencia de los alimentos y como han sido
            tratados, porque al final eres tu quien los consume y el ultimo
            responsable de tu salud.
          </p>
          <label for="post-6" className="disparador text-color1"></label>
        </section>
      </div>
      <div className="post">
        <input type="checkbox" className="estatico" id="post-7" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">
              {" "}
              Aumentar las áreas verdes en la ciudad.
            </h4>
            <img className="w-8 h-8" src={Hoja} alt="Hoja" />
          </div>
          <p className="objetivo">
            Cada vez necesitamos mas espacio para mas vehículos, servicios,
            redes de comunicación, viviendas,… soy consciente que desde algunos
            ayuntamientos intentan mejorar y aumentar las áreas verdes de las
            ciudades, pero no esta de mas poder contribuir nosotros en este
            sentido. Que mejor que tener una zona verde en el balcón de casa?
          </p>
          <label for="post-7" className="disparador text-color1"></label>
        </section>
      </div>
      <div className="post">
        <input type="checkbox" className="estatico" id="post-8" />
        <section className="leer-mas">
          <div className="flex flex-row justify-start">
            <h4 className="text-xl uppercase text-color6">
              {" "}
              Aprender a cultivar hortalizas de temporada.
            </h4>
            <img className="w-8 h-8" src={Flor} alt="Hoja" />
          </div>
          <p className="objetivo">
            Tener una huerta en casa y hacerte responsable de el, hará que
            aumente tu interés por la horticultura, y entenderás el ciclo
            biológico de las plantas. El saber no ocupa lugar!
          </p>
          <label for="post-8" className="disparador text-color1"></label>
        </section>
      </div>
      <div className="post">
        <input type="checkbox" className="estatico" id="post-9" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">
              Compartir tiempo en familia.
            </h4>
            <img className="w-8 h-8" src={Hoja} alt="Hoja" />
          </div>
          <p className="objetivo">
            Cada vez es mas difícil encontrar tiempo para pasar con las personas
            que queremos. El trabajo, tareas de casa, compromisos varios,
            disfrutar de unas horas tranquilas con nuestros hijos es
            imprescindible para ellos y para nosotros.
          </p>
          <label for="post-9" className="disparador text-color1"></label>
        </section>
      </div>
      <div className="post">
        <input type="checkbox" className="estatico" id="post-10" />
        <section className="leer-mas">
          <div className="flex flex-row justify-center">
            <h4 className="uppercase text-color6">
              {" "}
              Ayudas al medio ambiente.
            </h4>
            <img className="w-8 h-8" src={Flor} alt="Hoja" />
          </div>
          <p className="objetivo">
            Fomentar una cultura ecológica y mas sostenible es algo que
            agradeceremos y nos agradecerán. Desde el inicio de la revolución
            industrial ya hemos destruido mas del 50% de la masa forestal de
            nuestro planeta. Actuamos como si tuviéramos otro planeta a donde
            ir, y esta situación será muy pronto irreversible. Debemos actuar de
            forma local para conseguir un cambio global.
          </p>
          <label for="post-10" className="disparador text-color1"></label>
        </section>
      </div>
    </div>
  );
};
export default Beneficios;
