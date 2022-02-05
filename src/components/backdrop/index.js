import React, { useEffect } from "react";
import { Container } from "./styles/backdrop";
import { useWindowKey } from "../../hooks";
import { Portal } from "../../helpers";

const Backdrop = React.forwardRef(
  ({ children, handler, ...restProps }, ref) => {
    useWindowKey({
      keys: ["Escape"],
      handlers: [handler],
    });
/* 
    useEffect(() => {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
      return ()=>  body.style.overflow = "scroll";
    }, []);
 */
    return (
      <Portal>
        <Container ref={ref} {...restProps}>
          {children}
        </Container>
      </Portal>
    );
  }
);

export default Backdrop;
