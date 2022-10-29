import Link from "next/link";
import React, { FC } from "react";
import Image from 'next/image';

interface Tprops {
  img: string;
  description: string;
  title: string;
}
export const SiteDetails: FC<Tprops> = ({ img, description, title }) => {
  return (
    <section className="grow bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Party"
              src={img}
              fill
              className="absolute inset-0 h-full w-full object-cover "
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-black">
              {title}
            </h2>

            <p className="mt-4 text-gray-600">{description}</p>

            <Link
              href="/sites"
              className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>

              <span className="ml-1 text-sm font-medium"> Back to </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
