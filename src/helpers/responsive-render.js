import React from "react";
import "styled-components/macro";
import { css } from "styled-components";

function ResponsiveRender(props) {
  const { minWidth, reverse, children, display = "block" } = props;
  return <>{children}</>
  return React.cloneElement(children, {
    css: css`
      display: ${reverse ? display : "none"};
      @media only screen and (min-width: ${minWidth}) {
        display: ${!reverse ? display : "none"};
      }
    `,
  });
}

export default ResponsiveRender;
