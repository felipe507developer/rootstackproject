import type { GetStaticProps, NextPage } from "next";
import { Isites, PlacesList } from "../../components/PlaceList/PlaceList";

import { AplicationWrapper } from "../../components/layout/AplicationWrapper";

interface TProps {
  posts: Isites[];
  response: string;
}
const Post: NextPage<TProps> = ({ posts }) => {
  return (
    <div className="">
      <AplicationWrapper  description="Enjoy it!" title='Places'>
        <PlacesList posts={posts} />
      </AplicationWrapper>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    .then((res) => res.json())
    .then((data: Isites[]) => data.slice(0, 10))
    .catch((error) => console.error(error));

  return {
    props: {
      posts,
    },

    // Incremental static regeneration
    revalidate: 10,
  };
};
