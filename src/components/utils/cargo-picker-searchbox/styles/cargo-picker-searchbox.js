import styled from "styled-components/macro";
import { fonts, indexes, screens, transitions } from "../../../../styles/variables";

export const Container = styled.div``;

export const List = styled.ul`
  background: #fcfcfd;
  border-radius: 24px;
  top: calc(100%);
  filter: drop-shadow(0 40px 32px rgba(15, 15, 15, 0.12));
  left: 0;
  position: absolute;
  width: 100%;
  padding: 8px;
  position: absolute;
  z-index: ${indexes.poppedUI};
`;

export const Item = styled.li``;

export const Button = styled.button`
  align-items: center;
  border-radius: 12px;
  display: flex;
  font-family: ${fonts.poppins};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 24px;
  padding: 12px;
  transition: ${transitions.buttonBgHover};
  outline: none;
  width: 100%;

  &:hover,
  &:focus {
    background: #f4f5f6;
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  border: 1px solid #e6e8ec;
  border-radius: 50%;
  color: #777e90;
  display: flex;
  height: 32px;
  justify-content: center;
  margin-right: 12px;
  width: 32px;
`;
