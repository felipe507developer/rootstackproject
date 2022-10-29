import Link from "next/link";
import React, { FC } from "react";

export const About: FC = () => {
  return (
    <section className="bg-gray-50 text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl mb-4">
            ADVENTURE / TOUR
            <strong className="font-bold text-3xl text-red-700 sm:block">
              Making Panama great
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            We are a company dedicated to promote internal and external tourism.
            We seek to motivate Panamanians to visit the most amazing places
            hidden in the Republic of Panama. ADVENTURE TOUR wants and wishes
            that all the people who use our services feel satisfied and want to
            continue visiting all the wonders that this wonderful paradise of
            Central America offers us.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/sites">
              <button
                type="button"
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                see locations
              </button>
            </Link>
            if you need more information please write to the following email.
            <strong>perezfelipe8877@gmail.com</strong>
            ask <strong>for Felipe Pérez M</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
