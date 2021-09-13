import * as React from "react"
import Layout from "../components/Layout/index"
// import TypeWriter from "../components/TypeWriter/index"
import Box from "../components/Box/index"
import styled from "styled-components"

const ModifiedFirstBox= styled(Box)`
  background-color: yellow;
  font-size: 2rem;
  font-weight: bold;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: row1-start;
  grid-row-end: 3;
`;

const ModifiedSecondBox= styled(Box)`
  background-color: green;
  font-size: 2rem;
  font-weight: bold;
  grid-column-start: 3;
`;

const ModifiedThirdBox= styled(Box)`
  background-color: blue;
  font-size: 2rem;
  font-weight: bold;
`;

const IndexPage = () => (
  <Layout>
      <ModifiedFirstBox>1</ModifiedFirstBox>
      <ModifiedSecondBox>2</ModifiedSecondBox>
      <ModifiedThirdBox>3</ModifiedThirdBox>
      {/* <TypeWriter></TypeWriter> */}
  </Layout>
)

export default IndexPage
