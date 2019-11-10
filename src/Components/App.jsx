import React from "react";
import Carousel from "./Carousel/Carousel";
import Team from "./Team/Team";
import Styled from "styled-components";

const Container = Styled.div`
    max-width: 950px;
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
