import styled from "styled-components/macro";
import { fonts, screens } from "../../../../styles/variables";

export const Container = styled.div``;

export const Title = styled.h3`
  color: #23262f;
  font-family: ${fonts.dmSans};
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Text = styled.p`
  color: #777e90;
  font-family: ${fonts.dmSans};
  font-size: 1.5rem;
  min-width: 100px;

  @media ${screens.lg} {
    min-width: 130px;
  }
`;

export const TextBold = styled(Text)`
  color: #23262f;
  font-weight: 700;
  margin-left: 32px;
`;

export const IconContainer = styled.div`
  color: #777e90;
  display: flex;
  font-size: 2rem;
  margin-right: 11px;
`;

export const List = styled.ul`
  & > * + * {
    margin-top: 30px;
  }
`;

export const Item = styled.li`
  display: flex;
`;
