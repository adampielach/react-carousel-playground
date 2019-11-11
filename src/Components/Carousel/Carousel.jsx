import React from "react";
import ReactSiema from "react-siema";

import Slide from "./Slide/Slide";
import { settings } from "../../utils/settings";

export default function Carousel({ startIndex }) {
  let siemaInstance = null;
  return (
    <ReactSiema {...startIndex} ref={_self => (siemaInstance = _self)}>
      {settings.team.map(member => (
        <div key={member.id} onClick={() => siemaInstance.goTo(startIndex)}>
          <Slide
            name={member.name}
            surname={member.surname}
            role={member.role}
          />
        </div>
      ))}
    </ReactSiema>
  );
}
