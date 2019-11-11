import React, { useEffect } from "react";
import ReactSiema from "react-siema";

import Slide from "./Slide/Slide";
import { settings } from "../../utils/settings";

export default function Carousel({ startIndex }) {
  let siemaInstance = null;

  useEffect(() => {
    console.log(siemaInstance);
    return () => {
      window.removeEventListener("resize", siemaInstance.onResize());
    };
  }, []);
  return (
    <ReactSiema
      {...{ startIndex: startIndex }}
      ref={_self => (siemaInstance = _self)}
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
  );
}
