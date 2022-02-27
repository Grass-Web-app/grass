import styled from "styled-components";

export const DivCarouselGrassContainer = styled.div`
  height: 65vh;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const DivLeftInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 5% 5% 40% 50%;
  grid-template-areas:
    "icon sub"
    "icon title"
    ". Desc"
    ". bene";
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const DivRightCarousel = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PSubtitleCarousel = styled.p`
  grid-area: ${(props) => props.area};
  margin: 0;
`;

export const PTitleCarousel = styled.h4`
  grid-area: ${(props) => props.area};

  margin: 0;
`;
export const DivDescription = styled.div`
  grid-area: ${(props) => props.area};
  height: 100%;
  width: 100%;
`;
export const PdescriptionCaroou = styled.p`
  grid-area: ${(props) => props.area};
`;

export const PBenefitsTitle = styled.p`
  grid-area: ${(props) => props.area};
`;

export const DivBenefits = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: fit-content;
  border-color: red;
`;
export const Pbenefits = styled.p`
  width: 100%;
  height: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
  margin: 0;
  padding: 3%;
`;

export const DivBenefitsList = styled.div`
  grid-area: ${(props) => props.area};
  grid-template-rows: 10% 90%;
  height: 100%;
  width: 100%;
`;

export const DivIcon = styled.div`
  grid-area: ${(props) => props.area};

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgIconCarousel = styled.img`
  width: 50%;
  height: auto;
`;
