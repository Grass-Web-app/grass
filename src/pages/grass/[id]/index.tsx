import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CardsOfPics from "../../../app/components/grass/CardsOfPics";
import CarouselGrass from "../../../app/components/grass/CarouselGrass";
import FullDescription from "../../../app/components/grass/FullDescription";
import GrassHeader from "../../../app/components/grass/GrassHeader";
import { DivGrassDescription } from "../../../app/components/grass/styledgrass";
import HeaderFooterWraper from "../../../app/components/layout/InitWraper";

const index = () => {
  const { query: routeQuery, back } = useRouter();
  const [Id, setId] = useState<any>(0);
  useEffect(() => {
    if (routeQuery && routeQuery.id) {
      const routeId: any = routeQuery.id;
      setId(parseInt(routeId));
      //setId(routeId);
    }
  }, [routeQuery]);
  return (
    <HeaderFooterWraper>
      <DivGrassDescription>
        <GrassHeader id={Id}/>
        <FullDescription id={Id}/>
        <CarouselGrass />
        <CardsOfPics />
      </DivGrassDescription>
    </HeaderFooterWraper>
  );
};

export default index;
