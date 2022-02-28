import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardsOfPics from "../../app/components/grass/CardsOfPics";
import CarouselGrass from "../../app/components/grass/CarouselGrass";
import FullDescription from "../../app/components/grass/FullDescription";
import GrassHeader from "../../app/components/grass/GrassHeader";
import { DivGrassDescription } from "../../app/components/grass/styledgrass";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";


const index = ({id}) => {
 
console.log(id, "?????")
  return (
    <HeaderFooterWraper>
      {true && (
        <DivGrassDescription>
          <GrassHeader id={id.id} />
          <FullDescription id={id.id} />
          <CarouselGrass />
          <CardsOfPics />
        </DivGrassDescription>
      )}
    </HeaderFooterWraper>
  );
};

export async function getServerSideProps({ params }) {  
  return {
    props: {
      id: params,
    },
  };
}

export default index;
