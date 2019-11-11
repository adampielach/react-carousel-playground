import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Team from "./Team/Team";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  const [id, setId] = useState(0);
  const onClickHandler = id => {
    setId(id);
  };
  return (
    <Container>
      <Carousel startIndex={id} />
      <Team onClickHandler={onClickHandler} />
    </Container>
  );
}

export default App;
