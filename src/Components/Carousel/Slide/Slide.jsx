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
  }
`;

const Role = styled.p`
  font-size: 2rem;
`;

const Person = styled.p`
  font-size: 4rem;
`;

export default function Slide({ name, surname, role }) {
  return (
    <SlideWrapper>
      <Role>{role}</Role>
      <Person>{`${name} ${surname}`}</Person>
    </SlideWrapper>
  );
}

Slide.propTypes = {
  Role: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Surname: PropTypes.string.isRequired
};
