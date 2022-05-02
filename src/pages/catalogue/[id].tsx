import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardsOfPics from "../../app/components/grass/CardsOfPics";
import CarouselGrass from "../../app/components/grass/CarouselGrass";
import FullDescription from "../../app/components/grass/FullDescription";
import GrassHeader from "../../app/components/grass/GrassHeader";
import { DivGrassDescription } from "../../app/components/grass/styledgrass";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";
import useAxiosGet from "../../app/components/Hooks/useAxiosGet";

interface IDataApi {
  data: { data: IDataCatalogue; code: number };
  status: number;
  statusText: string;
}

export interface IDataCatalogue {
  description: string;
  id: number;
  subtitle: string;
  title: string;
  catalogue_headers: ICatalogueHeaders[];
  catalogue_big_description: ICatalogueBigDescription[];
  catalogue_big_card_carousel: ICatalogueBigCardCarousel[];
  catalogue_carousel_description: ICatalogueCarouselDescription[];
}
export interface ICatalogueHeaders {
  catalogue: number;
  id: string;
  picture: string;
  title: string;
}
export interface ICatalogueBigDescription {
  catalogue: number;
  description: string;
  id: number;
  title: string;
}
export interface ICatalogueBigCardCarousel {
  benefits: string;
  catalogue: number;
  description: string;
  id: number;
  subtitle: string;
  title: string;
}
export interface ICatalogueCarouselDescription {
  catalogue: number;
  description: string;
  id: number;
  picture: string;
  subtitle: string;
  title: string;
}
const index = () => {
  const [Contenido, setContenido] = useState<IDataCatalogue | null>(null);
  const [Carousel, setCarousel] = useState<string[]>([]);
  const router = useRouter();
  const catalogueID = router.query.id;
  console.log(catalogueID);
  const { Get } = useAxiosGet(`catalogues/public/catalogue/${catalogueID}`, {
    completeInterceptor: {
      action: (dat: IDataApi) => {
        setContenido(dat.data.data);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });

  //useEffect(() => {
  //  Get();
  //}, []);

  useEffect(() => {
    //if (localStorage.getItem("hgte") !== null)
    //  {
    //
    //  }
    if (catalogueID !== "") {
      Get();
    }
  }, []);
  useEffect(() => {
    if (Contenido !== null) {
      setCarousel(
        Contenido?.catalogue_carousel_description.map(
          (item: ICatalogueCarouselDescription) => {
            return item.picture;
          }
        )
      );
    }
  }, [Contenido]);

  return (
    <HeaderFooterWraper>
      <DivGrassDescription>
        {Contenido !== null && (
          <GrassHeader information={Contenido?.catalogue_headers[0]} />
        )}
        {Contenido !== null && (
          <FullDescription
            information={Contenido?.catalogue_big_description[0]}
            PageTitle={Contenido?.catalogue_headers[0].title}
          />
        )}
        {Contenido !== null && (
          <CarouselGrass
            information={Contenido?.catalogue_big_card_carousel[0]}
            carousel={Carousel}
          />
        )}
        {Contenido !== null && (
          <CardsOfPics
            information={Contenido?.catalogue_carousel_description}
          />
        )}
      </DivGrassDescription>
    </HeaderFooterWraper>
  );
};

export default index;
