import React, { useState } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

export default function Modal() {
  const [isOpened, setOpened] = useState(false);
  return createPortal(
    <>
      isOpened && <p>I'm a modal!</p>
    </>,
    modalRoot
  );
}
