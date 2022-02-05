import styled from "styled-components/macro";
import { colors, fonts, radius, screens, transitions } from "../../../styles/variables";
import { Link as ReactRouterLink } from "react-router-dom";
import { HoveredBlueBtnStyle } from "../../../styles/mixins";

export const Container = styled.div`
  background: linear-gradient(
    107.87deg,
    #eef7ff 0%,
    #dce7f4 43.08%,
    #dde8ff 65.93%,
    #e7f5ff 83.81%
  );
  border-radius: ${radius.roundedLG};
  padding-top: 45px;
  @media ${screens.lg} {
    border-radius: 0;
    padding-bottom: 200px;
    position: relative;
  }
`;

export const ContentWrapper = styled.div`
  align-items: center;
  color: black;
  font-family: ${fonts.gilroy};
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${screens.lg} {
    align-items: flex-start;
    margin-right: 5rem;
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0 auto;
  max-width: 10ch;

  @media ${screens.lg} {
    font-size: 6.5rem;
    font-weight: 800;
    max-width: initial;
  }
`;

export const Text = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 2rem;

  @media ${screens.lg} {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  background: ${colors.blue};
  border-radius: ${radius.roundedMD};
  color: white;
  display: inline-block;
  font-weight: 700;
  margin-top: 3rem;
  transition: ${transitions.buttonBgHover};
  padding: 18px 40px;
  outline: none;

  &:hover,
  &:focus {
    ${HoveredBlueBtnStyle}
  }

  @media ${screens.lg} {
    font-weight: 600;
    padding: 18px 58px;
  }
`;

export const ImgContainer = styled.div``;
