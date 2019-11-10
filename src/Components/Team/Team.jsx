import React from "react";
import Styled from "styled-components";

import User from "./User/User";
import { settings } from "../../utils/settings";

const TeamWrapper = Styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
`;

export default function Team() {
  return (
    <TeamWrapper>
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
    </TeamWrapper>
  );
}
