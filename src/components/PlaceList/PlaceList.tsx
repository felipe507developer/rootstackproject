import React, { FC } from "react";
import Post from "./Place/Place";

export interface Isites {
  Title: string;
  Ubicacion: string;
  Descripion: string;
  Horario: string;
  id: number;
  img: string;
}

interface Tprops{
    posts: Isites[];
}

export const PlacesList = ({ posts }: Tprops) => {
  return (
    <div className="flex flex-col justify-center text-white items-center p-6">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {posts.map((post) => (
            //Place/Place.tsx
          <Post key={post.id} site={post} />
        ))}
      </ul>
    </div>
  );
};


