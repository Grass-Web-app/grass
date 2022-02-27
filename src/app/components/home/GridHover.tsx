import React from "react";
import { prefix } from "../../../pages/_app";
import CardHover from "../cardHover/CardHover";
import { DivContainerGrid } from "./StyledGridHover";

const Contenidos = [
  {
    id: 1,
    Title: "LAWNS",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/callout-4.jpeg"),
  },
  {
    id: 2,
    Title: "PLAYGROUND SURFACES",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/park.jpeg"),
  },
  {
    id: 3,
    Title: "LANDSPACES",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/pool.jpeg"),
  },
  {
    id: 4,
    Title: "GOLF",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/callout-4.jpeg"),
  },
  {
    id: 5,
    Title: "PET",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/pet.jpeg"),
  },
  {
    id: 6,
    Title: "SPORTS",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/sport.jpeg"),
  },
  {
    id: 7,
    Title: "TENNIS",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/tennis.jpeg"),
  },
  {
    id: 8,
    Title: "BOCCE",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/bocce.jpeg"),
  },
];
interface CardHolderModel {
  id: number;
  Title: string;
  SubTitle: string;
  Description: string;

  img: string;
}
const GridHover = () => {
  return (
    <DivContainerGrid>
      {Contenidos.map((item: CardHolderModel, index: number) => {
        const { Title, SubTitle, Description, img, id } = item;
        return (
          <div key={index}>
            <CardHover
              id={id}
              Title={Title}
              SubTitle={SubTitle}
              Description={Description}
              img={prefix + img}
            />
          </div>
        );
      })}
    </DivContainerGrid>
  );
};

export default GridHover;
