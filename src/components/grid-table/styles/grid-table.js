import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { fonts } from "../../../styles/variables";

const getStepperLineStyleByStatus = (status) => css`
  background: ${status === "on_way"
    ? "#757575"
    : status === "delivered"
    ? "#0AC05E"
    : "#757575"};

  width: ${status === "on_way" ? "50%" : status === "delivered" ? "100%" : "0"};
`;

const getStepperCircleStyleByStatus = (status) => css`
  background: ${status === "on_way"
    ? "#757575"
    : status === "delivered"
    ? "#0AC05E"
    : "#757575"};

  height: ${status === "on_way"
    ? "9px"
    : status === "delivered"
    ? "16px"
    : "0"};

  width: ${status === "on_way" ? "9px" : status === "delivered" ? "16px" : "0"};
`;

export const Container = styled.div`
  display: grid;
  font-family: ${fonts.gilroy};
  margin-top: 26px;
  width: 100%;
`;

export const RowGroup = styled.div`
  & > * + * {
    margin-top: 12px;
  }
`;

export const Row = styled.div`
  align-items: center;
  border: ${({ headRow }) =>
    headRow ? 0 : "0.5px solid rgba(226, 232, 245, 1)"};
  border-radius: 15px;
  display: grid;
  grid-template-columns: 30% repeat(5, 13%) 5%;
  padding: 18px 30px;
`;

export const Head = styled.div``;

export const Body = styled.div``;

export const DataTitle = styled.h3`
  color: #acacac;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Data = styled.div`
  padding: 0 10px;
`;

export const IconContainer = styled.div`
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  display: flex;
  font-size: 1.8rem;
  height: 29px;
  justify-content: center;
  margin-right: 11px;
  width: 29px;
`;

export const Text = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const DataText = styled.p`
  color: #666666;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const StepperLine = styled.div`
  left: 0;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const StepperCircle = styled.div`
  border-radius: 50%;
  content: "";
  display: block;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  top: 50%;
`;

export const Stepper = styled.div`
  background: #e8e8e8;
  height: 2px;
  margin-top: 13px;
  position: relative;
  width: 100%;

  & ${StepperLine} {
    ${({ status }) => getStepperLineStyleByStatus(status)}
  }

  & ${StepperLine} ${StepperCircle} {
    ${({ status }) => getStepperCircleStyleByStatus(status)};
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  align-items: center;
  border: 1.5px solid rgba(120, 120, 120, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 30px;
  width: 30px;
`;
