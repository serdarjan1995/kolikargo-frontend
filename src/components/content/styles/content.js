import styled from "styled-components/macro";
import { fonts } from "../../../styles/variables";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 746px;
`;

export const Title = styled.h1`
  font-family: ${fonts.dmSans};
  font-size: 4rem;
  font-weight: 700;
  line-height: 60px;
`;

export const Text = styled.p`
  font-family: ${fonts.dmSans};
  font-size: 2rem;
  font-weight: 500;
  line-height: 32px;
`;

export const Article = styled.article``;

export const Section = styled.section``;

export const ImgContainer = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const Img = styled.img``;
