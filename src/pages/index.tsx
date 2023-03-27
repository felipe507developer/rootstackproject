import { NextPage } from "next";
import { Carousel } from "../components/carousel/carousel";
import { AplicationWrapperIndex } from "../components/layout/AplicationWrapperIndex";

interface TProps {
  response: string;
}
const Home: NextPage<TProps> = () => {
  return (

    <meta name="google-site-verification" content="Hkj9zXK4-B6OcavW1dme-Pc13NjrVb8_i2cxjL7fBns" />
    <AplicationWrapperIndex title="Resort" description="Roostack | NextJs Course">
        <Carousel />
    </AplicationWrapperIndex>

  );
}

export default Home;
