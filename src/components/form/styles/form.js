import styled from "styled-components/macro";
import { fonts, screens } from "../../../styles/variables";

const inputTextStyle = `
    color: black;
    font-family: ${fonts.BaiJamjuree};
    font-size: 1.6rem;
    font-weight: 600;
  `;

export const Container = styled.form``;

export const Title = styled.h3`
  font-family: ${fonts.BaiJamjuree};
  font-size: ${({ small }) => (small ? "1.8rem" : "2rem")};
  font-weight: 600;
  margin-bottom: 17px;

  @media ${screens.lg} {
    font-size: 2.4rem;
    margin-bottom: 21px;
  }
`;

export const InputBox = styled.div`
  & > fieldset + *,
  & > div + * {
    margin-top: 20px;
  }
`;

export const InputContainer = styled.div`
  border: 2px solid rgba(230, 232, 236, 1);
  border-radius: 15px;
  height: 100%;
  min-height: 60px;
  overflow: hidden;
`;

export const Fieldset = styled.fieldset`
  all: unset;
  cursor: text;
  display: block;
  position: relative;
  width: 100%;

  & legend {
    color: ${({ variant = {} }) =>
      variant === "active"
        ? "#0AC05E"
        : variant === "warn"
        ? "#FF7070"
        : "#BFBFBF"};
  }

  & ${InputContainer} {
    border-color: ${({ variant = {} }) =>
      variant === "active"
        ? "#0AC05E"
        : variant === "warn"
        ? "#FF7070"
        : "#E6E8EC"};
  }
`;

export const Section = styled.div`
  margin-top: ${({ noMargin }) => (noMargin ? "0" : "25px")};

  @media ${screens.lg} {
    margin-top: ${({ noMargin }) => (noMargin ? "0" : "30px")};
  }
`;

export const FieldTitle = styled.h4`
  color: #b1b5c3;
  font-family: ${fonts.BaiJamjuree};
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const Legend = styled.legend`
  background: white;
  font-family: ${fonts.BaiJamjuree};
  font-size: 1.4rem;
  font-weight: 400;
  left: 20px;
  line-height: 17px;
  padding: 0 8px;
  position: absolute;
  top: -7px;
`;

export const CheckboxLabel = styled.label`
  background: ${({ active }) => (active ? "#3B71FE" : "white")};
  border: ${({ active }) => (active ? "none" : "1px solid #cacaca")};
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  height: 24px;
  margin-right: 18px;
  position: relative;
  outline: none;
  width: 24px;

  &:focus {
    outline: 2px solid black;
  }
`;

export const Label = styled.label`
  background: white;
  color: ${({ variant }) =>
    variant === "active"
      ? "#0ac05e"
      : variant === "warn"
      ? "#FF3737"
      : "#777E90"};
  font-family: ${fonts.BaiJamjuree};
  font-size: ${({ variant }) =>
    variant === "active" || variant === "filled" || variant === "warn"
      ? "1.3rem"
      : "1.6rem"};
  font-weight: 600;
  left: 0;
  padding: 0 4px;
  position: absolute;
  pointer-events: none;
  top: 0;
  transform: ${({ variant }) =>
    variant === "active" || variant === "filled" || variant === "warn"
      ? "translate(24px, -8px)"
      : "translate(20px, 22px)"};
  transition: transform 200ms;
`;

export const Warn = styled.p`
  color: red;
  font-family: ${fonts.BaiJamjuree};
  font-size: 1.2rem;
  margin-bottom: 20px !important;
  margin-top: 5px !important;
`;

export const Text = styled.p`
  color: #a6a6a6;
  font-family: ${fonts.BaiJamjuree};
  font-size: 1.3rem;
  margin-top: 8px;
`;

export const Radio = styled.input``;

export const RadioLabel = styled.label`
  border: 2px solid ${({ active }) => (active ? `#3371F5` : "#E6E8EC")};
  border-radius: 15px;
  cursor: pointer;
  color: #777e90;
  font-family: ${fonts.BaiJamjuree};
  font-size: 1.6rem;
  font-weight: 600;
  display: inline-block;
  padding: 17px 23px;
`;

export const Textarea = styled.textarea`
  ${inputTextStyle}
  appearance: none;
  border: 2px solid rgba(230, 232, 236, 1);
  border-radius: 15px;
  padding: 13px 22px;
  resize: none;
  outline: none;
  width: 100%;
`;

export const Input = styled.input`
  ${inputTextStyle}
  outline: none;
  height: 100%;
  padding: 19px 20px;
  padding-bottom: 18px;
  width: 100%;
  ${({ readOnly }) => (readOnly ? "cursor: pointer" : null)}
`;
