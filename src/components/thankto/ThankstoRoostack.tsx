import Link from "next/link";
import React from "react";

function ThankstoRoostack() {
  return (
    <div>
      <section className="bg-gray-50 text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl mb-4">
              Agradecimientos
              <strong className="font-extralight text-xl text-amber-700 sm:block">
              &quot;El sabio no enseña con palabras, sino con actos.&quot;
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              Hola Equipo Rootstack, Mi nombre es Felipe, a traves de este medio
              quiero agradecerles por el tiempo, la
              paciencia, y las motivacion por enseñarnos el funcionamiento del framework NextJs.
               Gracias a los jovenes Hector,
              Leonardo, Luis, Daniel, y a la señorita Alejandra por hacer el curso porsible.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/sites">
                <button
                  type="button"
                  className="block w-full rounded bg-red-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                >
                  Back to Home
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThankstoRoostack;
