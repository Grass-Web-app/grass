import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
} from "../../../styles/createGlobalStyles";

export const DivContainerShow = styled.div`
  min-height: 60vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 22px -2px black;
`;
export const DivHidenSee = styled.div`
  position: relative;
  overflow: hidden;
  height: 60vh;
`;
export const DivFrameContainer = styled.div`
  min-height: 130vh;
  position: relative;
`;
export const KidsFrame = styled.iframe`
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0;
  bottom: 50%;
  margin: auto;
  border: 0 none;
  width: 100%;
  height: 100%;
`;
export const H2Title = styled.h2`
  ${GetFontFamilyHeader()}
  font-weight: 400;
  font-size: 50px;
  margin: 0;
  text-shadow: 1px 1px 2px black;
  color: white;
`;
export const Pwords = styled.p`
  ${GetFamilyHeader()}
  font-size: 25px;
  margin: 0;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px black;
`;
export const DivWordsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
`;
