import React from "react";
import Carousel from "./Carousel/Carousel";
import Team from "./Team/Team";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Carousel />
      <Team />
    </Container>
  );
}

export default App;
