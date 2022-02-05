import React from "react";
import {
  Container,
  Form,
  Title,
  Label,
  InputWrapper,
  InputContainer,
  Input,
  Text,
  TextButton,
  AbsoluteButton,
  SmallBtn,
  Box,
  IconContainer,
  DigitInput,
  DigitInputWrapper,
  Warn,
} from "./styles/modal";

function Modal({ children, ...rest }) {
  const handleClick = (e) => e.stopPropagation();

  return (
    <Container onClick={handleClick} {...rest}>
      {children}
    </Container>
  );
}

Modal.Title = function ModalTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Modal.Form = function ModalForm({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

Modal.Box = function ModalBox({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
};

Modal.InputWrapper = function ModalInputWrapper({ children, ...rest }) {
  return <InputWrapper {...rest}>{children}</InputWrapper>;
};

Modal.InputContainer = function ModalInputContainer({ children, ...rest }) {
  return <InputContainer {...rest}>{children}</InputContainer>;
};

Modal.Input = function ModalInput({ ...rest }) {
  return <Input {...rest} />;
};

Modal.DigitInput = React.forwardRef(({ ...rest }, ref) => {
  return <DigitInput maxLength="1" ref={ref} {...rest} />;
});

Modal.Text = function ModalText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Modal.Label = function ModalLabel({ children, ...rest }) {
  return <Label {...rest}>{children}</Label>;
};

Modal.DigitInputWrapper = function ModalDigitInputWrapper({
  children,
  ...rest
}) {
  return <DigitInputWrapper {...rest}>{children}</DigitInputWrapper>;
};

Modal.AbsoluteButton = function ModalAbsoluteButton({ children, ...rest }) {
  return <AbsoluteButton {...rest}>{children}</AbsoluteButton>;
};

Modal.SmallBtn = function ModalSmallBtn({ children, ...rest }) {
  return <SmallBtn autoFocus {...rest}>{children}</SmallBtn>;
};

Modal.TextButton = function ModalTextButton({ children, ...rest }) {
  return <TextButton {...rest}>{children}</TextButton>;
};

Modal.IconContainer = function ModalIconContainer({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Modal.Warn = function ModalWarn({ children, ...rest }) {
  return <Warn {...rest}>{children}</Warn>;
};

export default Modal;
