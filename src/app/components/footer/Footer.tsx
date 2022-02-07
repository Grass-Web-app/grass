import React from "react";
import { prefix } from "../../../pages/_app";

import {
  DivCenterMarks,
  DivContainerMark,
  DivFooterContainer,
  DivIconsContainer,
  DivIconsContainersFlex,
  DivImgMark,
  DivInfoContainer,
  DivLeftContact,
  DivRightFollow,
  ImgIcons,
  ImgLogos,
  ImgMArk,
  PtextDir,
} from "./styledFooter";
const Footer = () => {
  return (
    <DivFooterContainer>
      <DivLeftContact>
        <DivInfoContainer>
          <DivImgMark>
            <ImgMArk
              alt="logo"
              src={prefix + require("../../../../assets/image/mexico.png")}
            />
          </DivImgMark>
          <PtextDir>Nombre de la Marca</PtextDir>
          <PtextDir>Direccion</PtextDir>
          <PtextDir>Direccion</PtextDir>
          <PtextDir>tel: 999 999 9999</PtextDir>
          <PtextDir>Market info</PtextDir>
          <PtextDir>© 2022 MArca | All Rights Reserved.</PtextDir>
        </DivInfoContainer>
      </DivLeftContact>
      <DivCenterMarks>
        <DivContainerMark area="rg">
          <ImgLogos
            alt="mark logo"
            src={require("../../../../assets/image/logo 2.png")}
          />
        </DivContainerMark>
        <DivContainerMark area="versa">
          <ImgLogos
            alt="mark logo"
            src={require("../../../../assets/image/logo 1.png")}
          />
        </DivContainerMark>
        <DivContainerMark area="tour">
          <ImgLogos
            alt="mark logo"
            src={require("../../../../assets/image/logo 3.png")}
          />
        </DivContainerMark>
        <DivContainerMark area="swi">
          <ImgLogos
            alt="mark logo"
            src={require("../../../../assets/image/logo 4.png")}
          />
        </DivContainerMark>
        <DivContainerMark area="ice">
          <ImgLogos
            alt="mark logo"
            src={require("../../../../assets/image/logo 5.png")}
          />
        </DivContainerMark>
        <DivContainerMark area="out">
          <ImgLogos
            alt="mark logo"
            src={require("../../../../assets/image/logo 6.png")}
          />
        </DivContainerMark>
        <DivContainerMark area="dura">
          <ImgLogos
            alt="mark logo"
            src={require("../../../../assets/image/logo 7.png")}
          />
        </DivContainerMark>
      </DivCenterMarks>

      <DivRightFollow>
        <PtextDir>Follow us on:</PtextDir>
        <DivIconsContainersFlex>
          <DivIconsContainer>
            <ImgIcons
              alt="icon"
              src={require("../../../../assets/icons/icons8-facebook-nuevo.svg")}
            />
          </DivIconsContainer>
          <DivIconsContainer>
            <ImgIcons
              alt="icon"
              src={require("../../../../assets/icons/icons8-pinterest.svg")}
            />
          </DivIconsContainer>
          <DivIconsContainer>
            <ImgIcons
              alt="icon"
              src={require("../../../../assets/icons/icons8-youtube-play.svg")}
            />
          </DivIconsContainer>
          <DivIconsContainer>
            <ImgIcons
              alt="icon"
              src={require("../../../../assets/icons/icons8-twitter.svg")}
            />
          </DivIconsContainer>
          <DivIconsContainer>
            <ImgIcons
              alt="icon"
              src={require("../../../../assets/icons/icons8-instagram.svg")}
            />
          </DivIconsContainer>
          <DivIconsContainer>
            <ImgIcons
              alt="icon"
              src={require("../../../../assets/icons/icons8-linkedin.svg")}
            />
          </DivIconsContainer>
        </DivIconsContainersFlex>
      </DivRightFollow>
    </DivFooterContainer>
  );
};

export default Footer;
