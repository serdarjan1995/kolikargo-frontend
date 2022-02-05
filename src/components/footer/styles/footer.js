import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts, screens, transitions } from "../../../styles/variables";

export const Container = styled.footer`
  background-color: #fcfcfd;
  box-sizing: content-box;
  margin: auto;
  max-width: 1120px;
  padding: 32px;
  padding-bottom: 48px;
  padding-top: 64px;

  @media ${screens.md} {
    background: transparent;
  }
`;

export const Row = styled.div`
  @media ${screens.md} {
    display: flex;
  }
`;

export const Col = styled.div`
  display: flex;

  @media ${screens.md} {
    flex-basis: 60%;
    margin-right: 30px;
  }
`;

export const LeftCol = styled.div`
  margin-right: auto;
`;

export const RightCol = styled.div`
  margin-top: 48px;

  @media ${screens.md} {
    display: flex;
    flex-basis: 60%;
    margin-top: 0;
  }
`;

export const ListContainer = styled.div`
  flex-basis: 100%;
`;

export const List = styled.ul`
  & > li + * {
    margin-top: 32px;
  }

  @media ${screens.md} {
    margin-top: 24px;
  }
`;

export const ListTitle = styled.h3`
  color: #5b5b5b;
  display: none;

  @media ${screens.md} {
    font-family: ${fonts.gilroy};
    font-size: 1.7rem;
    font-weight: 600;
    display: block;
  }
`;

export const Item = styled.li`
  white-space: nowrap;
`;

export const InputTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.poppins};
  margin-top: 48px;

  @media ${screens.md} {
    margin-top: 0;
  }
`;

export const InputContainer = styled.div`
  border: 2px solid #e6e8ec;
  border-radius: 15px;
  display: flex;
  margin-top: 16px;
  padding: 14px 16px;

  @media ${screens.md} {
    padding: 8px 16px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 400;
  margin-right: 18px;
  outline: none;
  width: 100%;
`;

export const HR = styled.hr`
  background-color: #f4f5f6;
  border: none;
  height: 1px;
  margin-top: 48px;

  @media ${screens.md} {
    display: none;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  color: #777e90;
  font-family: ${fonts.dmSans};
  font-size: 1.4rem;
  font-weight: 700;

  @media ${screens.md} {
    font-family: ${fonts.gilroy};
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const ImgContainer = styled.div`
  max-width: 128px;
`;

export const Logo = styled.img``;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;

  & * + * {
    margin-left: 16px;
  }

  @media ${screens.md} {
    margin-top: 70px;
  }
`;

export const SocialLink = styled.a`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  transition: ${transitions.buttonBgHover};
  width: 32px;

  &:hover,
  &:focus {
    background-color: #f2f2f2;
  }
`;

export const IconContainer = styled.div``;

export const Copyright = styled.p`
  color: #818181;
  display: none;
  font-family: ${fonts.gilroy};
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 50px;

  @media ${screens.md} {
    display: block;
  }
`;

export const CopyrightMobile = styled.p`
  font-family: ${fonts.poppins};
  font-size: 1.2rem;

  margin-top: 24px;

  @media ${screens.md} {
    display: none;
  }
`;
