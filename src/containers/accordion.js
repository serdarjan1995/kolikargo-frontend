import React, { useMemo } from "react";
import lnMap from "../languages/language-maps/home-lang-map";
import { Accordion, Flex } from "../components";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { DropdownContainer } from ".";
import { screens } from "../styles/variables";
import { useTab } from "../hooks";

function AccordionContainer() {
  const { t } = useTranslation();
  const { currentTab, handleTabClick } = useTab(lnMap.home_faq_tab1);

  const tabs = useMemo(
    () => [
      { name: lnMap.home_faq_tab1 },
      { name: lnMap.home_faq_tab2 },
      { name: lnMap.home_faq_tab3 },
    ],
    []
  );

  const mockData = useMemo(
    () => [
      { title: t(lnMap.home_faq_tab1_question1), text: "lorem ipsum" },
      {
        title: t(lnMap.home_faq_tab1_question2),
        text: 'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your',
      },
      { title: t(lnMap.home_faq_tab1_question3), text: "lorem ipsum" },
      { title: t(lnMap.home_faq_tab1_question4), text: "lorem ipsum" },
    ],
    [t]
  );

  return (
    <Accordion>
      <Accordion.Title>{t(lnMap.home_faq_title)}</Accordion.Title>
      <div
        css={`
          @media ${screens.lg} {
            display: none;
          }
        `}
      >
        <DropdownContainer
          items={tabs}
          currentItem={currentTab}
          onItemClick={handleTabClick}
        />
      </div>
      <Flex>
        <Accordion.TabContainer>
          {tabs.map(({ name }) => (
            <Accordion.Tab
              key={name}
              active={name === currentTab}
              onClick={() => handleTabClick(name)}
            >
              {t(lnMap[name])}
            </Accordion.Tab>
          ))}
        </Accordion.TabContainer>
      </Flex>
      <Accordion.List>
        {mockData.map(({ title, text }, i) => (
          <Accordion.Item title={title} text={text} index={i} key={title} />
        ))}
      </Accordion.List>
    </Accordion>
  );
}

export default AccordionContainer;
