import styled from "styled-components/macro";
import { fonts, screens } from "../../../../styles/variables";

export const Container = styled.div`
  background: #fcfcfd;
  border: 1px solid rgba(230, 232, 236, 1);
  border-radius: 15px;
  filter: drop-shadow(0 40px 32px rgba(15, 15, 15, 0.12));
  font-family: ${fonts.poppins};
  padding: 22px 27px;
  padding-bottom: 40px;
  width: 100%;
`;

export const ImgContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const Img = styled.img``;

export const CompanyName = styled.p`
  color: #23262f;
  font-weight: 700;
  line-height: 24px;
`;

export const Text = styled.p`
  color: #777e90;
  font-size: 1.4rem;
`;

export const TextSmall = styled.p`
  color: #777e90;
  font-size: 1.2rem;
  line-height: 20px;
`;

export const InfoContainer = styled.div`
  border-radius: 20px;
  background: #f4f5f6;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  margin-top: 20px;
  padding: 20px 30px;
  padding-bottom: 25px;

  @media ${screens.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

export const Info = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 24px;
`;

export const PriceTitle = styled.h2`
  font-family: ${fonts.gilroy};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 32px;

  @media ${screens.lg} {
    font-size: 2.4rem;
  }
`;

export const PriceRow = styled.div`
  align-items: center;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
`;
