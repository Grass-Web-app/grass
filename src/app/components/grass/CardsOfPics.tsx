import React from "react";
import { prefix } from "../../../pages/_app";
import {
  DescriptionOnly,
  DivCard,
  DivCardsContainer,
  Divicon,
  DivImgContainer,
  DivRightInfo,
  H4title,
  ImgIconDescription,
  ImgOnly,
  Psubtitle,
} from "./styledCardsofpics";
const carousel = [
  require("../../../../assets/image/bocce.jpeg"),
  require("../../../../assets/image/lanmark-bg.jpeg"),
  require("../../../../assets/image/tennis.jpeg"),
  require("../../../../assets/image/sport.jpeg"),
];

const CardsOfPics = () => {
  return (
    <DivCardsContainer>
      {carousel.map((item: string, index: number) => {
        let place = "white";
        if (index % 2 === 0) place = "#f5f5f5";
        return (
          <DivCard color={place} key={index}>
            <DivImgContainer>
              <ImgOnly alt="image" src={prefix + item} />
            </DivImgContainer>
            <DivRightInfo>
              <Divicon area="icon">
                <ImgIconDescription
                  alt="image"
                  src={require("../../../../assets/icons/icon-golf.svg")}
                />
              </Divicon>
              <Psubtitle area="sub">
                Multiple Styles for Putting, Chipping & More
              </Psubtitle>
              <H4title area="title">PUTTING GREEN TURF</H4title>
              <DescriptionOnly area="desc">
                XGrass offers a number of synthetic grass products for building
                all types of golf greens - from putting greens and short game
                greens to complete backyard golf courses. We also work with a
                nationwide network of dealers that specialize in installing tour
                quality golf greens that look and react just like a real bent
                grass putting green, without the daily maintenance.
              </DescriptionOnly>
            </DivRightInfo>
          </DivCard>
        );
      })}
    </DivCardsContainer>
  );
};

export default CardsOfPics;
