import styled from "styled-components/macro";
import { fonts, screens } from "../../../styles/variables";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  margin: auto;
  max-width: 1120px;
  padding-bottom: 20px;
  padding-left: 32px;

  @media ${screens.lg} {
    padding-left: 0;
  }
`;

export const Background = styled.div`
  margin-top: 64px;

  @media ${screens.lg} {
    background-color: #fcfcfd;
    margin-top: 80px;
    padding: 0 32px;
    padding-top: 80px;
    padding-bottom: 56px;
  }
`;

export const Title = styled.h2`
  color: #23262f;
  font-family: ${fonts.dmSans};
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.01em;

  @media ${screens.lg} {
    font-size: 4.8rem;
    letter-spacing: -0.02em;
  }
`;

export const Subtitle = styled.h3`
  color: #777e90;
  font-family: ${fonts.poppins};
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 12px;

  @media ${screens.lg} {
    font-size: 2.4rem;
    letter-spacing: -0.01em;
  }
`;

export const CardList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(260px, 1fr));
  margin-top: 40px;
  overflow: hidden;
  overflow-x: auto;

  @media ${screens.lg} {
    gap: 25px;
  }
`;

export const Card = styled.li`
  font-family: ${fonts.poppins};
`;

export const CardLink = styled(ReactRouterLink)`
  display: block;
`;

export const Label = styled.div`
  background-color: #23262f;
  border-radius: 32px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  left: 16px;
  padding: 8px 12px;
  position: absolute;
  text-transform: uppercase;
  top: 16px;
`;

export const Content = styled.div`
  margin-top: 21px;
`;

export const Text = styled.p`
  color: #23262f;
  font-weight: 500;
  line-height: 24px;
`;

export const TextSmall = styled.p`
  color: #777e90;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
  margin-top: 8px;
`;

export const Box = styled.div``;

export const Button = styled.button``;

export const ImgContainer = styled.div`
  border-radius: 20px;
  clip-path: content-box;
  height: 256px;
  position: relative;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 100%;
  transition: transform 0.7s;
  object-fit: cover;
  object-position: center;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconContainer = styled.div``;
