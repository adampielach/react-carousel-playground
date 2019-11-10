import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const AvatarWrapper = Styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    margin: 0 auto;
    ${props =>
      props.size === "sm" &&
      `
        width: 50px;
        height: 50px;
    `}
    ${props =>
      props.size === "lg" &&
      `
        width: 150px;
        height: 150px;
    `}
    img {
        width: 100%;
        height: auto;
    }
`;

export default function Avatar({ url, alt, size }) {
  return (
    <AvatarWrapper size={size}>
      <img src={url} alt={alt} />
    </AvatarWrapper>
  );
}

Avatar.defaultProps = {
  size: "md"
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string
};
