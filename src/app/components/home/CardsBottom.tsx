import React, { useEffect, useState } from "react";
import { prefix } from "../../../pages/_app";
import useAxiosGet from "../Hooks/useAxiosGet";
import {
  DivCardGrid,
  DivCardImgContainer,
  DivContainerCards,
  DivIconContainer,
  DivLeftTextContainer,
  DivRightTexContainer,
  H4TitleCard,
  ImgCardBottom,
  ImgIconCardBottom,
  PDescription,
  PWords,
} from "./StyledCardBottom";
interface IDataApi {
  data: { data: IDataCards[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataCards {
  description: string;
  id: number;
  image: string;
  subtitle: string;
  title: string;
}
const CardsBottom = () => {
  const [Cards, setCards] = useState<null | IDataCards[]>(null);
  const { Get } = useAxiosGet("big-cards/public", {
    completeInterceptor: {
      action: (data: IDataApi) => {
        setCards(data.data.data);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });
  useEffect(() => {
    Get();
  }, []);
  return (
    <DivContainerCards>
      <DivCardGrid>
        <DivLeftTextContainer>
          <DivIconContainer>
            <ImgIconCardBottom
              src={prefix + require("../../../../assets/image/park.png")}
            />
          </DivIconContainer>
          <PWords>{Cards !== null && Cards[0]?.subtitle}</PWords>
          <H4TitleCard>{Cards !== null && Cards[0]?.title}</H4TitleCard>
          <PDescription>{Cards !== null && Cards[0]?.description}</PDescription>
        </DivLeftTextContainer>
        <DivCardImgContainer>
          <ImgCardBottom
            alt="grass img"
            src={Cards !== null && Cards[0]?.image}
          />
        </DivCardImgContainer>
      </DivCardGrid>
      <DivCardGrid>
        <DivCardImgContainer>
          <ImgCardBottom
            alt="grass img"
            src={Cards !== null && Cards[1]?.image}
          />
        </DivCardImgContainer>
        <DivRightTexContainer>
          <DivIconContainer>
            <ImgIconCardBottom
              src={prefix + require("../../../../assets/image/mexico.png")}
            />
          </DivIconContainer>
          <PWords>{Cards !== null && Cards[1]?.subtitle}</PWords>
          <H4TitleCard>{Cards !== null && Cards[1]?.title}</H4TitleCard>
          <PDescription>{Cards !== null && Cards[1]?.description}</PDescription>
        </DivRightTexContainer>
      </DivCardGrid>
    </DivContainerCards>
  );
};

export default CardsBottom;
