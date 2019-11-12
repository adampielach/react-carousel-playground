import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Avatar from "./Avatar/Avatar";

const UserWrapper = styled.div`
  text-align: center;
  padding: 1rem;
  width: 20%;
  flex-basis: 20%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: #fbfbfb;
  }
  p {
    padding: 0.1rem;
    margin: 0;
    &:first-of-type {
      margin: 1rem;
    }
  }
`;

export default function User({
  onClick,
  name,
  surname,
  role,
  location,
  avatar
}) {
  return (
    <UserWrapper onClick={onClick}>
      <Avatar
        url={avatar}
        alt={`${name} ${surname} is a ${role} from ${location}`}
        size="md"
        icon
      />
      <p>{`${name} ${surname}`}</p>
      <p>{role}</p>
      <p>{location}</p>
    </UserWrapper>
  );
}

User.popTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};
