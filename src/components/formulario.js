import React from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customSubmit = (data) => {
    alert("Mensaje enviado con exito");
  };
  return (
    <div>
      <div class="flex h-screen font-principal items-center justify-center  mt-16 ">
        <form
          onSubmit={handleSubmit(customSubmit)}
          className="grid w-11/12 p-6 mb-56 bg-white bg-opacity-50 rounded-lg shadow-xl md:p-16 md:w-9/12 lg:w-1/2"
        >
          <div className="grid grid-cols-1 mt-5 md:grid-cols-2 md:gap-8 mx-7">
            <div className="hidden grid-cols-1 md:grid">
              <label className="text-xs font-bold text-gray-900 uppercase md:text-sm text-light">
                nombre
              </label>
              <input
                type="text"
                placeholder="nombre"
                {...register("nombre", {
                  required: true,
                })}
                className="px-3 py-2 mt-1 mr-2 text-black border-2 rounded-lg md:mr-0 font-secundario border-color1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
              />
              {errors.nombre?.type === "required" && (
                <p className="text-red-500 text-md font-secundario">
                  El campo no puede estar vacío
                </p>
              )}
            </div>
            <div className="hidden grid-cols-1 md:grid">
              <label className="text-xs font-bold text-gray-900 uppercase md:text-sm text-light">
                Apellido
              </label>
              <input
                type="text"
                placeholder="apellido"
                {...register("apellido", {
                  required: true,
                })}
                className="px-3 py-2 mt-1 text-black border-2 rounded-lg font-secundario border-color1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
              />
              {errors.apellido?.type === "required" && (
                <p className="text-red-500 text-md font-secundario">
                  El campo no puede estar vacío
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:hidden">
              <label className="text-xs font-bold text-gray-900 uppercase md:text-sm text-light">
                Nombre y Apellido
              </label>
              <input
                type="text"
                placeholder="apellido"
                {...register("apellido", {
                  required: true,
                })}
                className="px-3 py-2 mt-1 text-black border-2 rounded-lg font-secundario border-color1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
              />
              {errors.apellido?.type === "required" && (
                <p className="text-red-500 text-md font-secundario">
                  El campo no puede estar vacío
                </p>
              )}
            </div>
            <div class="grid col-span-2 mt-5 ">
              <label class="uppercase md:text-sm text-xs font-bold text-gray-900text-light ">
                Correo
              </label>
              <input
                className="px-3 py-2 mt-1 text-black border-2 rounded-lg font-secundario border-color1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
                type="email"
                placeholder="correo@correo.com"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-md font-secundario">
                  El campo no puede estar vacío
                </p>
              )}
            </div>
            <div class="grid col-span-2 mt-5">
              <label className="text-xs font-bold text-gray-900 uppercase md:text-sm text-light">
                Cursos
              </label>
              <select className="px-3 py-2 mt-1 text-black border-2 rounded-lg font-secundario border-color1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent">
                <option>Selecciona</option>
                <option>Diseño de jardines</option>
                <option>Huerto Organico</option>
                <option>Tecnicas y diseño</option>
                <option>Redes Sociales</option>
                <option>Digitaliza tus ideas</option>
                <option>Tecnicas y diseño</option>
              </select>
            </div>
            <div class=" col-span-2 mt-5 ">
              <label class="uppercase md:text-sm text-xs font-bold text-gray-900 text-bold">
                Mensajes
              </label>
              <textarea
                className="w-full h-32 px-3 py-2 mt-1 border-2 rounded-lg font-secundario border-color1 focus:outline-none focus:ring-2 focus:ring-color2 focus:border-transparent"
                type="text"
                placeholder="Dejanos tu consulta"
                {...register("mensaje", {
                  required: true,
                })}
              />
              {errors.mensaje?.type === "required" && (
                <p className="text-red-500 text-md font-secundario">
                  El campo no puede estar vacío
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-32 py-3 mt-6 text-2xl text-center text-white uppercase bg-color3 hover:bg-color2 rounded-xl"
          >
            enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
