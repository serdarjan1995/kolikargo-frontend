import React, { useState } from "react";
import { ChevronDownIcon } from "../icons";
import {
  Container,
  IconContainer,
  Item,
  ItemNumber,
  ItemTitle,
  Button,
  List,
  Text,
  TextContainer,
  Title,
  TabContainer,
  Tab,
} from "./styles/accordion";

function Accordion({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Accordion.Title = function AccordionTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Accordion.List = function AccordionList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Accordion.Item = function AccordionItem({
  children,
  title,
  text,
  index: i,
  ...rest
}) {
  const [showItem, setShowItem] = useState(false);

  const handleItemBtnClick = () => {
    setShowItem(!showItem);
  };

  return (
    <Item {...rest}>
      <Button onClick={handleItemBtnClick}>
        <ItemNumber active={showItem}>
          {i > 10 ? i + 1 : `0${i + 1}`}
        </ItemNumber>
        <ItemTitle>{title}</ItemTitle>
        <IconContainer active={showItem}>
          <ChevronDownIcon />
        </IconContainer>
      </Button>
      {showItem && (
        <TextContainer>
          <Text>{text}</Text>
        </TextContainer>
      )}
    </Item>
  );
};

Accordion.ItemNumber = function AccordionItemNumber({ children, ...rest }) {
  return <ItemNumber {...rest}>{children}</ItemNumber>;
};

Accordion.ItemTitle = function AccordionItemTitle({ children, ...rest }) {
  return <ItemTitle {...rest}>{children}</ItemTitle>;
};

Accordion.Text = function AccordionText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Accordion.IconContainer = function AccordionIconContainer({
  children,
  ...rest
}) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Accordion.TabContainer = function AccordionTabContainer({ children, ...rest }) {
  return <TabContainer {...rest}>{children}</TabContainer>;
};

Accordion.Tab = function AccordionTab({ children, ...rest }) {
  return <Tab {...rest}>{children}</Tab>;
};

export default Accordion;
