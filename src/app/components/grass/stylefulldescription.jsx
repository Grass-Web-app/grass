import styled from "styled-components";
import {
  GetFamilyHeader,
  GetFontFamilyHeader,
} from "../../../styles/createGlobalStyles";

export const DivFullDescContainer = styled.div`
  height: 30vh;
  padding-left: 15%;
  padding-right: 15%;
  background: #f5f5f5;
`;

export const DivTrhee = styled.div`
  display: flex;
  ${GetFamilyHeader()}
`;
export const PthreeNavigation = styled.p`
  color: ${(props) => props.red === "true" && "orange"};
  padding-left: 5px;
  cursor: pointer;
`;

export const H3TitleDesc = styled.h2`
  margin-left: 10%;
  margin-right: 10%;
  ${GetFontFamilyHeader()}
  color: grey;
  text-align: center;
`;

export const PDescription = styled.p`
  margin-left: 10%;
  margin-right: 10%;
  ${GetFontFamilyHeader()}
  color: grey;
  text-align: center;
`;
