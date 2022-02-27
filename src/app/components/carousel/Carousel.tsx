import React, { useEffect, useState } from "react";
import { prefix } from "../../../pages/_app";
import { DivContainerCarousel, ImgCarouselDescription } from "./styledcarousel";
const Carousel = (props: { images: string[]; time: number }) => {
  const { images, time } = props;
  const [state, setState] = useState(0);

  function next() {
    if (state < images.length - 1) setState(state + 1);
    else setState(0);
  }
  useEffect(() => {
    setTimeout(() => {
      next();
    }, time);

    return () => {
      next();
    };
  }, [state]);

  return (
    <DivContainerCarousel>
      <ImgCarouselDescription alt="img" src={prefix + images[state]} />
    </DivContainerCarousel>
  );
};

export default Carousel;
