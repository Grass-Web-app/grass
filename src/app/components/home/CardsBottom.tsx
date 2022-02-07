import React from "react";
import { prefix } from "../../../pages/_app";
import {
  DivCardGrid,
  DivCardImgContainer,
  DivContainerCards,
  DivIconContainer,
  DivLeftTextContainer,
  DivRightTexContainer,
  H4TitleCard,
  ImgCardBottom,
  ImgIconCardBottom,
  PDescription,
  PWords,
} from "./StyledCardBottom";
const CardsBottom = () => {
  return (
    <DivContainerCards>
      <DivCardGrid>
        <DivLeftTextContainer>
          <DivIconContainer>
            <ImgIconCardBottom
              src={prefix + require("../../../../assets/image/park.png")}
            />
          </DivIconContainer>
          <PWords>It starts with an idea</PWords>
          <H4TitleCard>LANMARK DESIGNS</H4TitleCard>
          <PDescription>
            Need help getting started? Lanmark Designs specializes in adding
            elements of fun, activity and healthy living to your space.
            Landscape Architects blend the core elements of landscape design
            with innovative, environmentally-friendly surfacing from XGrass,
            Play It, VersaCourt, Tour Greens and Mulch Outfitters to create
            spaces that truly come to life.
          </PDescription>
        </DivLeftTextContainer>
        <DivCardImgContainer>
          <ImgCardBottom
            alt="grass img"
            src={prefix + require("../../../../assets/image/lanmark-bg.jpeg")}
          />
        </DivCardImgContainer>
      </DivCardGrid>
      <DivCardGrid>
        <DivCardImgContainer>
          <ImgCardBottom
            alt="grass img"
            src={prefix + require("../../../../assets/image/mexico verde.jpeg")}
          />
        </DivCardImgContainer>
        <DivRightTexContainer>
          <DivIconContainer>
            <ImgIconCardBottom
              src={prefix + require("../../../../assets/image/mexico.png")}
            />
          </DivIconContainer>
          <PWords>Your Installation Partner</PWords>
          <H4TitleCard>NATIONWIDE COVERAGE</H4TitleCard>
          <PDescription>
            We believe installing our products should be a seamless, hassle-free
            experience. That’s why we’ve created a nationwide network of sales
            managers to provide all of the expertise and materials you need for
            your surfacing projects.
          </PDescription>
        </DivRightTexContainer>
      </DivCardGrid>
    </DivContainerCards>
  );
};

export default CardsBottom;
