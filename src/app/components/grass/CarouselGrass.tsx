import React from "react";
import Carousel from "../carousel/Carousel";
import {
  DivBenefits,
  DivBenefitsList,
  DivCarouselGrassContainer,
  DivDescription,
  DivIcon,
  DivLeftInfo,
  DivRightCarousel,
  ImgIconCarousel,
  Pbenefits,
  PBenefitsTitle,
  PdescriptionCaroou,
  PSubtitleCarousel,
  PTitleCarousel,
} from "./Styledcarouselgrass";

const benefits = [
  "Low maintenance",
  "Great amenity for communities",
  "All season performance",
  "Fun for the whole family",
  "No watering, mowing or fertilizing required",
];
const carousel = [
  require("../../../../assets/image/bocce.jpeg"),
  require("../../../../assets/image/lanmark-bg.jpeg"),
  require("../../../../assets/image/tennis.jpeg"),
  require("../../../../assets/image/sport.jpeg"),
];
const CarouselGrass = () => {
  return (
    <DivCarouselGrassContainer>
      <DivLeftInfo>
        <DivIcon area="icon">
          <ImgIconCarousel
            atl="icon"
            src={require("../../../../assets/icons/icon-golf.svg")}
          />
        </DivIcon>
        <PSubtitleCarousel area="sub">An Unmatched Selection</PSubtitleCarousel>
        <PTitleCarousel area="title">XGRASS GOLF TURF</PTitleCarousel>
        <DivDescription area="Desc">
          <PdescriptionCaroou>
            Anyone who has tried to install a backyard putting green quickly
            gains an appreciation for how hard it is to be professional
            greenskeeper. As if building a putting green was not hard enough,
            maintaining one can be a full-time job. These challenges extend to
            the tee boxes and any others areas where divots makes growing grass
            a constant battle.
          </PdescriptionCaroou>
          <PdescriptionCaroou>
            XGrass has engineered a number of low-maintenance synthetic grass
            systems designed for practicing and enjoying all aspects of the game
            of golf.
          </PdescriptionCaroou>
        </DivDescription>
        <DivBenefitsList area="bene">
          <PBenefitsTitle>BENEFITS:</PBenefitsTitle>
          <DivBenefits>
            {benefits.map((item: string, index: number) => {
              return (
                <Pbenefits key={index}>
                  <span style={{ color: "orange" }}>• </span> {item}
                </Pbenefits>
              );
            })}
          </DivBenefits>
        </DivBenefitsList>
      </DivLeftInfo>
      <DivRightCarousel>
        <Carousel time={2000} images={carousel} />
      </DivRightCarousel>
    </DivCarouselGrassContainer>
  );
};

export default CarouselGrass;
