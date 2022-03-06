import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardsOfPics from "../../app/components/grass/CardsOfPics";
import CarouselGrass from "../../app/components/grass/CarouselGrass";
import FullDescription from "../../app/components/grass/FullDescription";
import GrassHeader from "../../app/components/grass/GrassHeader";
import { DivGrassDescription } from "../../app/components/grass/styledgrass";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [Id, setId] = useState<any>(0);
  useEffect(() => {
    if (localStorage.getItem("hgte") !== null)
      setId(parseInt(localStorage.getItem("hgte")));
  }, []);

  return (
    <HeaderFooterWraper>
      {Id !== 0 && (
        <DivGrassDescription>
          <GrassHeader id={Id} />
          <FullDescription id={Id} />
          <CarouselGrass />
          <CardsOfPics />
        </DivGrassDescription>
      )}
    </HeaderFooterWraper>
  );
};

export default index;
