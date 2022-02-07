import styled from "styled-components";
import { GetFontFamilyHeader } from "../../../styles/createGlobalStyles";

export const DivContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PWordDescription = styled.p`
  width: 45%;
  text-align: center;
  margin-top: 5%;
  font-family: "Source Sans Pro", sans-serif;
  color: #777777;
  font-size: 1.15rem;
  line-height: 1.33;
  font-weight: 400;
`;
export const PWordDescriptionRale = styled.p`
  ${GetFontFamilyHeader()}
  width: 45%;
  text-align: center;

  font-size: 1.5625rem;
  letter-spacing: 3px;
  line-height: 1.33;
  text-shadow: 1px 1px 2px black;
`;
