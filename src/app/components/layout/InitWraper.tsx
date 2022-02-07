import React from "react";
import Head from "next/head";
import { GlobalStyle } from "../../../styles/createGlobalStyles";
import BodyColorChange from "../BodyColorChange";
import { prefix } from "../../../pages/_app";
import Footer from "../footer/Footer";

const HeaderFooterWraper = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <BodyColorChange />
      <Head>
        <title>El Hector</title>
        <link rel="icon" href={prefix + "/favicon.ico"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link key={0} rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&family=Raleway:wght@100;400&family=Source+Sans+Pro:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {children}
      <Footer />
    </div>
  );
};

export default HeaderFooterWraper;
