import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SlideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: background: rgb(9,96,121);
  background: linear-gradient(0deg, rgba(9,96,121,1) 0%, rgba(9,96,121,0.8) 0%, rgba(0,255,231,0.8) 100%);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin: 0;
    color: white;
    text-shadow: -1px 3px 2px rgba(0,0,0,0.4);
  }
`;

const TextWrap = styled.div`
  padding: 6rem;
  border: 6px dashed rgba(255, 255, 255, 0.3);
  text-align: center;
  @media (max-width: 768px) {
    border-width: 3px;
    padding: 3rem;
  }
`;

const Role = styled.p`
  font-size: 4rem;
  @media (max-width: 1340px) {
    font-size: 4vw;
  }
  @media (max-width: 920px) {
    font-size: 3vw;
  }
  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

const Person = styled.p`
  font-size: 6rem;
  @media (max-width: 1340px) {
    font-size: 6vw;
  }
  @media (max-width: 920px) {
    font-size: 5vw;
  }
  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

export default function Slide({ name, surname, role }) {
  return (
    <SlideWrapper>
      <TextWrap>
        <Role>{role}</Role>
        <Person>{`${name} ${surname}`}</Person>
      </TextWrap>
    </SlideWrapper>
  );
}

Slide.propTypes = {
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
};
