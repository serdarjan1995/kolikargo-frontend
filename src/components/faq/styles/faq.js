import styled from "styled-components/macro";
import { fonts, screens, sizes } from "../../../styles/variables";

export const Container = styled.div`
  margin-top: 190px;
  max-width: ${sizes.mainMaxWidth};
  padding: 0 32px;
  padding-bottom: 30px;

  @media ${screens.lg} {
    padding-bottom: 280px;
    padding-top: 136px;
    margin: 0 auto;
    margin-top: 76px;
  }
`;

export const Title = styled.h2`
  color: #23262f;
  font-family: ${fonts.dmSans};
  font-size: 4rem;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
`;

export const TabList = styled.ul`
  & > * + * {
    margin-top: 40px;
  }
`;

export const TabItem = styled.li`
  color: ${({ active }) => (active ? "#23262F" : "#777E90")};
`;

export const TabButton = styled.button`
  align-items: center;
  color: inherit;
  display: flex;
`;

export const TabIconContainer = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const Accordion = styled.div`
  max-width: 735px;
  width: 100%;

  @media ${screens.lg} {
    margin-left: auto;
  }
`;

export const AccordionList = styled.ul``;

export const AccordionItem = styled.li`
  font-family: ${fonts.poppins};
`;

export const AccordionToggleButton = styled.button`
  padding: 7px 0;
  position: relative;
  text-align: left;
  width: 100%;
`;

export const AccordionContentTitle = styled.h3`
  color: #23262f;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const AccordionContentText = styled.p`
  color: #777e90;
  margin-top: 40px;
`;

export const HR = styled.hr`
  background: #e6e8ec;
  border: none;
  height: 1px;
  margin: 33px 0;
  width: 100%;
`;

export const AccordionIconContainer = styled.div`
  position: absolute;
  right: 20px;
  transform: ${({ active }) =>
    active ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)"};
  top: 50%;
`;

export const TextLink = styled.a`
  color: #3b71fe;
  font-weight: 500;
`;

export const InputContainer = styled.div`
  box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
  border: 2px solid rgba(244, 245, 246, 1);
  border-radius: 15px;
  line-height: 24px;
  margin: 0 auto;
  margin-top: 32px;
  max-width: 586px;
  position: relative;
  overflow: hidden;
`;

export const Input = styled.input`
  color: black;
  font-size: 1.6rem;
  outline: none;
  padding: 24px;
  width: 100%;

  &::placeholder {
    color: #b1b5c3;
    font-family: ${fonts.poppins};
    font-size: inherit;
    font-weight: 500;
  }
`;

export const SearchboxButton = styled.button`
  /*   align-items: center ;
  background: #3b71fe;
  border-radius: 10px;
  display: flex;
  height: 40px;
  width: 40px; */
`;

export const SearchboxText = styled.p`
  color: #777e90;
  font-family: ${fonts.poppins};
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 16px;
  line-height: 24px;
`;
