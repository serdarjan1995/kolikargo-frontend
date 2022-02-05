import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  Content,
  Text,
  Title,
  Button,
  IconContainer,
  InnerIconContainer,
} from "./styles/toast";
import { css } from "styled-components/macro";
import { Portal } from "../../helpers";
import {
  CrossIcon3,
  ToastErrorIconLarge,
  ToastErrorIconSmall,
  ToastInfoIconLarge,
  ToastInfoIconSmall,
  ToastSuccessIconLarge,
  ToastSuccessIconSmall,
  ToastWarnIconLarge,
  ToastWarnIconSmall,
  WarnIcon,
} from "../icons";
import { slideInTopToBottom } from "../../styles/animations";
import { useToast } from "../../hooks";
import { screens } from "../../styles/variables";

const initialContentAnimation = css`
  animation: ${slideInTopToBottom} 500ms both ease-in-out;
`;

export default function Toast({ children, ...rest }) {
  return (
    <Portal>
      <Container {...rest}>{children}</Container>
    </Portal>
  );
}

Toast.Content = function ToastContent({ children, id, startDelete, ...rest }) {
  const [animation, setAnimation] = useState(initialContentAnimation);
  const { removeToastItem } = useToast();
  const removeAnimation = () => setAnimation("animation:none");

  const addDeleteAnimation = useCallback(() => {
    removeAnimation();
    setTimeout(
      () =>
        setAnimation(css`
          ${initialContentAnimation};
          animation-direction: reverse;
        `),
      100
    );
  }, []);

  const handleAnimationEnd = () => {
    const removeToastItemTimeout = () =>
      setTimeout(() => removeToastItem(id), 100);
    startDelete && removeToastItemTimeout();
  };

  useEffect(() => {
    if (startDelete) {
      addDeleteAnimation();
    }
  }, [startDelete, addDeleteAnimation]);

  return (
    <Content
      onAnimationEnd={handleAnimationEnd}
      {...rest}
      css={css`
        ${animation};
      `}
    >
      {children}
    </Content>
  );
};

Toast.Title = function ToastTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Toast.Text = function ToastText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Toast.Button = function ToastButton({ onClick, id, children, ...rest }) {
  return (
    <Button onClick={() => onClick(id)} {...rest}>
      <CrossIcon3 />
    </Button>
  );
};

Toast.Icon = function ToastIcon({ children, variant, ...rest }) {
  const getIconByVariant = {
    info: (
      <>
        <div
          css={`
            display: flex;

            @media ${screens.md} {
              display: none;
            }
          `}
        >
          <ToastInfoIconSmall />
        </div>
        <div
          css={`
            display: none;

            @media ${screens.md} {
              display: flex;
            }
          `}
        >
          <ToastInfoIconLarge />
        </div>
      </>
    ),
    warn: (
      <>
        <div
          css={`
            display: flex;

            @media ${screens.md} {
              display: none;
            }
          `}
        >
          <ToastWarnIconSmall />
        </div>
        <div
          css={`
            display: none;

            @media ${screens.md} {
              display: flex;
            }
          `}
        >
          <ToastWarnIconLarge />
        </div>
      </>
    ),
    error: (
      <>
        <div
          css={`
            display: flex;

            @media ${screens.md} {
              display: none;
            }
          `}
        >
          <ToastErrorIconSmall />
        </div>
        <div
          css={`
            display: none;

            @media ${screens.md} {
              display: flex;
            }
          `}
        >
          <ToastErrorIconLarge />
        </div>
      </>
    ),
    success: (
      <>
        <div
          css={`
            display: flex;

            @media ${screens.md} {
              display: none;
            }
          `}
        >
          <ToastSuccessIconSmall />
        </div>
        <div
          css={`
            display: none;

            @media ${screens.md} {
              display: flex;
            }
          `}
        >
          <ToastSuccessIconLarge />
        </div>
      </>
    ),
  };
  return (
    <IconContainer variant={variant} {...rest}>
      {getIconByVariant[variant]}
    </IconContainer>
  );
};

/* Toast.InnerIconContainer = function ToastInnerIconContainer({
  children,
  ...rest
}) {
  return <InnerIconContainer {...rest}>{children}</InnerIconContainer>;
};
 */
