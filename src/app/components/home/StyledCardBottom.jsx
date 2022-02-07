import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../../styles/createGlobalStyles";

export const DivContainerCards = styled.div``;

export const DivCardGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 60vh;
`;

export const DivCardImgContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const DivRightTexContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  padding-left: 5%;
  padding-right: 35%;
  justify-content: center;
`;

export const ImgCardBottom = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DivLeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  padding-left: 35%;
  padding-right: 5%;
  justify-content: center;
`;

export const DivIconContainer = styled.div`
  width: 10%;
  height: auto;
`;

export const ImgIconCardBottom = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PWords = styled.p`
  color: #aaaaaa;
  ${GetFamilyHeader()}
  margin: 0;
  padding: 0;
  padding-top: 4%;
`;
export const H4TitleCard = styled.h4`
  border-bottom-style: solid;
  border-width: 2px;
  border-color: #c4551f;
  color: #696969;
  width: 92px;
  white-space: nowrap;
  font-size: 1.5rem;
  ${GetFontFamilyHeader()}
  padding: 0;
  margin: 0;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const PDescription = styled.p`
  ${GetNormalFamily()}
  font-size: 1.1rem;
`;
