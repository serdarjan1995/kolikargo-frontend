import styled from "styled-components/macro";
import { fonts, screens, sizes } from "../../../styles/variables";
import {
  List as Feature1List,
  Img as Feature1Img,
} from "../../feature/styles/feature";

export const Container = styled.div`
  margin: auto;
  max-width: ${sizes.sectionMaxWidth};
  padding: 30px 0;
  text-align: center;

  && li + li {
    margin-top: 0;
  }

  @media ${screens.lg} {
    padding-bottom: 81px;
    padding-top: 57px;
  }
`;

export const Background = styled.div`
  background: #fcfcfd;
  margin-top: 37px;

  @media ${screens.lg} {
    margin-top: 129px;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.dmSans};
  font-size: 4rem;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
`;

export const TitleAlt = styled.p`
  font-family: ${fonts.gilroy};
  line-height: 32px;
  letter-spacing: -0.01em;
  margin-top: 4px;

  @media ${screens.lg} {
    font-family: ${fonts.poppins};
    font-size: 2.4rem;
  }
`;

export const List = styled(Feature1List)`
  position: relative;
`;

export const Item = styled.li`
  flex-basis: 100%;
`;

export const TitleSmall = styled.h3`
  font-family: ${fonts.poppins};
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 32px;
`;

export const Img = styled(Feature1Img)`
  position: relative;
  z-index: 1;
`;

export const Text = styled.p`
  color: #777e90;
  font-family: ${fonts.poppins};
  font-size: 1.4rem;
  line-height: 24px;
  margin: 0 auto;
  margin-top: 8px;
  max-width: 256px;
`;

export const DashLineContainer = styled.div`
  display: none;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  top: 44px;

  @media ${screens.lg} {
    display: block;
  }
`;

export const DashLineSmallContainer = styled.div`
  margin: 32px 0;

  @media ${screens.lg} {
    display: none;
  }
`;
