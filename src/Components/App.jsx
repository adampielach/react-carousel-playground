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
  const [isOpened, setOpenModal] = useState(false);
  const onClickHandler = id => {
    setId(id);
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Container>
      {isOpened && <Carousel startIndex={id} />}
      <div onClick={handleClose}>CLOSE</div>
      <Team onClickHandler={onClickHandler} />
    </Container>
  );
}

export default App;
