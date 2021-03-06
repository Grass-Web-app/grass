import React, { useEffect, useState } from "react";
import CardHover from "../cardHover/CardHover";
import useAxiosGet from "../Hooks/useAxiosGet";
import { DivContainerGrid } from "./StyledGridHover";

interface IDataApi {
  data: { data: IDataCarousels[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataCarousels {
  description: string;
  id: number;
  subtitle: string;
  title: string;
  catalogue_headers: {
    catalogue: number;
    id: string;
    picture: string;
    title: string;
  }[];
}
const GridHover = () => {
  const [Contenidos, setContenidos] = useState([]);
  const { Get } = useAxiosGet("catalogues/public/catalogue", {
    completeInterceptor: {
      action: (data: IDataApi) => {
        setContenidos(data.data.data);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });

  useEffect(() => {
    Get();
  }, []);
  return (
    <DivContainerGrid>
      {Contenidos.length !== 0 &&
        Contenidos.map((item: IDataCarousels, index: number) => {
          const { title, subtitle, description, catalogue_headers, id } = item;
          return (
            <div key={index}>
              <CardHover
                id={id}
                Title={title}
                SubTitle={subtitle}
                Description={description}
                img={catalogue_headers[0]?.picture}
              />
            </div>
          );
        })}
    </DivContainerGrid>
  );
};

export default GridHover;
