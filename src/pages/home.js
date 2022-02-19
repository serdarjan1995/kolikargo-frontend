import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "styled-components/macro";
import { Card, Flex } from "../components";
import {
  AccordionContainer,
  BlogContainer,
  CardContainer,
  //DropdownContainer,
  FeatureContainer1,
  //FeatureContainer2,
  HowToSendCargoContainer,
  HeroContainer,
  //OverlayDropdownContainer,
} from "../containers";
import { useHomeLogic, /*useLanguage, useTab*/ } from "../hooks";
import lnMap from "../languages/language-maps/shared-lang-map";
import lnMapHome from "../languages/language-maps/home-lang-map";
//import { screens } from "../styles/variables";
import * as ROUTES from "../constants/routes";

function Home() {
  const { t } = useTranslation();
  //const { currentTab, handleTabClick } = useTab(lnMap.highlights);
  const { data: cardData } = useHomeLogic();
  //const { companyCardFilterItems } = useLanguage();

  return (
    <>
      <HeroContainer />
      <FeatureContainer1 />
      <Card.Background>
        <Flex justify="space-between" css={`padding-bottom: 23px;`}>
          {/*<div*/}
          {/*  css={`*/}
          {/*    margin-bottom: 25px;*/}
          {/*    width: 100%;*/}

          {/*    @media ${screens.md} {*/}
          {/*      display: none;*/}
          {/*    }*/}
          {/*  `}*/}
          {/*>*/}
          {/*  <DropdownContainer*/}
          {/*    items={tabs}*/}
          {/*    currentItem={currentTab}*/}
          {/*    onItemClick={handleTabClick}*/}
          {/*    circledIcon*/}
          {/*  />*/}
          {/*</div>*/}
          <h3 css={`
              width: 273px;
              height: 63px;
              left: 100px;
              top: 1492px;
              
              font-family: Poppins;
              font-style: normal;
              font-weight: 600;
              font-size: 42px;
              line-height: 63px;
          `}>
            {t(lnMap.highlights)}
          </h3>
          {/*<div*/}
          {/*  css={`*/}
          {/*    display: none;*/}
          {/*    @media ${screens.md} {*/}
          {/*      display: block;*/}
          {/*    }*/}
          {/*  `}*/}
          {/*>*/}
          {/*  <Card.TabContainer>*/}
          {/*    {tabs.map(({ name }) => (*/}
          {/*      <Card.TabButton*/}
          {/*        key={name}*/}
          {/*        onClick={() => handleTabClick(name)}*/}
          {/*        active={name === currentTab}*/}
          {/*      >*/}
          {/*        {t(lnMap[name])}*/}
          {/*      </Card.TabButton>*/}
          {/*    ))}*/}
          {/*  </Card.TabContainer>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  css={`*/}
          {/*    display: none;*/}
          {/*    @media ${screens.md} {*/}
          {/*      display: block;*/}
          {/*    }*/}
          {/*  `}*/}
          {/*>*/}
          {/*  <OverlayDropdownContainer*/}
          {/*    items={companyCardFilterItems}*/}
          {/*    width="256px"*/}
          {/*  />*/}
          {/*</div>*/}
        </Flex>
        <Card.Grid>
          {cardData.hits?.data?.map((cardData) => (
            <>
              <CardContainer key={cardData.id} cardData={cardData} />
            </>
          )) || null}
        </Card.Grid>
        <Card.Button as={Link} to={ROUTES.ALL_COMPANIES}>
          {t(lnMap.action_show_all)}
        </Card.Button>
      </Card.Background>
      <HowToSendCargoContainer />
      <AccordionContainer />
      <BlogContainer title={t(lnMapHome.blog_title)} />
    </>
  );
}

export default Home;
