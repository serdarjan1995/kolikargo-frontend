import styled from "styled-components/macro";
import { fonts, screens } from "../../../../styles/variables";

export const Container = styled.div`
  border: 0.5px solid rgba(226, 226, 226, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.gilroy};
  padding: 24px 19px;

  @media ${screens.md} {
    padding: 31px 25px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  margin-top: 20px;
  width: 100%;

  @media ${screens.md} {
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(0, 222px));
  }
`;

export const Title = styled.h3`
  color: black;
  font-family: Gilroy;
  font-size: 1.7rem;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 12px;

  @media ${screens.md} {
    font-weight: 500;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  background: #fbfbfb;
  border-radius: 10px;
  border: 0.7px solid rgba(228, 228, 228, 1);
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 13px;
  margin: 0 auto;
  margin-top: 54px;
  max-width: 155px;
  width: 100%;

  @media ${screens.md} {
    font-size: 1.4rem;
    margin-top: 70px;
    padding: 17px;
  }
`;
