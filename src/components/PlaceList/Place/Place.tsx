import Link from "next/link";
import React, { FC } from "react";
import { Isites } from "../PlaceList";
import Image from 'next/image';


interface Tprops {
  site: Isites;
}
const Post: FC<Tprops> = ({ site }) => {
  return (
    <li className="sm:h-[400px] sm:w-[208] flex justify-center items-center mb-2">
      
        <div className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg md:h-52 sm:h-56 w-full"
            src={site.img}
            width={208}
            height={224}
            alt={`${site.Title}`}
          />
          <div className="p-5 h-52">
            <a href="#">
              <h5 className="mb-3 font-extralight text-gray-700 dark:text-gray-400">
                {site.Ubicacion}
              </h5>
            </a>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {site.Title}
            </p>
            <Link href={`/sites/${site.id}`}>
              <button type="button"  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
              </button>
            </Link> 
          </div>
        </div>
     
    </li>
  );
};

export default Post;
