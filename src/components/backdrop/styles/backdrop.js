import styled from "styled-components/macro";
import { indexes } from "../../../styles/variables";
import { fadeIn } from "../../../styles/animations";

export const Container = styled.div`
  animation: ${fadeIn} 200ms;
  ${({ centerItem }) => centerItem && "align-items:center;"}
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100%;
  ${({ centerItem }) => centerItem && "justify-content:center;"}
  left: 0;
  position: fixed;
  transition: opacity 300ms;
  top: 0;
  width: 100vw;
  z-index: ${indexes.backdrop};
`;
