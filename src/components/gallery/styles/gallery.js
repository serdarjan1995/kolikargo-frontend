import styled from "styled-components/macro";
import { screens } from "../../../styles/variables";

export const Container = styled.div`
  background: white;
  display: flex;
  min-height: 100vh;
  padding: 35px;
  position: relative;
  width: 100%;

  @media ${screens.md} {
    border-radius: 30px;
    min-height: auto;
    height: 100vh;
    max-height: 800px;
    min-width: 640px;
    padding: 120px;
    padding-bottom: 20px;
    padding-top: 20px;
    width: auto;
  }
`;

export const ImgContainer = styled.div`
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const List = styled.ul`
  display: grid;
  gap: 13px;
  grid-template-columns: repeat(3, 78px);
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  @media ${screens.md} {
    margin-top: 40px;
    gap: 16px;
    grid-template-columns: repeat(3, 97px);
  }
`;

export const Item = styled.li`
  border-radius: 10px;
  height: 62px;
  overflow: hidden;
  outline: ${({ active }) => (active ? "3px solid blue" : "none")};

  @media ${screens.md} {
    height: 78px;
  }
`;

export const Button = styled.button`
  width: 100%;
`;

export const SmallButton = styled.button`
  align-items: center;
  background: white;
  border: 1px solid #dee6f1;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 0px #0000000f;
  color: #777e90;
  display: flex;
  font-size: 1rem;
  height: 43px;
  justify-content: center;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  width: 43px;
`;

export const ThumbnailContainer = styled.div`
  height: 100%;
`;

export const Thumbnail = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;
