import React from "react";
import { prefix } from "../../../pages/_app";
import {
  DivHeaderGrassContainer,
  H2HeaderGrass,
  ImgGrassPicture,
} from "./styledheader";

const GrassHeader = (props: { id: number }) => {
  const { id } = props;
  return (
    <DivHeaderGrassContainer>
      <ImgGrassPicture
        alt="picture bg"
        src={prefix + require("../../../../assets/image/lanmark-bg.jpeg")}
      />
      <H2HeaderGrass>GOLF SOLITION {id}</H2HeaderGrass>
    </DivHeaderGrassContainer>
  );
};

export default GrassHeader;
