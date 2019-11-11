import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
  width: 100%;
  max-height: 100%;
  animation: fadeIn 0.5s ease-in-out alternate;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  line-height: 25px;
  text-align: center;
  font-weight: bold;
  display: block;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  cursor: pointer;
  font-size: 3rem;
  &:hover {
    color: rebeccapurple;
  }
`;

export default function Modal({ children, closeModal }) {
  return (
    <ModalWrapper>
      <CloseButton onClick={closeModal}>x</CloseButton>
      {children}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired
};
