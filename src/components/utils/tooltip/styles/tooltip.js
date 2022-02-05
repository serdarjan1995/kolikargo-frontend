import styled from "styled-components/macro";
import { fonts, indexes, screens } from "../../../../styles/variables";

export const Container = styled.div`
  background: #fcfcfd;
  border-radius: 20px;
  filter: drop-shadow(15px 15px 15px rgba(15, 15, 15, 0.07));
  display: none;
  right: 0;
  min-width: 221px;
  padding: 27px 25px;
  position: absolute;
  top: calc(100% + 8px);

  @media ${screens.md} {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  border: 1px solid rgba(199, 199, 199, 1);
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  display: flex;
  filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.05));
  flex-shrink: 0;
  height: 26px;
  justify-content: center;
  position: relative;
  width: 26px;
  z-index: ${indexes.poppedUI};

  &:hover ${Container}, &:focus ${Container} {
    display: block;
  }
`;

export const Text = styled.p`
  font-family: ${fonts.gilroy};
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 16px;
`;
