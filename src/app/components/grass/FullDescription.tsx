import { useRouter } from "next/router";
import React from "react";
import {
  DivFullDescContainer,
  DivTrhee,
  H3TitleDesc,
  PDescription,
  PthreeNavigation,
} from "./stylefulldescription";

const FullDescription = (props: { id: number }) => {
  const { id } = props;
  const data = {
    title: "TOUR QUALITY GOLF GREENS & MORE",
    description:
      "With a history of designing synthetic grass golf greens that dates back to our company’s founding, we take the golf market very seriously.  In fact, it so important to us that we created an entire division run by golfers to develop the finest golf solutions in the industry.  Working with them, we have developed an entire line of synthetic turf systems designed specifically for golf applications.  So, whether you are looking to re-create the 12 th hole at Augusta in your backyard or just want to add some golf activities to your facility, XGrass has the turf for you.",
  };
  const { push } = useRouter();

  const BackPage = (route: string) => {
    push(route);
  };
  return (
    <DivFullDescContainer>
      <DivTrhee>
        <PthreeNavigation onClick={() => BackPage("/")}>Home </PthreeNavigation>
        <PthreeNavigation>{">"}</PthreeNavigation>
        <PthreeNavigation red={true.toString()}> {id}</PthreeNavigation>
      </DivTrhee>
      <H3TitleDesc>{data.title}</H3TitleDesc>
      <PDescription>{data.description}</PDescription>
    </DivFullDescContainer>
  );
};

export default FullDescription;
