import React from "react";
import { ICatalogueCarouselDescription } from "../../../pages/catalogue/[name]";

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

const CardsOfPics = (props: {
  information: ICatalogueCarouselDescription[];
}) => {
  const { information } = props;

  return (
    <DivCardsContainer>
      {information.map((item: ICatalogueCarouselDescription, index: number) => {
        let place = "white";
        if (index % 2 === 0) place = "#F3F4F6";
        return (
          <DivCard color={place} key={item.id}>
            <DivImgContainer>
              <ImgOnly alt="image" src={item?.picture} />
            </DivImgContainer>
            <DivRightInfo>
              <Divicon area="icon">
                <ImgIconDescription
                  alt="image"
                  src={require("../../../../assets/icons/icon-golf.svg")}
                />
              </Divicon>
              <Psubtitle area="sub">{item?.subtitle}</Psubtitle>
              <H4title area="title">{item?.title}</H4title>
              <DescriptionOnly area="desc">{item?.description}</DescriptionOnly>
            </DivRightInfo>
          </DivCard>
        );
      })}
    </DivCardsContainer>
  );
};

export default CardsOfPics;
