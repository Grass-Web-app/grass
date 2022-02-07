import React from "react";
import { prefix } from "../../../pages/_app";
import CardHover from "../cardHover/CardHover";
import { DivContainerGrid } from "./StyledGridHover";

const Contenidos = [
  {
    Title: "LAWNS",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/callout-4.jpeg"),
  },
  {
    Title: "PLAYGROUND SURFACES",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/park.jpeg"),
  },
  {
    Title: "LANDSPACES",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/pool.jpeg"),
  },
  {
    Title: "GOLF",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/callout-4.jpeg"),
  },
  {
    Title: "PET",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/pet.jpeg"),
  },
  {
    Title: "SPORTS",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/sport.jpeg"),
  },
  {
    Title: "TENNIS",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/tennis.jpeg"),
  },
  {
    Title: "BOCCE",
    SubTitle: "Tour Quality Golf Greens",
    Description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime provident nisi. Sequi laboriosam hic facere eligendi voluptatem, officiis sint delectus porro nesciunt autem sapiente reprehenderit eaque exercitationem numquam dicta.",
    img: require("../../../../assets/image/bocce.jpeg"),
  },
];
interface CardHolderModel {
  Title: string;
  SubTitle: string;
  Description: string;

  img: string;
}
const GridHover = () => {
  return (
    <DivContainerGrid>
      {Contenidos.map((item: CardHolderModel, index: number) => {
        const { Title, SubTitle, Description, img } = item;
        return (
          <div key={index}>
            <CardHover
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
