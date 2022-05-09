import React, { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/home");
  }, []);

  return <></>;
};

export default index;
