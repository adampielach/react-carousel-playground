import React from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Slide({ name, surname, role }) {
  return (
    <SlideWrapper>
      <p>{`${name} ${surname}`}</p>
      <p>{role}</p>
    </SlideWrapper>
  );
}
