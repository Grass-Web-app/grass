import React from "react";
import ShowHeader from "../app/components/header/ShowHeader";
import CardsBottom from "../app/components/home/CardsBottom";
import Carousel from "../app/components/home/Carousel";
import Description from "../app/components/home/Description";
import Engineered from "../app/components/home/Engineered";
import GridHover from "../app/components/home/GridHover";
import HeaderFooterWraper from "../app/components/layout/InitWraper";
import { DivContainerFull } from "../app/components/home/styledIndex";
import ShowBack from "../app/components/home/ShowBack";

const index = () => {
  return (
    <HeaderFooterWraper>
      <DivContainerFull>
        <ShowHeader />
        <Description />
        <GridHover />
        <Engineered />
        <ShowBack />
        <Carousel />
        <CardsBottom />
      </DivContainerFull>
    </HeaderFooterWraper>
  );
};

export default index;
