import React, { useEffect } from "react";
import Footer from "../../app/components/footer/Footer";
import ShowHeader from "../../app/components/header/ShowHeader";
import CardsBottom from "../../app/components/home/CardsBottom";
import Description from "../../app/components/home/Description";
import Carousel from "../../app/components/home/Carousel";
import Engineered from "../../app/components/home/Engineered";
import GridHover from "../../app/components/home/GridHover";
import ShowBack from "../../app/components/home/ShowBack";
import { DivContainerFull } from "../../app/components/home/styledIndex";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  useEffect(() => {
    if (localStorage.getItem("FustadesingCatalogue") == null) {
      localStorage.setItem("FustadesingCatalogue", "");
    }
  }, []);

  return (
    <HeaderFooterWraper show={false}>
      <DivContainerFull>
        <ShowHeader />
        <Description />
        <GridHover />
        <Engineered />
        <ShowBack />
        <Carousel />
        <CardsBottom />
        <Footer />
      </DivContainerFull>
    </HeaderFooterWraper>
  );
};

export default index;
