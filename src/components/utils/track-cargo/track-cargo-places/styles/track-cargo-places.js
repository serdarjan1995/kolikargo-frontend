import styled from "styled-components/macro";
import { fonts, screens } from "../../../../../styles/variables";

export const Container = styled.div`
  background: white;
  border: 1px solid rgba(238, 241, 242, 1);
  border-radius: 15px;
  padding: 22px 18px;

  @media ${screens.md} {
    padding: 22px 27px;
  }
`;

export const List = styled.ul`
  flex-basis: 100%;

  & > * + * {
    margin-top: 13px;
  }

  @media ${screens.md} {
    flex-basis: 50%;
  }
`;

export const Item = styled.li`
  align-items: baseline;
  display: flex;
`;

export const Text = styled.p`
  color: black;
  font-family: ${fonts.gilroy};
  font-weight: 500;

  @media ${screens.md} {
    font-size: 1.7rem;
  }
`;

export const InnerCircle = styled.div`
  border-radius: inherit;
  height: 8px;
  width: 8px;

  @media ${screens.md} {
    height: 11px;
    width: 11px;
  }
`;

export const Circle = styled.div`
  align-items: center;
  background: ${({ variant }) => (variant === "blue" ? "#E0EAFF" : "#FFF9F5")};
  border-radius: 50%;
  display: flex;
  height: 20px;
  justify-content: center;
  position: relative;
  width: 20px;

  & ${InnerCircle} {
    background: ${({ variant }) =>
      variant === "blue" ? "#3371F5" : "#FE7224"};
  }

  @media ${screens.md} {
    height: 28px;
    width: 28px;
  }
`;

export const HR = styled.hr`
  background: #ededed;
  border: none;
  height: 1px;
  margin-top: 10px;
`;
