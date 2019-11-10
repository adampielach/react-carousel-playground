import React from "react";

import User from "./User/User";
import { settings } from "../../utils/settings";

export default function Team() {
  return (
    <div>
      {settings.team.map(member => (
        <User
          key={member.id}
          id={member.id}
          name={member.name}
          surname={member.surname}
          role={member.role}
          location={member.location}
          avatar={member.avatarUrl}
        />
      ))}
    </div>
  );
}
