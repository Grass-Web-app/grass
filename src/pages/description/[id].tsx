import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardsOfPics from "../../app/components/grass/CardsOfPics";
import CarouselGrass from "../../app/components/grass/CarouselGrass";
import FullDescription from "../../app/components/grass/FullDescription";
import GrassHeader from "../../app/components/grass/GrassHeader";
import { DivGrassDescription } from "../../app/components/grass/styledgrass";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";


const index = ({ post }) => {
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
  console.log(post);
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
  const val = "1";
  return {
    paths: [{ params: { id: val } }],
    fallback: false,
  };
}
export async function getStaticProps({params}: any) {
  return {
      props: {
          post: {
              id: params.id,
              title: `Post ${params.id} title`
          }
      }
  }
}
export default index;
