import styled from "styled-components/macro";
import { fonts, screens } from "../../../../../styles/variables";

export const Container = styled.div`
  background: white;
  border: 1px solid rgba(238, 241, 242, 1);
  border-radius: 15px;
  font-family: ${fonts.gilroy};
  padding: 24px 29px;

  @media ${screens.md} {
    padding: 55px 75px;
  }
`;

export const List = styled.ul`
  & > * + * {
    margin-top: 50px;
  }
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
`;

export const Title = styled.h2`
  color: black;
  font-size: 1.4rem;
  font-weight: 700;

  @media ${screens.md} {
    font-size: 2.2rem;
  }
`;

export const TitleSmall = styled.h3`
  color: #a8a8a8;
  font-size: 1.2rem;
  font-weight: 600;

  @media ${screens.md} {
    font-size: 1.4rem;
  }
`;

export const Date = styled.p`
  margin-left: 5px;
  font-size: 1.3rem;

  @media ${screens.md} {
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: 11px;
  }
`;

export const Text = styled.p`
  color: ${({ variant }) => (variant === "disabled" ? "#ADADAD" : "black")};
  font-weight: 600;

  @media ${screens.md} {
    font-size: 1.7rem;
  }
`;

export const TextSmall = styled.p`
  color: #a5a5a5;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 4px;

  @media ${screens.md} {
    font-size: 1.2rem;
  }
`;

export const Line = styled.div`
  left: 50%;
  height: 52px;
  position: absolute;
  transform: translateX(-50%);
  top: 100%;
  width: 2px;
`;

export const IconContainer = styled.div`
  align-items: center;
  background: ${({ variant }) =>
    variant === "completed"
      ? "#F0FFF7"
      : variant === "active"
      ? "#FFF9F5"
      : "#ECECEC"};
  border-radius: 50%;
  color: ${({ variant }) =>
    variant === "completed"
      ? "#3AA56B"
      : variant === "active"
      ? "#FE7224"
      : "#B4B4B4"};
  display: flex;
  flex-shrink: 0;
  font-size: 2.3rem;
  height: 39px;
  justify-content: center;
  position: relative;
  width: 39px;
  z-index: 1;

  & ${Line} {
    background: ${({ variant }) =>
      variant === "completed"
        ? "#F0FFF7"
        : variant === "active"
        ? "#FFF9F5"
        : "#ECECEC"};
  }

  @media ${screens.md} {
    font-size: 3.2rem;
    height: 58px;
    width: 58px;
  }
`;
