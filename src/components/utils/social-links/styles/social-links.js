import styled from "styled-components/macro";
import { screens } from "../../../../styles/variables";

export const Container = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const List = styled.ul`
  display: inline-flex;
  margin: 0 auto;

  & > * + * {
    margin-left: 23px;
  }
`;

export const Item = styled.li``;

export const AnchorLink = styled.a`
  height: 52px;
  width: 52px;

  @media ${screens.lg} {
    height: 68px;
    width: 68px;
  }
  align-items: center;
  background: #f6f6f6;
  border-radius: 50%;
  color: #2c435f;
  display: flex;
  justify-content: center;
`;
