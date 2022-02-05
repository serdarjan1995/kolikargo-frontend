import styled from "styled-components/macro";
import { fonts, screens } from "../../../styles/variables";

export const Container = styled.div`
  margin: auto;
  margin-top: 64px;
  max-width: 546px;
  padding: 0 32px;

  @media ${screens.lg} {
    margin-top: 104px;
  }
`;

export const Title = styled.h2`
  color: #23262f;
  font-family: ${fonts.dmSans};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  margin-bottom: 40px;
  text-align: center;
`;

export const List = styled.ul`
  margin-top: 64px;

  & li + * {
    margin-top: 24px;
  }

  @media ${screens.lg} {
    margin-top: 70px;
  }
`;

export const Button = styled.button`
  border-bottom: 1px solid #e6e8ec;
  display: flex;
  padding-bottom: 24px;
  width: 100%;
`;

export const Item = styled.li``;

export const ItemNumber = styled.p`
  color: ${({ active }) => (active ? "#3B71FE" : "#777e90")};
  font-family: ${fonts.poppins};
  font-weight: 500;
  margin-right: 32px;
  min-width: 21px;
`;

export const ItemTitle = styled.h3`
  font-family: ${fonts.poppins};
  font-size: 1.6rem;
  font-weight: 500;
  text-align: start;
`;

export const TextContainer = styled.div`
  padding-left: 48px;
  padding-top: 24px;
`;

export const Text = styled.p`
  color: #777e90;
  font-family: ${fonts.poppins};
  font-size: 1.4rem;
  line-height: 1.9;
`;

export const IconContainer = styled.div`
  color: #777e90;
  margin-left: auto;
  ${({active}) => active && "transform:rotate(180deg);"}
`;

export const TabContainer = styled.div`
  display: none;
  margin: auto;
  margin-top: 54px;

  & > * + * {
    margin-left: 24px;
  }

  @media ${screens.lg} {
    display: block;
  }
`;

export const Tab = styled.button`
  background: ${({ active }) => (active ? "#3371F5" : "transparent")};
  border-radius: 20px;
  color: ${({ active }) => (active ? "white" : "#777E90")};
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
  padding: 6px 12px;
`;
