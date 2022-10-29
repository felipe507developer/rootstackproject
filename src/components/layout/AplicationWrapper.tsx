import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface Tprops {
  title: string;
  description?: string;
}
export const AplicationWrapper: FC<PropsWithChildren<Tprops>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${title} | Adventure Tour`}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-[12] text-black font-semibold sticky top-0 bg-white shadow">
        <nav className="w-full flex gap-5 p-5 items-ends text-xl items-center">
          <Link href="/">
            <h2 className="flex items-center"> AVENTURE / TOUR

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-airplane-engines-fill translate-x-1 text-emerald-600"
                viewBox="0 0 16 16"
              >
                <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z" />
               
              </svg>
            </h2>
            
             
          </Link>
          <Link href="/" className="active">
            
            Home
          </Link>

          <Link href="/sites">Sites</Link>
          <Link href="/about" className="items-end">About us</Link>
        </nav>
      </header>

      <main className="grow flex flex-col bg-slate-50">{children}</main>

      <footer className="flex p-6 h-[15] font-extralight items-center justify-center bg-white text-black">
        <a href="#" target="_blank">
          Created by <span>Felipe Pérez Martínez</span>
        </a>
      </footer>
    </div>
  );
};
