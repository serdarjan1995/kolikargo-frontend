import styled from "styled-components/macro";
import {HoveredBlackBtnStyle, HoveredBlueBtnStyle} from "../../../../styles/mixins";
import {
  colors,
  fonts,
  fontSizes,
  radius,
  screens,
  transitions,
} from "../../../../styles/variables";

export const Container = styled.div`
  background: linear-gradient(
    83.59deg,
    #fcfcfd 36.52%,
    rgba(252, 252, 253, 0.83) 98.8%
  );
  border-radius: ${radius.roundedLG};
  box-shadow: 0px 40px 64px -32px rgba(15, 15, 15, 0.1);
  padding-bottom: 22px;

  @media ${screens.lg} {
    backdrop-filter: blur(32px);
    padding: 40px 20px;
    padding-bottom: 49px;
    padding-top: 25px;
    margin: 0 auto;
    max-width: 1125px;
    width: 100%;
  }

  @media ${screens.lg2} {
    padding: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 15px 10px;
  position: relative;

  @media ${screens.lg2} {
    padding: 15px 22px;
  }
`;

export const ContentInnerWrapper = styled.div`
  font-family: ${fonts.poppins};
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${screens.lg} {
    flex-direction: row;
    margin-top: 33px;
  }
`;

export const Input = styled.input`
  background: transparent;
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.8;
  outline: none;
  width: 100%;

  &::placeholder {
    color: inherit;
  }

  @media ${screens.lg} {
    font-size: 2.4rem;
  }
`;

export const IconContainer = styled.div`
  color: #b1b5c3;
  font-size: 2rem;
  flex-shrink: 0;
  line-height: 2;
  margin-right: 1.4rem;
  width: 25px;

  @media ${screens.lg} {
    line-height: 2.5;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${colors.gray4};
  padding: 25px 20px;
  width: 100%;

  @media ${screens.lg} {
    padding: 25px 0;
  }
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-family: ${fonts.dmSans};
  font-size: 1.7rem;
`;

export const Text = styled.p`
  color: ${colors.gray7};
  font-size: ${fontSizes.sm};
  font-weight: 400;

  @media ${screens.lg} {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  align-items: center;
  align-self:center;
  background: ${colors.blue};
  border-radius: 50%;
  display: none;
  flex-shrink: 0;
  height: 64px;
  justify-content: center;
  margin-left: 30px;
  transition: ${transitions.buttonBgHover};
  outline: none;
  width: 64px;

  @media ${screens.lg} {
    display: flex;
  }

  &:hover,
  &:focus {
    ${HoveredBlueBtnStyle}
  }
`;

export const ButtonMobile = styled(Button)`
  align-items: center;
  border-radius: ${radius.roundedMD};
  color: white;
  font-family: ${fonts.gilroy};
  font-weight: 600;
  display: flex;
  margin: 10px auto;
  margin-bottom: 0;
  max-width: 244px;
  height: auto;
  padding: 14px 46px;
  width: 100%;

  @media ${screens.lg} {
    display: none;
  }
`;

export const ButtonShowResults = styled.button`
  align-items: center;
  border-radius: ${radius.roundedMD};
  color: white;
  font-family: ${fonts.gilroy};
  font-weight: 600;
  display: flex;
  margin: auto;
  max-width: 244px;
  height: auto;
  padding: 14px 46px;
  align-self:center;
  background: ${colors.blackDark};
  flex-shrink: 0;
  justify-content: center;
  transition: ${transitions.buttonBgHover};
  outline: none;

  &:hover,
  &:focus {
    ${HoveredBlackBtnStyle}
  }
`;

export const ButtonSmall = styled.button`
  display: flex;
  padding-top: 5px;
  position: absolute;
  top: 15px;
  right: 10px;
`;
