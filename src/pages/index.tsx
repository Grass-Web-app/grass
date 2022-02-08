import React from "react";
import ShowHeader from "../app/components/header/ShowHeader";
import CardsBottom from "../app/components/home/CardsBottom";
import Carousel from "../app/components/home/Carousel";
import Description from "../app/components/home/Description";
import Engineered from "../app/components/home/Engineered";
import GridHover from "../app/components/home/GridHover";
import HeaderFooterWraper from "../app/components/layout/InitWraper";

const index = () => {
  return (
    <HeaderFooterWraper>
      <ShowHeader />
      <Description />
      <GridHover />
      <Engineered />
      <Carousel />
      <CardsBottom />
    </HeaderFooterWraper>
  );
};

export default index;
