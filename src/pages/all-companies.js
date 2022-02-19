import React from "react";
import "styled-components/macro";
import { Breadcrumb, Card, Flex, MainLayout } from "../components";
import {
  CardContainer,
  CargoPickerContainer,
  DropdownContainer,
  OverlayDropdownContainer,
} from "../containers";
import { useAllCompaniesLogic, useBreadcrumb, useLanguage, useTab } from "../hooks";
import { fonts, screens } from "../styles/variables";
import lnMap from "../languages/language-maps/shared-lang-map";
import { useTranslation } from "react-i18next";

function AllCompanies() {
  const { t } = useTranslation();
  const { currentTab, handleTabClick } = useTab(lnMap.highlights);
  const { data, tabs } = useAllCompaniesLogic();
  const { companyCardFilterItems } = useLanguage();
  useBreadcrumb();

  return (
    <>
      <div
        css={`
          background: linear-gradient(
            139.01deg,
            #adc5dd -27.34%,
            #b5cdea 28.65%,
            #c5c6db 49.41%,
            #d3919b 66.03%,
            #bf89ba 81.58%,
            #5e4878 102.62%
          );
          width: 100%;
          padding: 0 20px;
        `}
      >
        <div
          css={`
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
            top: 39px;

            @media ${screens.lg} {
              top: 58px;
            }
          `}
        >
          <CargoPickerContainer />
        </div>
      </div>
      <MainLayout>
        <div
          css={`
            margin-top: 73px;
            @media ${screens.lg} {
              margin-top: 95px;
            }
          `}
        >
          <Breadcrumb />
        </div>
        <div
          css={`
            font-family: ${fonts.BaiJamjuree};
            margin-top: 34px;

            @media ${screens.lg} {
              margin-top: 42px;
            }
          `}
        >
          <h2
            css={`
              color: black;

              font-size: 3.3rem;
              font-weight: 700;
            `}
          >
            {t(lnMap.all_companies)}
          </h2>
          <Flex
            align="center"
            css={`
              margin-top: 10px;
            `}
          >
            <p
              css={`
                color: #a1a1a1;
                font-size: 1.5rem;
                font-weight: 600;
              `}
            >
              {t(lnMap.total_founded)}
            </p>
            <div
              css={`
                border: 2px solid currentColor;
                border-radius: 8px;
                color: #58c27d;
                font-size: 1.5rem;
                font-weight: 700;
                margin-left: 10px;
                line-height: 15.57px;
                padding: 4px 18px;
              `}
            >
              <p>
                {data.hits?.data?.length || " "} {t(lnMap.company)}
              </p>
            </div>
          </Flex>
        </div>
        <div
          css={`
            margin-bottom: 58px;
            margin-top: 29px;

            @media ${screens.lg} {
              margin-bottom: 139px;
              margin-top: 66px;
            }
          `}
        >
          <Flex
            justify="space-between"
            direction="column"
            css={`
              @media ${screens.md} {
                flex-direction: row;
              }
            `}
          >
            <div
              css={`
                margin-bottom: 25px;
                width: 100%;

                @media ${screens.md} {
                  display: none;
                }
              `}
            >
              <DropdownContainer
                items={tabs}
                currentItem={currentTab}
                onItemClick={handleTabClick}
                circledIcon
              />
            </div>
            <div
              css={`
                display: none;
                @media ${screens.md} {
                  display: block;
                }
              `}
            >
              <Card.TabContainer>
                {tabs.map(({ name }) => (
                  <Card.TabButton
                    key={name}
                    onClick={() => handleTabClick(name)}
                    active={name === currentTab}
                  >
                    {t(lnMap[name])}
                  </Card.TabButton>
                ))}
              </Card.TabContainer>
            </div>
            <OverlayDropdownContainer
              items={companyCardFilterItems}
              width="256px"
            />
          </Flex>
          <Card.Grid
            css={`
              margin-top: 25px;
              @media ${screens.md} {
                margin-top: 0;
              }
            `}
          >
            {data.hits?.data?.map((cardData) => (
              <CardContainer cardData={cardData} key={cardData.id} />
            )) || null}
          </Card.Grid>
        </div>
      </MainLayout>
    </>
  );
}

export default AllCompanies;
