import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../../styles/createGlobalStyles";

export const DivImgCOntainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const DivContainerHover = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImgHover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivRelativeOne = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
`;
export const DivRelativeBlack = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: black;
  width: ${(props) => (props.animation === "true" ? "100%" : "0%")};
  height: ${(props) => (props.animation === "true" ? "100%" : "0%")};
  opacity: 0.7;
  z-index: 2;
  transition: 0.4s;
`;
export const H2Desc = styled.h2`
  transition: 0.3s;
  color: white;
  ${(props) => props.animation === "true" && "font-size: 0;"}
  ${GetFontFamilyHeader()}
`;

export const H2DescHide = styled.h2`
  transition: 0.4s;
  color: white;
  ${(props) => props.animation === "true" && "font-size: 0;"}
  ${GetFontFamilyHeader()}
`;

export const PTitle = styled.p`
  color: white;
  ${GetFamilyHeader()}
  font-size: ${(props) => (props.animation === "true" ? "0" : "18")}px;
  transition: 0.4s;
`;
export const PText = styled.p`
  
  ${(props) => (props.animation === "false" && "transition-delay: 0.4s;" )};
  color: white;
  ${GetNormalFamily()}
  font-size: ${(props) => (props.animation === "true" ? "0" : "18")}px;

  width: 100%;
`;
export const DivContainerCard = styled.div`
  margin-left: 8%;
  margin-right: 6%;
  height: fit-content;
  overflow: hidden;
`;

export const DivRelativeTwo = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: transparent;
  width: ${(props) => (props.animation === "true" ? "100%" : "0%")};
  height: ${(props) => (props.animation === "true" ? "100%" : "0%")};

  z-index: 2;
  transition: 0.4s;
  display: flex;
  align-items: center;
`;
