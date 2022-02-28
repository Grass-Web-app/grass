import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardsOfPics from "../../app/components/grass/CardsOfPics";
import CarouselGrass from "../../app/components/grass/CarouselGrass";
import FullDescription from "../../app/components/grass/FullDescription";
import GrassHeader from "../../app/components/grass/GrassHeader";
import { DivGrassDescription } from "../../app/components/grass/styledgrass";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const val = "1";
const index = () => {
  const { query: routeQuery } = useRouter();
  const [Id, setId] = useState<any>(0);
  useEffect(() => {
    if (routeQuery && routeQuery?.id) {
      console.log(routeQuery);
      console.log(routeQuery?.id);
      setId(parseInt(`${routeQuery.id}`));
      //setId(routeId);
    }
  }, [routeQuery]);

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

export async function getStaticPaths() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const paths = arr.map((item: number) => {
    return { params: { id: `${item}` } };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      post: {
        id: params.id,
        title: `Post ${params.id} title`,
      },
    },
  };
}
export default index;
