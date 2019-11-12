import React from "react";
import styled from "styled-components";

import User from "./User/User";
import { settings } from "../../utils/settings";

const TeamHeading = styled.h1`
  font-size: 4rem;
  color: rebeccapurple;
  text-align: center;
  margin: 0 2rem 4.5rem;
  padding-top: 2rem;
`;

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Team({ onClickHandler }) {
  return (
    <>
      <TeamHeading>Meet our team</TeamHeading>
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
            onClick={onClickHandler.bind(this, member.id)}
          />
        ))}
      </TeamWrapper>
    </>
  );
}
