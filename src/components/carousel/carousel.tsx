import React, { FC } from "react";
import Link from "next/link";

export const Carousel: FC = () => {
  return (
    <section
      className="grow relative bg-[url(https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] 
    bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-sky-800/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-sky-600/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            You like to travel?
            <strong className="block font-extrabold text-orange-700 text-3xl">
              visit Panamá!
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            &quot;When one teaches, two learn.&quot;{" "}
            <span>Robert Heinlein </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/sites"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-semibold text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-semibold text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
