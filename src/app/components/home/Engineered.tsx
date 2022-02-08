import React from "react";
import { prefix } from "../../../pages/_app";
import {
  DivCardInfo,
  DivContainerEngineered,
  DivContainerSandText,
  DivImgIconContainer,
  DivImgSplit1,
  DivImgSplit2,
  DivImgSplit3,
  DivImgSplit4,
  DivImgSplit5,
  DivSandwichContainer,
  DivTextTitle,
  ImgGrassEngi,
  ImgIcon,
  TextDescriptionInside,
  TextSubTitle,
  TextTitleCard,
  TextTitleCardInside,
} from "./StyledEngineered";

interface CardsModel {
  area: string;
  sub: string;
  title: string;
  description: string;

  img: string;
}
const CardsContainer = [
  {
    area: "card1",
    sub: "Innovative XGrass Fiber",
    title: "TURF FIBER",
    description:
      "XGrass signature products are tufted with XGrass Fiber, our innovative artificial grass fiber that replicates the look of healthy, natural grass.",
    img: require("../../../../assets/image/fiber-icon.png"),
  },
  {
    area: "card2",
    sub: "Innovative XGrass Fiber",
    title: "BACKING",
    description:
      "Our artificial turf products feature a variety of backing options to best suit your end application.",
    img: require("../../../../assets/image/backing-icon.png"),
  },
  {
    area: "card3",
    sub: "Polygreen Play Absorption",
    title: "PADDING",
    description:
      "Polygreen Play attenuation padding offers the ultimate shock absorption for playgrounds and play areas.",
    img: require("../../../../assets/image/padding-icon.png"),
  },
  {
    area: "card4",
    sub: "Environmentally-Friendly Infill",
    title: "INFILL",
    description:
      "We’re proud to offer a variety of safe, effective infill options that reduce compaction and ensure that your XGrass system retains its full look.",
    img: require("../../../../assets/image/infill-icon.png"),
  },
  {
    area: "card5",
    sub: "Quick-Drain & Dry Tile",
    title: "DRAIN TILE",
    description:
      "Optional drain tile can be installed beneath our turf products to provide a cleaner drainage path for water and pet waste.",
    img: require("../../../../assets/image/drain-icon.png"),
  },
  {
    area: "card6",
    sub: "Install with Confidence",
    title: "TOOLS & ADHESIVES",
    description:
      "XGrass offers tools, tapes and adhesive products based on years of proven experience so that you can install with confidence.",
    img: require("../../../../assets/image/bases-icon.png"),
  },
];

const Engineered = () => {
  return (
    <DivContainerEngineered>
      <DivSandwichContainer>
        <DivImgSplit1>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../../../assets/image/split-1.png")}
          />
        </DivImgSplit1>
        <DivImgSplit2>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../../../assets/image/split-2.png")}
          />
        </DivImgSplit2>
        <DivImgSplit3>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../../../assets/image/split-3.png")}
          />
        </DivImgSplit3>
        <DivImgSplit4>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../../../assets/image/split-4.png")}
          />
        </DivImgSplit4>
        <DivImgSplit5>
          <ImgGrassEngi
            alt="split 1"
            src={require("../../../../assets/image/split-5.png")}
          />
        </DivImgSplit5>
      </DivSandwichContainer>
      <DivContainerSandText>
        <DivTextTitle area="title">
          <TextTitleCard>ENGINEERED TO PERFORM</TextTitleCard>
        </DivTextTitle>
        {CardsContainer.map((item: CardsModel, index: number) => {
          const { area, sub, title, description, img } = item;
          return (
            <DivCardInfo key={index} area={area}>
              <TextSubTitle area="sub">{sub}</TextSubTitle>
              <TextTitleCardInside area="title">{title}</TextTitleCardInside>
              <TextDescriptionInside area="desc">
                {description}
              </TextDescriptionInside>
              <DivImgIconContainer area="icon">
                <ImgIcon alt="icon" src={prefix + img} />
              </DivImgIconContainer>
            </DivCardInfo>
          );
        })}
      </DivContainerSandText>
    </DivContainerEngineered>
  );
};

export default Engineered;
