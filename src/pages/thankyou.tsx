import { NextPage } from "next";
import { Carousel } from "../components/carousel/carousel";
import { AplicationWrapperIndex } from "../components/layout/AplicationWrapperIndex";
import ThankstoRoostack from "../components/thankto/ThankstoRoostack";


const Thankto: NextPage = () => {
  return (

    
    <AplicationWrapperIndex title="Resort" description="Roostack | NextJs Course">
        <ThankstoRoostack />
    </AplicationWrapperIndex>

  );
}

export default Thankto;