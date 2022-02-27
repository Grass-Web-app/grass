import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../../styles/createGlobalStyles";

export const DivCardsContainer = styled.div`
  height: fit-content;
`;

export const DivCard = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 15%;
  padding-right: 15%;
  background: ${(props) => props.color};
  height: 35vh;
  display: grid;
  grid-template-columns: 35% 65%;
`;

export const DivImgContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
export const ImgOnly = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivRightInfo = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 10% 10% 80%;
  grid-template-areas:
    "icon sub"
    "icon title"
    ". desc";
`;

export const Psubtitle = styled.p`
  grid-area: ${(props) => props.area};
  margin: 0;
  ${GetFamilyHeader()}
  color: grey;
`;

export const H4title = styled.h4`
  grid-area: ${(props) => props.area};
  margin: 0;
  ${GetFontFamilyHeader()}
  color: grey;
`;

export const DescriptionOnly = styled.p`
  grid-area: ${(props) => props.area};
  ${GetNormalFamily()}
`;

export const Divicon = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgIconDescription = styled.img`
  height: 100%;
`;
