import styled from "styled-components/macro";
import { fonts, indexes, transitions } from "../../../../styles/variables";

export const Container = styled.div`
  background: white;
  border-radius: 20px;
  filter: drop-shadow(0 14px 32px rgba(15, 15, 15, 0.12));
  right: -20px;
  padding: 16px;
  position: absolute;
  top: calc(100% + 36px);
  z-index: ${indexes.poppedUI};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(128px, 1fr));
`;

export const Item = styled.li`
  border-radius: 12px;
  overflow: hidden;
`;

export const Text = styled.p`
  color: #777e90;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
`;

export const TextSmall = styled.p`
  color: #b1b5c3;
  font-family: ${fonts.poppins};
  font-size: 1.2rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  padding: 22px 20px;
  transition: ${transitions.buttonBgHover};
  width: 100%;

  &:hover,
  &:focus {
    background: #f4f5f6;

    ${Text} {
      color: #23262f;
    }

    ${TextSmall} {
      color: #b1b5c3;
    }
  }
`;
