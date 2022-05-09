import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const { query } = useRouter();

  return <div>{query?.name ? `${query?.name}` : "no existo fails"}</div>;
};

export default index;
