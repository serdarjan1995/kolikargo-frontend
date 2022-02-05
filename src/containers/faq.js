import React, { useMemo } from "react";
import "styled-components/macro";
import { useTranslation } from "react-i18next";
import lnMap from "../languages/language-maps/shared-lang-map";
import { FAQ, Flex, MainLayout } from "../components";
import {
  CircleAndSquareIcon,
  HouseIcon2,
  LightningIcon,
} from "../components/icons";
import { DropdownContainer } from ".";
import { useTab } from "../hooks";
import { screens, sizes } from "../styles/variables";

const items = [
  {
    title: "How does it work?",
    content:
      'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."',
  },
  {
    title: "How to start with Stacks?",
    content:
      'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."',
  },
  {
    title: "Dose it suppport Dark Mode?",
    content:
      'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."',
  },
  {
    title: "Does it support Auto-Layout?",
    content:
      'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode."',
  },
];

function FAQContainer() {
  const { t } = useTranslation();
  const { currentTab, handleTabClick } = useTab(lnMap.faq_tab1);

  const tabs = useMemo(
    () => [
      { name: lnMap.faq_tab1, icon: <HouseIcon2 /> },
      { name: lnMap.faq_tab2, icon: <CircleAndSquareIcon /> },
      { name: lnMap.faq_tab3, icon: <LightningIcon /> },
    ],
    []
  );

  return (
    <>
      <div>
        <Flex
          css={`
            margin-top: 80px;
            padding: 0 46px;

            @media ${screens.lg} {
              margin-top: 110px;
            }
          `}
        >
          <div
            css={`
              text-align: center;
              width: 100%;
            `}
          >
            <FAQ.Title>{t(lnMap.faq_search_title)}</FAQ.Title>
            <FAQ.SearchboxText>{t(lnMap.faq_search_text)}</FAQ.SearchboxText>
            <FAQ.Searchbox placeholder={t(lnMap.faq_search_placeholder)} />
          </div>
        </Flex>
        <main>
          <FAQ>
            <div>
              <FAQ.Title>{t(lnMap.faq_title)}</FAQ.Title>
              <FAQ.Text
                css={`
                  margin-top: 20px;
                `}
              >
                {t(lnMap.faq_text_part1)}{" "}
                <FAQ.TextLink>{t(lnMap.faq_support_link)}</FAQ.TextLink>{" "}
                {t(lnMap.faq_text_part2)}
              </FAQ.Text>
              <div
                css={`
                  margin-top: 40px;

                  @media ${screens.lg} {
                    display: none;
                  }
                `}
              >
                <DropdownContainer
                  items={tabs}
                  currentItem={currentTab}
                  onItemClick={handleTabClick}
                  bg=" #fcfcfd"
                />
              </div>
            </div>
            <Flex
              css={`
                margin-top: 40px;

                @media ${screens.lg} {
                  margin-top: 80px;
                }
              `}
            >
              <div
                css={`
                  display: none;

                  @media ${screens.lg} {
                    display: block;
                  }
                `}
              >
                <FAQ.TabList>
                  {tabs.map(({ name, icon }) => (
                    <FAQ.TabItem active={name === currentTab}>
                      <FAQ.TabButton onClick={() => handleTabClick(name)}>
                        <FAQ.TabIconContainer>{icon}</FAQ.TabIconContainer>
                        <p>{t(lnMap[name])}</p>
                      </FAQ.TabButton>
                    </FAQ.TabItem>
                  ))}
                </FAQ.TabList>
              </div>
              <FAQ.Accordion items={items} />
            </Flex>
          </FAQ>
        </main>
      </div>
    </>
  );
}

export default FAQContainer;
