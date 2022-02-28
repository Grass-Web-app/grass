import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const { pathname, push } = useRouter();
  useEffect(() => {
    if (pathname.includes("/description")) push("/");
  }, []);

  return <div></div>;
};

export default index;
