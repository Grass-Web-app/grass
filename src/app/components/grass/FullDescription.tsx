import { useRouter } from "next/router";
import React from "react";
import { ICatalogueBigDescription } from "../../../pages/catalogue/[id]";
import {
  DivFullDescContainer,
  DivTrhee,
  H3TitleDesc,
  PDescription,
  PthreeNavigation,
} from "./stylefulldescription";

const FullDescription = (props: {
  information: ICatalogueBigDescription;
  PageTitle: string;
}) => {
  const { information, PageTitle } = props;
  const { push } = useRouter();

  const BackPage = (route: string) => {
    push(route);
  };
  return (
    <DivFullDescContainer>
      <DivTrhee>
        <PthreeNavigation onClick={() => BackPage("/")}>Home </PthreeNavigation>
        <PthreeNavigation>{">"}</PthreeNavigation>
        <PthreeNavigation red={true.toString()}> {PageTitle}</PthreeNavigation>
      </DivTrhee>
      <H3TitleDesc>{information?.title}</H3TitleDesc>
      <PDescription>{information?.description}</PDescription>
    </DivFullDescContainer>
  );
};

export default FullDescription;
