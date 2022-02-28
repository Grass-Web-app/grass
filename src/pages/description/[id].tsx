import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardsOfPics from "../../app/components/grass/CardsOfPics";
import CarouselGrass from "../../app/components/grass/CarouselGrass";
import FullDescription from "../../app/components/grass/FullDescription";
import GrassHeader from "../../app/components/grass/GrassHeader";
import { DivGrassDescription } from "../../app/components/grass/styledgrass";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = ({ props }) => {
  console.log(props);
  return (
    <HeaderFooterWraper>
      {props?.Id !== 0 && (
        <DivGrassDescription>
          <GrassHeader id={props?.Id} />
          <FullDescription id={props?.Id} />
          <CarouselGrass />
          <CardsOfPics />
        </DivGrassDescription>
      )}
    </HeaderFooterWraper>
  );
};

export async function getServerSideProps(contex) {
  const { id } = contex.query;
  const { id: otroid } = contex.params;
  console.log(id, otroid);

  return {
    props: {
      Id: `${id}`,
    },
  };
}

export default index;
