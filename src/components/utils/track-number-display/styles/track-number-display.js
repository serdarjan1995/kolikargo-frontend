import styled from "styled-components/macro";
import { fonts, screens } from "../../../../styles/variables";

export const Container = styled.div`
  align-items: center;
  border: 1px solid rgba(230, 232, 236, 1);
  border-radius: 15px;
  font-family: ${fonts.gilroy};
  display: flex;
  margin-top: 34px;
  padding: 17px 21px 18px 19px;

  @media ${screens.lg} {
    margin-top: 45px;
  }
`;

export const Text = styled.p`
  color: #848484;
  font-size: 1.5rem;
`;

export const No = styled.p`
  color: black;
  font-size: 1.7rem;
  margin-left: 13px;
`;

export const Button = styled.button`
  color: black;
  display: flex;
  font-size: 2.5rem;
  margin-left: auto;
`;
