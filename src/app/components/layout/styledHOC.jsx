import styled from "styled-components";

export const DivContainerHOC = styled.div`
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: fit-content;
  overflow: hidden;
`;
