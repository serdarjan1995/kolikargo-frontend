import styled from "styled-components/macro";
import { fonts, screens } from "../../../styles/variables";
import { slideInBottomToTop } from "../../../styles/animations";

export const Container = styled.div`
  animation: ${slideInBottomToTop} ease-in-out 450ms both;
  background: #fff;
  border-radius: 15px 15px 0 0;
  min-width: 100vw;
  font-family: ${fonts.gilroy};
  margin-top: auto;
  max-width: 484px;
  padding: 35px;
  padding-bottom: 63px;
  position: relative;

  @media ${screens.md} {
    animation: none;
    border-radius: 30px;
    margin: auto;
    min-width: initial;
    padding: 38px 74px;
    padding-bottom: 31px;
    width: 484px;
  }
`;

export const Form = styled.form`
  text-align: center;
`;

export const Title = styled.h3`
  color: #141416;
  font-family: ${fonts.gilroy};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.01em;
  text-align: center;

  @media ${screens.md} {
    font-size: 2rem;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 45px;

  & > * + * {
    margin-top: 12px;
  }
`;

export const InputContainer = styled.div`
  background: #f4f4f4;
  border-radius: 15px;
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  all: unset;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 20px;
  height: 100%;
  padding: 22px 27px;
  text-align: left;
  width: 100%;

  &::placeholder {
    color: #4a4a4a;
    font-family: inherit;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.01em;
  }
`;

export const Text = styled.p`
  color: ${({ color }) => color || "inherit"};
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

export const Box = styled.div`
  margin-top: 57px;

  & > * + * {
    margin-top: 20px;
  }
`;

export const DigitInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & > * + * {
    margin-left: 16px;
  }

  @media ${screens.md} {
    margin-top: 40px;

    & input * + * {
      margin-left: 13px;
    }
  }
`;

export const DigitInput = styled.input`
  border: 2px solid;
  box-sizing: content-box;
  border-color: ${({ variant }) =>
    variant === "active"
      ? "#0AC05E"
      : variant === "warn"
      ? "#FF8787"
      : "#D3D3D3"};
  border-radius: 10px;
  font-size: 3.25rem;
  height: 36px;
  padding: 12px 13px;
  outline: none;
  text-align: center;
  width: 16px;

  &:focus {
    border-color: #0ac05e;
  }

  @media ${screens.md} {
    padding: 7px 13px;
    width: 20px;
  }
`;

export const TextButton = styled.button`
  color: #ff5119;
  font-weight: ${({ bold }) => (bold ? "700" : "600")};
  margin-left: ${({ spaced }) => (spaced ? "7px" : "0")};
  padding: 7px 0;
`;

export const AbsoluteButton = styled.button`
  color: ${({ active }) => (active ? "black" : "#8D8D8D")};
  display: flex;
  padding: 0.5em;
  position: absolute;
  right: 20px;
  transform: translateY(-50%);
  top: 50%;
`;

export const SmallBtn = styled.button`
  background: #ececec;
  border-radius: 50%;
  font-size: 1.3rem;
  height: 33px;
  top: 21px;
  position: absolute;
  right: 21px;
  width: 33px;

  @media ${screens.md} {
    background: #fcfcfd;
    color: #777e90;
    top: 0;
    left: calc(100% + 14px);
  }
`;

export const Warn = styled.p`
  color: #ff7070;
  font-family: ${fonts.gilroy};
  font-size: 1.2rem;
  font-weight: 400;
  margin: 8px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  font-family: ${fonts.gilroy};
  font-size: 1.4rem;
  font-weight: 600;
  text-align: start;
`;

export const IconContainer = styled.div``;
