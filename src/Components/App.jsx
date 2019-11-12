import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import Team from "./Team/Team";
import Modal from "./Modal/Modal";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 768px) {
    background: rgba(255, 255, 255, 0.7);
  }
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
      {isOpened && (
        <Modal closeModal={handleClose}>
          <Carousel startIndex={id} />
        </Modal>
      )}
      <Team onClickHandler={onClickHandler} />
    </Container>
  );
}

export default App;
