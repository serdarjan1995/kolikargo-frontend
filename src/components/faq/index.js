import React, { useState } from "react";
import "styled-components/macro";
import { IconButton } from "../button/styles/button";
import { ChevronDownIcon, SearchIcon } from "../icons";
import {
  Container,
  Title,
  Text,
  TabList,
  TabItem,
  TabButton,
  TabIconContainer,
  Accordion,
  AccordionList,
  AccordionItem,
  AccordionToggleButton,
  HR,
  AccordionIconContainer,
  TextLink,
  AccordionContentText,
  AccordionContentTitle,
  InputContainer,
  Input,
  SearchboxText,
} from "./styles/faq";

function FAQ({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

FAQ.Title = function FAQTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

FAQ.Text = function FAQText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

FAQ.TabList = function FAQTabList({ children, ...rest }) {
  return <TabList {...rest}>{children}</TabList>;
};

FAQ.TabItem = function FAQTabItem({ children, ...rest }) {
  return <TabItem {...rest}>{children}</TabItem>;
};

FAQ.TabButton = function FAQTabButton({ children, ...rest }) {
  return <TabButton {...rest}>{children}</TabButton>;
};

FAQ.TabIconContainer = function FAQTabIconContainer({ children, ...rest }) {
  return <TabIconContainer {...rest}>{children}</TabIconContainer>;
};

FAQ.AccordionItem = function FAQAccordionItem({ title, content, ...rest }) {
  const toggleContent = () => setShowContent(!showContent);
  const [showContent, setShowContent] = useState(false);

  return (
    <AccordionItem {...rest}>
      <AccordionToggleButton onClick={toggleContent}>
        <AccordionContentTitle>{title}</AccordionContentTitle>
        <AccordionIconContainer active={showContent}>
          <ChevronDownIcon />
        </AccordionIconContainer>
      </AccordionToggleButton>
      {showContent && <AccordionContentText>{content}</AccordionContentText>}
    </AccordionItem>
  );
};

FAQ.Accordion = function FAQAccordion({ items, ...rest }) {
  return (
    <Accordion {...rest}>
      <AccordionList>
        <li>
          <HR
            css={`
              margin-top: 0;
            `}
          />
        </li>
        {items.map(({ title, content }, i, arr) => (
          <>
            <FAQ.AccordionItem title={title} content={content} />
            {i !== arr.length - 1 && (
              <li>
                <HR />
              </li>
            )}
          </>
        ))}
      </AccordionList>
    </Accordion>
  );
};

FAQ.HR = function FAQHR({ children, ...rest }) {
  return <HR {...rest}>{children}</HR>;
};

FAQ.TextLink = function FAQTextLink({ children, ...rest }) {
  return <TextLink {...rest}>{children}</TextLink>;
};

FAQ.Searchbox = function FAQSearchbox({ placeholder, ...rest }) {
  return (
    <InputContainer {...rest}>
      <Input placeholder={placeholder} />
      <IconButton
        css={`
          height: 40px;
          position: absolute;
          right: 20px;
          transform: translateY(-50%);
          top: 50%;
          width: 40px;
        `}
      >
        <SearchIcon />
      </IconButton>
    </InputContainer>
  );
};

FAQ.SearchboxText = function FAQSearchboxText({ children, ...rest }) {
  return <SearchboxText {...rest}>{children}</SearchboxText>;
};

export default FAQ;
