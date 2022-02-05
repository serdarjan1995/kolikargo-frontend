import React, { useRef } from "react";
import { useWindowEvent } from "../hooks";

function IsOutsideClick({ Component, handler }) {
  const ref = useRef();

  const isOutslideClick = (e) => {
    e.stopPropagation();
    if (ref.current && !ref.current.contains(e.target)) {
      handler();
    }
  };

  useWindowEvent({
    events: [{ event: "click" }],
    handlers: [isOutslideClick],
    condition: true,
  });

  return React.cloneElement(Component, { ref });
}

export default IsOutsideClick;
