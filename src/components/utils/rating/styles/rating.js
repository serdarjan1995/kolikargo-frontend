import styled from "styled-components/macro";
import { colors, fonts } from "../../../../styles/variables";

export const Container = styled.div`
  align-items: center;
  background: ${({ background }) =>
    background ? colors.green : "transparent"};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  padding: 7px 11px;
  position: ${({ positioned }) => (positioned ? "absolute" : "static")};
  right: 22px;
  top: 18px;
  width: fit-content;
`;

export const IconContainer = styled.div`
  display: flex;
  color: white;
  margin-right: 7px;
`;

export const Rate = styled.p`
  color: white;
  font-family: ${fonts.BaiJamjuree};
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: 0.065em;
`;
