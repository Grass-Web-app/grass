import React, { useState } from "react";
import {
  DivContainerCard,
  DivContainerHover,
  DivImgCOntainer,
  DivRelativeBlack,
  DivRelativeOne,
  DivRelativeTwo,
  H2Desc,
  H2DescHide,
  ImgHover,
  PText,
  PTitle,
} from "./styledCardHover";
const CardHover = (props: {
  Title: string;
  SubTitle: string;
  Description: string;
  img: string;
}) => {
  const { Title, SubTitle, Description, img } = props;
  const [ShowAnimation, setShowAnimation] = useState(false);
  const handleMouse = () => {
    setShowAnimation(!ShowAnimation);
  };
  return (
    <DivContainerHover onMouseOver={handleMouse} onMouseOut={handleMouse}>
      <DivImgCOntainer>
        <ImgHover alt="grass" src={img} />
      </DivImgCOntainer>
      <DivRelativeOne>
        <H2Desc animation={ShowAnimation.toString()}>{Title}</H2Desc>
      </DivRelativeOne>
      <DivRelativeBlack animation={ShowAnimation.toString()}></DivRelativeBlack>
      <DivRelativeTwo animation={ShowAnimation.toString()}>
        <DivContainerCard>
          <PTitle animation={(!ShowAnimation).toString()}>{SubTitle}</PTitle>
          <H2DescHide animation={(!ShowAnimation).toString()}>
            {Title}
          </H2DescHide>
          <PText animation={(!ShowAnimation).toString()}>{Description}</PText>
        </DivContainerCard>
      </DivRelativeTwo>
    </DivContainerHover>
  );
};

export default CardHover;
