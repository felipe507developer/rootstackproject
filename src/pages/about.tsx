import { NextPage } from "next";
import React from "react";
import { About } from "../components/about/about";
import { AplicationWrapper } from "../components/layout/AplicationWrapper";

const about: NextPage = () => {
  return (
    <AplicationWrapper title="About us" description="we are here for You!">
      <About />
    </AplicationWrapper>
  );
}

export default about;
