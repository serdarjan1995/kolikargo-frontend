import styled from "styled-components/macro";
import { fonts, screens, transitions } from "../../../styles/variables";

export const Container = styled.div`
  width: 100%;
`;

export const List = styled.ul``;

export const Item = styled.li`
  border-bottom: 1px solid #e6e8ec;
  padding: 35px 0;
`;

export const Title = styled.h3`
  color: #141416;
  font-family: ${fonts.dmSans};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Text = styled.p`
  color: #353945;
  font-family: ${fonts.dmSans};
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 4px;
`;

export const TextSmall = styled.p`
  color: #777e90;
  font-family: ${fonts.dmSans};
  font-size: 1.2rem;
  margin-top: 8px;
`;

export const AvatarContainer = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  font-size: 2rem;
  height: 48px;
  justify-content: center;
  margin-right: 20px;
  width: 48px;
`;

export const Avatar = styled.img``;

export const StarBox = styled.div`
  display: flex;
  margin-left: auto;

  & > * + * {
    margin-left: 4px;
  }
`;

export const StarContainer = styled.div`
  color: ${({ filled }) => (filled ? "#ffd166" : "#777E90")};
  font-size: 1.6rem;
`;

export const StarLabel = styled.label`
  cursor: pointer;
`;

export const Username = styled.p`
  font-family: ${fonts.dmSans};
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Box = styled.div`
  align-items: center;
  display: flex;

  & > * + * {
    margin-left: 18px;
  }
`;

export const Gallery = styled.div`
  display: flex;
  margin-top: 28px;

  & > * + * {
    margin-left: 15px;
  }

  @media ${screens.lg} {
    padding-left: 68px;
  }
`;

export const GalleryImgContainer = styled.div`
  border-radius: 10px;
`;

export const GalleryImg = styled.img``;

export const InputContainer = styled.div`
  align-items: flex-start;
  border: 2px solid rgba(230, 232, 236, 1);
  border-radius: 16px;
  color: #777e90;
  display: flex;
  margin-top: 33px;
  padding: 14px 24px;
  padding-right: 16px;
  padding-bottom: 0;

  @media ${screens.lg} {
    padding-bottom: 10px;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  display: inline-block;
  font-size: 1.6rem;
  height: auto;
  margin-right: 15px;
  padding-top: 8px;
  resize: none;
  outline: none;
  width: 100%;
  overflow-y: auto;

  &::placeholder {
    font-family: ${fonts.poppins};
  }

  @media ${screens.lg} {
    padding-top: 13px;
  }
`;

export const RadioStar = styled.input`
  display: none;
`;

export const CommentText = styled.p`
  color: #777e90;
  font-size: 1.3rem;
`;

export const IconContainer = styled.div`
  align-items: center;
  color: inherit;
  display: flex;
  font-size: 1rem;
  height: 32px;
  justify-content: center;
  width: 32px;

  @media ${screens.lg} {
    font-size: 0.7rem;
    height: initial;
    margin-left: 15px;
    order: 2;
    width: initial;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: #3b71fe;
  border-radius: 10px;
  color: white;
  display: flex;
  transition: ${transitions.buttonBgHover};

  @media ${screens.lg} {
    border-radius: 15px;
    padding: 12px 16px;
  }

  &:hover,
  &:focus {
    background: #2965e5;
  }
`;

export const ButtonSmall = styled.button`
  color: inherit;
  display: flex;
  font-size: 2rem;
`;
