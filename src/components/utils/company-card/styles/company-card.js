import styled from "styled-components/macro";
import { PrimaryBtnStyle } from "../../../../styles/mixins";
import { fonts, screens, transitions } from "../../../../styles/variables";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  align-items: center;
  background: #fcfcfd;
  border: 1px solid rgba(230, 232, 236, 1);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0 64px 64px rgba(15, 15, 15, 0.08));
  margin: 0 auto;
  padding: 32px;

  @media ${screens.lg} {
    bottom: 220px;
    left: 30px;
    padding-bottom: 54px;
    position: relative;
    width: fit-content;
  }
`;

export const TopContainer = styled.div`
  display: flex;

  @media ${screens.lg} {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  border-radius: 50%;
  flex-shrink: 0;
  height: 70px;
  margin-right: 22px;
  overflow: hidden;
  width: 70px;

  @media ${screens.lg} {
    border-radius: 20px;
    height: 182px;
    margin-right: 0;
    width: 220px;
  }
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const Title = styled.h2`
  color: #23262f;
  font-family: ${fonts.dmSans};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.01em;

  @media ${screens.lg} {
    margin-top: 9px;
  }
`;

export const ShortInfoContainer = styled.div`
  background: #f4f5f6;
  border-radius: 15px;
  display: flex;
  margin-top: 26px;
  padding: 10px 17px;

  & > * + * {
    margin-left: 18px;
  }

  @media ${screens.lg} {
    margin-top: 18px;
  }
`;

export const Box = styled.div`
  align-items: center;
  display: flex;
  margin-top: 32px;

  & * + * {
    margin-left: 17px;
  }

  @media ${screens.lg} {
    margin-top: 46px;
  }
`;

export const IconContainer = styled.div`
  color: #777e90;
  font-size: 2rem;
  display: flex;
  margin-right: 9px;
`;

export const ShareButton = styled.button`
  align-items: center;
  border: 2px solid rgba(230, 232, 236, 1);
  border-radius: 50%;
  box-shadow: 0px 0px 20px 3px #0000000f;
  color: #777e90;
  display: flex;
  font-size: 2rem;
  height: 47px;
  justify-content: center;
  transition: ${transitions.buttonBgHover};
  width: 47px;

  &:hover,
  &:focus {
    background: #f3f3f3;;
  }
`;

export const ActionButtonLink = styled(ReactRouterLink)`
  ${PrimaryBtnStyle}
  background: #3371f5;
  border-radius: 90px;
  color: white;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  padding: 17px 25px;
  text-align: center;
  width: 170px;
`;

export const Text = styled.p`
  color: #777e90;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  line-height: 14px;
  white-space: nowrap;
`;

export const TextSmall = styled.p`
  color: #777e90;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 500;
`;

export const HR = styled.hr`
  background-color: #e6e8ec;
  border: none;
  height: 1px;
  margin: 32px 0;
  max-width: 200px;
  width: 100%;

  @media ${screens.lg} {
    margin: 40px 0;
  }
`;
