import { NextPage } from "next";
import { Carousel } from "../components/carousel/carousel";
import { AplicationWrapperIndex } from "../components/layout/AplicationWrapperIndex";

interface TProps {
  response: string;
}
const Home: NextPage<TProps> = () => {
  return (

    
    <AplicationWrapperIndex title="Resort" description="Roostack | NextJs Course">
        <Carousel />
    </AplicationWrapperIndex>

  );
}

export default Home;