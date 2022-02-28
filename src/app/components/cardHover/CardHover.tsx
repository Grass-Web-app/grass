import { useRouter } from "next/router";
import React, { useState } from "react";
import { prefix } from "../../../pages/_app";
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
  id: number;
}) => {
  const { Title, SubTitle, Description, img, id } = props;
  const { push } = useRouter();
  const GotoGrass = (route: string) => {
    push(prefix + `description/${route}`);
  };
  const [ShowAnimation, setShowAnimation] = useState(false);
  const handleMouse = () => {
    setShowAnimation(!ShowAnimation);
  };
  return (
    <DivContainerHover
      onClick={() => GotoGrass(`${id}`)}
      onMouseOver={handleMouse}
      onMouseOut={handleMouse}
    >
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
