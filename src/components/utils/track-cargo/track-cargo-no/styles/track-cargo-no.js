import styled from "styled-components/macro";
import { fonts, screens } from "../../../../../styles/variables";

export const Container = styled.div`
  border-radius: 15px;
  background: rgba(51, 113, 245, 1);
  font-family: ${fonts.BaiJamjuree};
  margin-top: 15px;
  padding: 20px 37px;
  padding-top: 22px;
  text-align: center;

  @media ${screens.md} {
    flex-basis: 55%;
    margin-left: 24px;
    margin-top: 0;
    padding: 30px 46px;
    padding-bottom: 45px;
  }
`;

export const Title = styled.h3`
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const InputContainer = styled.div`
  border-radius: 15px;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  width: 100%;

  @media ${screens.md} {
    margin-top: 31px;
  }
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  font-size: 1.7rem;
  justify-content: center;
  position: absolute;
  right: 20px;
  transform: translateY(-50%);
  top: 50%;

  @media ${screens.md} {
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  font-size: 2rem;
  font-weight: 700;
  line-height: 25px;
  padding: 18px;
  text-align: inherit;
  width: 100%;
`;

export const Text = styled.p`
  text-align: center;
`;
