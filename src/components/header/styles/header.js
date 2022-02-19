import styled from "styled-components/macro";
import {
  colors,
  fonts,
  fontSizes,
  padding,
  radius,
  screens,
  sizes,
  transitions,
} from "../../../styles/variables";

export const Container = styled.header`
  height: fit-content;
  margin: 0 auto;
  max-width: ${sizes.headerMaxWith};
  padding: ${padding.mobileCommon};
  padding-bottom: 35px;
  padding-top: 37px;
  width: 100%;

  @media ${screens.lg} {
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;

export const Wrapper = styled.div``;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  font-size: 2rem;
  font-family: ${fonts.BaiJamjuree};
  font-weight: 700;
  margin: 0;

  @media ${screens.lg} {
    font-size: 2.3rem;
  }
`;

export const SearchboxContainer = styled.div`
  background: ${colors.gray3};
  border-radius: ${radius.roundedMD};
  display: none;
  min-width: 250px;
  position: relative;

  @media ${screens.lg} {
    display: block;
  }
`;

export const Searchbox = styled.input`
  align-items: center;
  background: transparent;
  display: flex;
  font-family: ${fonts.BaiJamjuree};
  font-size: 1.5rem;
  font-weight: 400;
  height: ${sizes.headerSearchbox};
  padding: 16px 23px;
  position: relative;
  outline: none;
  width: 100%;
  &::placeholder {
    font: inherit;
  }
`;

export const SearchboxButton = styled.button`
  color: #8e8e8e;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ButtonLink = styled.button`
  border-radius: ${radius.roundedMD};
  border: 2px solid ${colors.gray4};
  color: black;
  font-family: ${fonts.BaiJamjuree};
  font-weight: 600;
  padding: 14px 35px;
  outline: none;
  transition: 150ms;
  transition-property: color, background, border-color;
  white-space: nowrap;

  &:hover,
  &:focus {
    background: #1e1e1e;
    border-color: #1e1e1e;
    color: white;
  }
`;

export const LoginButton = styled.button`
  border-radius: ${radius.roundedMD};
  border: 2px solid #00A857;
  color: #00A857;
  font-family: ${fonts.BaiJamjuree};
  font-weight: 600;
  padding: 14px 35px;
  outline: none;
  transition: 150ms;
  transition-property: color, background, border-color;
  white-space: nowrap;

  &:hover,
  &:focus {
    background: #00A857;
    border-color: #00A857;
    color: white;
  }
`;

export const IconContainer = styled.div``;

export const AvatarButton = styled.button`
  align-items: center;
  background: ${colors.green};
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  font-size: ${fontSizes.md};
  height: ${sizes.avatarMobile};
  justify-content: center;
  margin-right: 2.5rem;
  width: ${sizes.avatarMobile};

  @media ${screens.md} {
    font-size: ${fontSizes.xl};
    height: ${sizes.avatar};
    width: ${sizes.avatar};
  }
`;

export const AvatarImg = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;

export const Popover = styled.div``;

export const PopoverToggleButton = styled.button`
  align-items: center;
  border-radius: 10px;
  color: ${colors.gray5};
  display: flex;
  font-family: ${fonts.dmSans};
  font-size: ${fontSizes.sm};
  transition: ${transitions.buttonBgHover};
  padding: 0.5em;

  &:hover,
  &focus {
    background: #f4f5f6;
  }
`;

export const PopoverButtonTitle = styled.p``;

export const PopoverButton = styled.button``;
