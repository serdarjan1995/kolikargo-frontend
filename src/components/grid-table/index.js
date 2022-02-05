import React from "react";
import { SmallCheckIcon } from "../icons";
import { AbsoluteCenter } from "../../components";
import {
  ButtonLink,
  Container,
  Data,
  DataText,
  DataTitle,
  Head,
  Body,
  Row,
  RowGroup,
  Stepper,
  Text,
  IconContainer,
  StepperLine,
  StepperCircle,
} from "./styles/grid-table";

function GridTable({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

GridTable.RowGroup = function GridTableRowGroup({ children, ...rest }) {
  return <RowGroup {...rest}>{children}</RowGroup>;
};

GridTable.Row = function GridTableRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

GridTable.Head = function GridTableHead({ children, ...rest }) {
  return <Head {...rest}>{children}</Head>;
};

GridTable.Body = function GridTableBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};

GridTable.DataTitle = function GridTableDataTitle({ children, ...rest }) {
  return <DataTitle {...rest}>{children}</DataTitle>;
};

GridTable.Data = function GridTableData({ children, ...rest }) {
  return <Data {...rest}>{children}</Data>;
};

GridTable.DataText = function GridTableDataText({ children, ...rest }) {
  return <DataText {...rest}>{children}</DataText>;
};

GridTable.Text = function GridTableText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

GridTable.Stepper = function GridTableStepper({ status, ...rest }) {
  return (
    <Stepper status={status} {...rest}>
      <StepperLine>
        <StepperCircle>
          {status === "delivered" && (
            <AbsoluteCenter>
              <SmallCheckIcon />
            </AbsoluteCenter>
          )}
        </StepperCircle>
      </StepperLine>
    </Stepper>
  );
};

GridTable.ButtonLink = function GridTableButtonLink({ children, ...rest }) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

GridTable.IconContainer = function GridTableIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

export default GridTable;
