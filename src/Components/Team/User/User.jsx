import React from "react";
import PropTypes from "prop-types";

import Avatar from "./Avatar/Avatar";

export default function User({ id, name, surname, role, location, avatar }) {
  return (
    <div>
      <Avatar
        url={avatar}
        alt={`${name} ${surname} is a ${role} from ${location}`}
        size='md'
      />
      {name}
    </div>
  );
}

User.popTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};
