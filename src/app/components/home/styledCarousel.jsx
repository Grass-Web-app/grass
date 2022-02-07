import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../../styles/createGlobalStyles";

export const DivCarouselContainer = styled.div`
  padding-bottom: 5%;
`;

export const DivMessage = styled.div`
  margin-top: 4%;
  margin-bottom: 4%;
`;
export const Ptitle = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  ${GetFamilyHeader()}
  font-weight: 100;
`;

export const H3Mark = styled.h3`
  text-align: center;
  margin: 0;
  padding: 0;
  padding-top: 1%;
  font-size: 2rem;
  ${GetFontFamilyHeader()}
  font-weight: 100;
`;
export const DivCarousel = styled.div`
  display: grid;
  grid-template-columns: 20% 30% 30% 20%;
  height: fit-content;
`;

export const DivImgContainer = styled.div``;

export const DivTextContainer = styled.div`
  padding-top: 18%;
  margin-left: 7%;
  margin-right: 7%;
`;

export const LeftArrow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const RightArrow = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonImgArrow = styled.button`
  width: 6vh;
  height: 6vh;
  cursor: pointer;
  border-radius: 10px;
  border-style: none;
  background: #efefef;
  box-shadow: -3px 3px 6px 0px rgb(0 0 0 / 15%);
`;
export const ImgArrow = styled.img`
  width: 50%;
  ${(props) => props.rotate && "transform: rotate(180deg);"}
`;

export const H4TitleCarousel = styled.h4`
  ${GetFontFamilyHeader()}
  font-size: 1.3rem;
`;

export const PDescriptionCarousel = styled.p`
  ${GetNormalFamily()}
`;
export const ImgCarousell = styled.img`
  width: 100%;
  height: auto;
`;
