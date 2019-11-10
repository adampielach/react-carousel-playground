import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

import Avatar from "./Avatar/Avatar";

const UserWrapper = Styled.div`
    text-align: center;
    padding: 1rem;
    flex-basis: 20%;
    width: 20%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
        padding: 0.1rem
    }
    p:last-of-type {
        margin-top: auto;
    }
`;

export default function User({ id, name, surname, role, location, avatar }) {
  return (
    <UserWrapper>
      <Avatar
        url={avatar}
        alt={`${name} ${surname} is a ${role} from ${location}`}
        size='md'
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
