import React, { useEffect, useState } from "react";
import { prefix } from "../../../pages/_app";
import useAxiosGet from "../Hooks/useAxiosGet";

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
interface IFooterListData {
  data: {
    code: number;
    data: IFooterOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IFooterOnlyList {
  additional: string;
  address: string;
  cell_phone: string;
  facebook: string;
  have_facebook: boolean;
  have_instagram: boolean;
  have_linkedIn: boolean;
  have_pinterest: boolean;
  have_twitter: boolean;
  have_youtube: boolean;
  id: number;
  instagram: string;
  linkedIn: string;
  local_phone: string;
  name: string;
  pinterest: string;
  twitter: string;
  youtube: string;
}
const Footer = () => {
  const [FooterInfo, setFooterInfo] = useState<IFooterOnlyList | null>(null);
  const { Get } = useAxiosGet("footer/public/", {
    completeInterceptor: {
      action: (data: IFooterListData) => {
        if (data.data.data.length !== 0) setFooterInfo(data.data.data[0]);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });
  useEffect(() => {
    Get();
  }, []);

  function GotoURL(url: string) {
    window.open(url, "_blank");
  }
  return (
    <DivFooterContainer>
      {FooterInfo !== null && (
        <>
          <DivLeftContact>
            <DivInfoContainer>
              <DivImgMark>
                <ImgMArk
                  alt="logo"
                  src={prefix + require("../../../../assets/image/mexico.png")}
                />
              </DivImgMark>
              <PtextDir>{FooterInfo.name}</PtextDir>
              <PtextDir>{FooterInfo.address}</PtextDir>
              <PtextDir>{FooterInfo.additional}</PtextDir>
              <PtextDir>{FooterInfo.cell_phone}</PtextDir>
              <PtextDir>{FooterInfo.local_phone}</PtextDir>
              <PtextDir>
                © 2022 {FooterInfo.name} | All Rights Reserved.
              </PtextDir>
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
            <PtextDir>Siguenos en:</PtextDir>
            <DivIconsContainersFlex>
              {FooterInfo.have_facebook && (
                <DivIconsContainer onClick={() => GotoURL(FooterInfo.facebook)}>
                  <ImgIcons
                    alt="icon"
                    src={require("../../../../assets/icons/icons8-facebook-nuevo.svg")}
                  />
                </DivIconsContainer>
              )}
              {FooterInfo.have_pinterest && (
                <DivIconsContainer
                  onClick={() => GotoURL(FooterInfo.pinterest)}
                >
                  <ImgIcons
                    alt="icon"
                    src={require("../../../../assets/icons/icons8-pinterest.svg")}
                  />
                </DivIconsContainer>
              )}
              {FooterInfo.have_youtube && (
                <DivIconsContainer onClick={() => GotoURL(FooterInfo.youtube)}>
                  <ImgIcons
                    alt="icon"
                    src={require("../../../../assets/icons/icons8-youtube-play.svg")}
                  />
                </DivIconsContainer>
              )}
              {FooterInfo.have_twitter && (
                <DivIconsContainer onClick={() => GotoURL(FooterInfo.twitter)}>
                  <ImgIcons
                    alt="icon"
                    src={require("../../../../assets/icons/icons8-twitter.svg")}
                  />
                </DivIconsContainer>
              )}
              {FooterInfo.have_instagram && (
                <DivIconsContainer
                  onClick={() => GotoURL(FooterInfo.instagram)}
                >
                  <ImgIcons
                    alt="icon"
                    src={require("../../../../assets/icons/icons8-instagram.svg")}
                  />
                </DivIconsContainer>
              )}
              <DivIconsContainer onClick={() => GotoURL(FooterInfo.linkedIn)}>
                <ImgIcons
                  alt="icon"
                  src={require("../../../../assets/icons/icons8-linkedin.svg")}
                />
              </DivIconsContainer>
            </DivIconsContainersFlex>
          </DivRightFollow>
        </>
      )}
    </DivFooterContainer>
  );
};

export default Footer;
