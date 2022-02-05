import styled from "styled-components/macro";
import { colors, fonts, screens, sizes } from "../../../styles/variables";

export const Container = styled.div`
  margin: auto;
  margin-top: 54px;
  max-width: 240px;
  text-align: center;

  @media ${screens.lg} {
    max-width: ${sizes.sectionMaxWidth};
    padding-right: 0;
    padding-top: 200px;
    padding-left: 0;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.poppins};
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 53px;
  text-align: center;

  @media ${screens.lg} {
    font-size: 4.4rem;
    line-height: 49px;
  }
`;

export const TitleAlt = styled.p`
  font-family: ${fonts.gilroy};
  font-weight: 400;
  margin-top: 20px;
  line-height: 19px;

  @media ${screens.lg} {
    font-size: 1.7rem;
    line-height: 21px;
  }
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 13px;

  & li:nth-of-type(n + 2) {
    margin-top: 60px;
  }

  @media ${screens.lg} {
    align-items: baseline;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 45px;

    & li:nth-of-type(n + 2) {
      margin-top: 0;
      margin-left: 30px;
    }
  }
`;

export const Item = styled.li`
  @media ${screens.lg} {
    /* flex: 1; */
  }
`;

export const Img = styled.img`
  margin: auto;
`;

export const TitleSmall = styled.h3`
  font-family: ${fonts.gilroy};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 31px;
  margin-top: 13px;

  @media ${screens.lg} {
    font-size: 2.2rem;
    line-height: 27px;
  }
`;

export const Text = styled.p`
  color: ${colors.gray8};
  font-family: ${fonts.gilroy};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;

  @media ${screens.lg} {
    margin: 10px auto;
    max-width: 240px;
  }
`;
