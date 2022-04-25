import React, { useEffect, useState } from "react";
import useAxiosGet from "../Hooks/useAxiosGet";
import { DivBackContainer, Pdescription, PTitle } from "./StyledShowback";
interface IParallListData {
  data: {
    code: number;
    data: IparallaxOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IparallaxOnlyList {
  description: string;
  id: number;
  title: string;
}
const ShowBack = () => {
  const [ParallaxList, setParallaxList] = useState<null | IparallaxOnlyList>(
    null
  );
  const { Get } = useAxiosGet("parallax/public/", {
    completeInterceptor: {
      action: (data: IParallListData) => {
        setParallaxList(data.data.data[0]);
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
    <DivBackContainer>
      <PTitle>{ParallaxList?.title}</PTitle>
      <Pdescription>{ParallaxList?.description}</Pdescription>
    </DivBackContainer>
  );
};

export default ShowBack;
