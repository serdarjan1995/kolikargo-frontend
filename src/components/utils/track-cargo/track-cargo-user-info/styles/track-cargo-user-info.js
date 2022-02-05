import styled from "styled-components/macro";
import { screens } from "../../../../../styles/variables";

export const Container = styled.div`
  background: white;
  border-radius: 15px;
  border: 1px solid rgba(238, 241, 242, 1);
  padding: 33px 29px;

  @media ${screens.md} {
    padding: 38px 68px;
  }
`;

export const List = styled.ul``;

export const InnerList = styled.ul`
  & > * + * {
    margin-top: 21px;
  }

  @media ${screens.md} {
    & > * + * {
      margin-top: 24px;
    }
  }
`;

export const Item = styled.li``;

export const InnerItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: #9f9f9f;
  font-size: 1.5rem;
  font-weight: 400;

  @media ${screens.md} {
    font-size: 1.7rem;
  }
`;

export const Text = styled.p`
  color: black;
  font-weight: 600;
`;

export const HR = styled.hr`
  border: ${({ dashed }) =>
    dashed ? "1px dashed #CDCDCD" : "1px solid #F5F5F5"};
  margin-bottom: 19px;
  margin-top: 30px;
`;
