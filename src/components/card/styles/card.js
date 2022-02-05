import styled from "styled-components/macro";
import {
  colors,
  fonts,
  radius,
  screens,
  transitions,
} from "../../../styles/variables";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  font-family: ${fonts.poppins};
  position: relative;
`;

export const Background = styled.div`
  border-radius: ${radius.roundedLG};
  background: ${colors.gray9};
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 80px;
  max-width: 1327px;
  padding: 0 21px;
  padding-top: 25px;
  padding-bottom: 36px;

  @media ${screens.lg} {
    margin-top: 140px;
    padding: 63px;
    padding-top: 70px;
    padding-bottom: 80px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media ${screens.sm} {
    grid-template-columns: repeat(auto-fit, minmax(260px, 278px));
  }

  @media ${screens.lg} {
    gap: 25px 29px;
  }
`;

export const ImgContainer = styled.div`
  height: 277px;
  overflow: hidden;
  width: 100%;

  @media ${screens.lg} {
    height: 228px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h4`
  color: #141416;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 24px;
`;

export const TitleAlt = styled.p`
  color: #353945;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 20px;
`;

export const DescriptionContainer = styled.div`
  background: ${colors.whiteish};
  border: 1px solid rgba(230, 232, 236, 1);
  padding: 0 20px;
  padding-bottom: 30px;
  padding-top: 15px;
`;

export const HR = styled.hr`
  background: ${colors.gray4};
  border: none;
  border-radius: 1px;
  height: 3px;
  margin-bottom: 16px;
  margin-top: 14px;
`;

export const PriceContainer = styled.div`
  border: 2px solid rgba(88, 194, 125, 1);
  border-radius: 8px;
  display: flex;
  padding: 9px;
`;

export const Price = styled.p`
  color: ${colors.green};
  font-weight: 700;
  line-height: 12px;
`;

export const PriceText = styled.p`
  color: #a3a3a3;
  font-family: ${fonts.gilroy};
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 5px;
`;

export const InfoTitle = styled.p`
  color: #424242;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 20px;
`;

export const Info = styled.p`
  color: #777e90;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 6px;
`;

export const Link = styled(ReactRouterLink)`
  border-radius:16px;
  display: block;
  overflow: hidden;
`;

export const Button = styled.button`
  align-items: center;
  box-shadow: 0 0 0 2px rgba(230, 232, 236, 1);
  border-radius: ${radius.roundedMD};
  color: ${colors.black};
  display: flex;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 16px;
  margin: 0 auto;
  margin-top: 35px;
  padding: 12px 16px;
  transition: ${transitions.buttonBgHover};
  outline: none;

  &:hover,
  &:focus {
    background: #1e1e1e;
    box-shadow: none;
    color: white;
  }

  @media ${screens.lg} {
    margin-top: 92px;
  }
`;

export const TabContainer = styled.div`
  margin-bottom: 35px;

  & button:nth-of-type(n + 2) {
    margin-left: 10px;
  }
`;

export const TabButton = styled.button`
  background: ${({ active }) => (active ? colors.blue : "transparent")};
  border-radius: ${radius.roundedMD};
  color: ${({ active }) => (active ? "white" : colors.gray7)};
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 16px;
  padding: ${({ padding }) => padding || "17px 30px"};
`;
