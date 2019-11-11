import React from "react";
import ReactSiema from "react-siema";
import styled from "styled-components";
import PropTypes from "prop-types";

import Slide from "./Slide/Slide";
import { settings } from "../../utils/settings";

const SiemaWrapper = styled.div`
  position: relative;
`;

const SiemaClose = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
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

const SiemaButton = styled.button`
  border: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  color: white;
  position: absolute;
  left: 0;
  top: 45%;
  z-index: 999;
  font-size: 7rem;
  transform: translateY(-50%);
  background: none;
  outline: none;
  cursor: pointer;
  &:hover {
    color: rebeccapurple;
  }
  ${props =>
    props.direction === "next" &&
    `
    left: initial;
    right: 0;
  `}
`;

export default function Carousel({ startIndex, closeModal }) {
  let siemaInstance = null;
  return (
    <SiemaWrapper>
      <SiemaClose onClick={closeModal}>x</SiemaClose>
      <ReactSiema
        {...{ startIndex: startIndex }}
        ref={siema => (siemaInstance = siema)}
      >
        {settings.team.map(member => (
          <div key={member.id}>
            <Slide
              name={member.name}
              surname={member.surname}
              role={member.role}
            />
          </div>
        ))}
      </ReactSiema>
      <SiemaButton onClick={() => siemaInstance.prev()} direction="prev">
        &lsaquo;
      </SiemaButton>
      <SiemaButton onClick={() => siemaInstance.next()} direction="next">
        &rsaquo;
      </SiemaButton>
    </SiemaWrapper>
  );
}

Carousel.defaultProps = {
  startIndex: 0
};

Carousel.propTypes = {
  startIndex: PropTypes.number,
  closeModal: PropTypes.func.isRequired
};
