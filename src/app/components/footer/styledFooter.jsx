import styled from "styled-components";
import { GetNormalFamily } from "../../../styles/createGlobalStyles";

export const DivFooterContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  height: 40vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #2c2d2e;
  box-shadow: inset 0 0 25px 20px black;
  padding-top: 2%;
`;

export const DivLeftContact = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: end;
  padding-right: 5%;
`;
export const DivInfoContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;
export const DivCenterMarks = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". rg rg ."
    "versa tour swi ice"
    ". out dura .";
`;

export const DivRightFollow = styled.div`
  height: 100%;
  padding-left: 5%;
`;

export const PtextDir = styled.p`
  color: white;
  ${GetNormalFamily()}
`;

export const DivImgMark = styled.div`
  height: 10vh;
  width: 20vh;
`;

export const ImgMArk = styled.img`
  width: 100%;
  height: 100%;
`;

export const DivIconsContainer = styled.div`
  cursor: pointer;
  width: 5vh;
  height: 5vh;
  margin: 1vh;
`;

export const ImgIcons = styled.img`
  width: 100%;
  height: 100%;
`;

export const DivIconsContainersFlex = styled.div`
  display: flex;
`;

export const DivContainerMark = styled.div`
  grid-area: ${(props) => props.area};

  display: flex;
  align-items: center;
`;

export const ImgLogos = styled.img`
  width: 100%;
`;
