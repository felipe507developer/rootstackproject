import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface Tprops {
  title: string;
  description?: string;
}
export const AplicationWrapperIndex: FC<PropsWithChildren<Tprops>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`${title} | AVTour`}</title>
        {description && <meta name="" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grow flex flex-col">
        {children}
        <footer className="flex p-6 h-[15] font-extralight items-center justify-center bg-white text-black">
          <Link href="" target="_blank" rel="">
            Created by <strong>Felipe Pérez Martínez</strong> -
            <strong>perezfelipe8877@gmail.com</strong>
          </Link>
        </footer>
      </main>
    </div>
  );
};
