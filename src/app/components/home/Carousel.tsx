import React, { useState } from "react";
import { prefix } from "../../../pages/_app";
import {
  ButtonImgArrow,
  DivCarousel,
  DivCarouselContainer,
  DivImgContainer,
  DivMessage,
  DivTextContainer,
  H3Mark,
  H4TitleCarousel,
  ImgArrow,
  ImgCarousell,
  LeftArrow,
  PDescriptionCarousel,
  Ptitle,
  RightArrow,
} from "./styledCarousel";

const CarouselDates = [
  {
    title: "DESIGNED FOR PROFESIONAL GOLFERS",
    descroption:
      "Constructed with interlocking base panels and surfaced using tour quality putting and fringe turf, these greens are designed by industry experts for serious golfers. Best of all, these innovative putting green systems are easily installed in a few hours and ready for play.",
    picture: require("../../../../assets/image/golf_red.png"),
  },
  {
    title: "CAN BE INSTALLED IN A DAY",
    descroption:
      "Each kit comes with a detailed installation guide with step-by-step instructions to install your kit. We also provide a ‘How-To Install’ video that visually explains how to prep your backyard, what tools you’ll need, and how to install the green. Do-it-yourself or hire your landscape professional.",
    picture: require("../../../../assets/image/video.png"),
  },
  {
    title: "AVAILALE IN 5 DIFFERENT SHAPES AND SIZES",
    descroption:
      "The XGrass Players Series Putting Green Kits are offered in five unique kit options. Choose the shape and square footage that will compliment your space.",
    picture: require("../../../../assets/image/fivegolf.png"),
  },
  {
    title: "PUTTING GREENS KITS FOR YOUR BACKYARD",
    descroption:
      "Practice your short game at home with these new XGrass modular, DIY putting green kits. The innovative Players Series system installs quickly and provides a professionally installed look and performance without the disruption and cost of a full construction project.",
    picture: require("../../../../assets/image/golf.png"),
  },
];

const Carousel = () => {
  const [information, setInformation] = useState(0);
  const handleRight = () => {
    if (information < CarouselDates.length - 1) setInformation(information + 1);
    else setInformation(0);
  };
  const handleLeft = () => {
    if (information === 0) setInformation(CarouselDates.length - 1);
    else setInformation(information - 1);
  };
  return (
    <DivCarouselContainer>
      <DivMessage>
        <Ptitle>Putting Green Kits</Ptitle>
        <H3Mark>XGRASS PLAYERS SERIES</H3Mark>
      </DivMessage>
      <DivCarousel>
        <LeftArrow>
          <ButtonImgArrow onClick={handleLeft}>
            <ImgArrow
              alt="img"
              src={require("../../../../assets/icons/signature-arrow-prev.svg")}
            />
          </ButtonImgArrow>
        </LeftArrow>
        <DivTextContainer>
          <H4TitleCarousel>{CarouselDates[information].title}</H4TitleCarousel>
          <PDescriptionCarousel>
            {CarouselDates[information].descroption}
          </PDescriptionCarousel>
        </DivTextContainer>
        <DivImgContainer>
          <ImgCarousell
            alt="img carousel"
            src={prefix + CarouselDates[information].picture}
          />
        </DivImgContainer>
        <RightArrow>
          <ButtonImgArrow onClick={handleRight}>
            <ImgArrow
              rotate
              alt="img"
              src={require("../../../../assets/icons/signature-arrow-prev.svg")}
            />
          </ButtonImgArrow>
        </RightArrow>
      </DivCarousel>
    </DivCarouselContainer>
  );
};

export default Carousel;
