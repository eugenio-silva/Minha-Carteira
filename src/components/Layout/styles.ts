import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  height: 100vh;

  grid-template-areas:
    "AS MH"
    "AS CT";
`;
