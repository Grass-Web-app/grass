import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
  GetNormalFamily,
} from "../../../styles/createGlobalStyles";

export const DivCarouselContainer = styled.div`
  padding-bottom: 5%;
  background: white;
`;

export const DivMessage = styled.div`
  padding-top: 4%;
  padding-bottom: 4%;
`;
export const Ptitle = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  ${GetFamilyHeader()}
  font-weight: 100;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const H3Mark = styled.h3`
  text-align: center;
  margin: 0;
  padding: 0;
  padding-top: 1%;
  font-size: 1rem;
  ${GetFontFamilyHeader()}
  font-weight: 100;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
export const DivCarousel = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 50% 5% 45%;
  grid-template-areas:
    "img img img"
    "Larr . Rarr"
    "des des des";
  height: fit-content;
  @media screen and (min-width: 768px) {
    justify-items: center;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      "Larr img Rarr"
      "des des des";
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 20% 30% 30% 20%;
    grid-template-areas: "Larr des img Rarr";
    align-items: inherit;
  }
`;

export const DivImgContainer = styled.div`
  grid-area: ${(props) => props.area};
`;

export const DivTextContainer = styled.div`
  grid-area: ${(props) => props.area};
  padding-top: 18%;
  margin-left: 7%;
  margin-right: 7%;
`;

export const LeftArrow = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media screen and (min-width: 1024px) {
    align-items: flex-end;
  }
`;

export const RightArrow = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px) {
    align-items: flex-end;
  }
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
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;
export const ImgCarousell = styled.img`
  width: 100%;
  height: auto;
`;
