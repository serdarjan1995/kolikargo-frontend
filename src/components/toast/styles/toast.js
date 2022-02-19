import styled from "styled-components/macro";
import { fonts, indexes, screens } from "../../../styles/variables";

// const getIconContainerColorByVariant = {
//   success: "#E3F9DD",
//   error: "#FFE0E0",
//   warn: "#FFF4D6",
//   info: "#ECF4FF",
// };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${fonts.BaiJamjuree};
  left: 50%;
  min-width: 250px;
  position: fixed;
  transform: translateX(-50%);
  top: 60px;
  z-index: ${indexes.snackbar};

  & > * + * {
    margin-top: 1rem;
  }
`;

export const Content = styled.div`
  align-items: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 40px 0px #0000000f;
  display: flex;
  padding: 11px 14px;
  padding-right: 20px;
  text-align: center;
  user-select: none;
  width: 100%;

  @media ${screens.md} {
    min-width: 357px;
    padding: 13px 20px;
    padding-right: 23px;
  }
`;

export const Title = styled.h3`
  color: black;
  font-size: 1.5rem;
  font-weight: 600;

  @media ${screens.md} {
    font-size: 1.8rem;
  }
`;

export const Text = styled.p`
  color: #7b7b7b;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 5px;

  @media ${screens.md} {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: none;
  color: white;
  display: flex;
  font-size: 1rem;
  height: 30px;
  justify-content: center;
  margin-left: auto;
  width: 30px;

  @media ${screens.md} {
    font-size: 1.45rem;
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 22px;
`;

export const InnerIconContainer = styled.div`
  display: flex;
`;
