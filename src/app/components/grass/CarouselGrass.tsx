import React, { useEffect, useState } from "react";
import { ICatalogueBigCardCarousel } from "../../../pages/catalogue/[name]/[id]";
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
const caracteres = "%$##$%";
//const carousel = [
//  require("../../../../assets/image/bocce.jpeg"),
//  require("../../../../assets/image/lanmark-bg.jpeg"),
//  require("../../../../assets/image/tennis.jpeg"),
//  require("../../../../assets/image/sport.jpeg"),
//];
const CarouselGrass = (props: {
  information: ICatalogueBigCardCarousel;
  carousel: string[];
}) => {
  const { information, carousel } = props;
  const [Benefits, setBenefits] = useState<string[]>([]);
  useEffect(() => {
    if (information !== null) {
      if (information?.benefits.includes(caracteres)) {
        setBenefits(information?.benefits.split(caracteres));
      } else if (information?.benefits !== "") {
        setBenefits[information?.benefits];
      }
    }
  }, [information]);

  return (
    <DivCarouselGrassContainer>
      <DivLeftInfo>
        <DivIcon area="icon">
          <ImgIconCarousel
            atl="icon"
            src={require("../../../../assets/icons/icon-golf.svg")}
          />
        </DivIcon>
        <PSubtitleCarousel area="sub">
          {information?.subtitle}
        </PSubtitleCarousel>
        <PTitleCarousel area="title">{information?.title}</PTitleCarousel>
        <DivDescription area="Desc">
          <PdescriptionCaroou>{information?.description}</PdescriptionCaroou>
        </DivDescription>
        <DivBenefitsList area="bene">
          <PBenefitsTitle>BENEFICIOS:</PBenefitsTitle>
          <DivBenefits>
            {Benefits.length !== 0 &&
              Benefits.map((item: string, index: number) => {
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
        {carousel?.length !== 0 && <Carousel time={2000} images={carousel} />}
      </DivRightCarousel>
    </DivCarouselGrassContainer>
  );
};

export default CarouselGrass;
