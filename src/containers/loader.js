import React from "react";
import Lottie from "react-lottie";
import "styled-components/macro";
import loaderAnimation from "../assets/loader.json";
import { Flex } from "../components";
import { screens } from "../styles/variables";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loaderAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loader() {
  return (
    <Flex
      css={`
        min-height: 80vh;
      `}
    >
      <div
        css={`
          margin: auto;
          max-width: 200px;

          @media ${screens.md} {
            max-width: 400px;
          }
        `}
      >
        <Lottie options={defaultOptions} />
      </div>
    </Flex>
  );
}

export default Loader;
