import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AvatarIcon = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  right: -1rem;
  top: 0;
  border-radius: 50%;
  background: rebeccapurple;
  z-index: 99;
  vertical-align: middle;
  text-align: center;
`;

const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  ${props =>
    props.size === "sm" &&
    `
        width: 50px;
        height: 50px;
    `}
  ${props =>
    props.size === "lg" &&
    `
        width: 250px;
        height: 250px;
    `}
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.5;
    background: cyan;
    border-radius: 50%;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

export default function Avatar({ url, alt, size, icon }) {
  return (
    <AvatarWrapper size={size}>
      {icon && <AvatarIcon />}
      <ImageWrapper>
        <img src={url} alt={alt} />
      </ImageWrapper>
    </AvatarWrapper>
  );
}

Avatar.defaultProps = {
  size: "md",
  icon: false
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
  icon: PropTypes.bool
};
