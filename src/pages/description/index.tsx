import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const { pathname, push } = useRouter();
  useEffect(() => {
    console.log("prueba mistica");
    if (pathname.includes("/description")) push("/");
  }, []);

  return <div></div>;
};

export default index;
