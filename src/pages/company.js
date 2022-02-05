import React from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { AboutCompany, Flex, MainLayout, Tooltip } from "../components";
import { BoxesIcon, CalculatorIcon, TruckIcon } from "../components/icons";
import { CompanyCardContainer, CompanyCommentContainer } from "../containers";
import { useCompanyLogic } from "../hooks";
import lnMap from "../languages/language-maps/shared-lang-map";
import { screens } from "../styles/variables";
import CourierIMG from "../assets/mock/courier-real.jpg";

function Company() {
  const { t } = useTranslation();
  const { data } = useCompanyLogic();
  const {
    attributes,
    records = [],
    title,
    date_created,
    reviews,
    rating,
    images = [],
  } = data?.hits?.data || {};
  const [, , minimumWeight, maximumDeliveryDay, minimumDeliveryDay] =
    attributes || [];
  const { price } = records[0] || {};
  const companyCardData = {
    title,
    date_created,
    reviews,
    rating,
    image: CourierIMG,
  };

  return (
    <>
      <div
        css={`
          background: #9ac7b0;
          border-radius: 24px;
          display: none;
          height: 400px;
          margin: auto;
          max-width: 1224px;

          @media ${screens.lg} {
            display: block;
          }
        `}
      ></div>
      <MainLayout
        css={`
          @media ${screens.lg} {
            margin-top: 35px;
          }
        `}
      >
        <Flex
          align="center"
          direction="column"
          css={`
            @media ${screens.lg} {
              align-items: flex-start;
              flex-direction: row;
            }
          `}
        >
          <div
            css={`
              max-width: 100vw;
              padding: 0 16px;

              @media ${screens.lg} {
                padding: 0;
              }
            `}
          >
            <CompanyCardContainer companyCardData={companyCardData} />
          </div>
          <Flex
            direction="column"
            css={`
              margin-top: 30px;

              @media ${screens.lg} {
                padding: 0 76px;
                padding-left: 106px;
                margin-top: 0px;
              }
            `}
            width="100%"
          >
            <AboutCompany>
              <AboutCompany.List>
                <AboutCompany.Item>
                  <Flex>
                    <AboutCompany.IconContainer>
                      <BoxesIcon />
                    </AboutCompany.IconContainer>
                    <AboutCompany.Text
                      css={`
                        display: none;

                        @media ${screens.lg} {
                          display: block;
                        }
                      `}
                    >
                      {t(lnMap.product_card_minimum)}
                    </AboutCompany.Text>
                    <AboutCompany.Text
                      css={`
                        display: block;

                        @media ${screens.lg} {
                          display: none;
                        }
                      `}
                    >
                      {t(lnMap.minimum_shipment_abbreviated)}
                    </AboutCompany.Text>
                    <AboutCompany.TextBold>
                      {minimumWeight?.value} kg
                    </AboutCompany.TextBold>
                  </Flex>
                </AboutCompany.Item>
                <AboutCompany.Item>
                  <Flex>
                    <AboutCompany.IconContainer>
                      <TruckIcon />
                    </AboutCompany.IconContainer>
                    <AboutCompany.Text>
                      {t(lnMap.product_card_delivery)}
                    </AboutCompany.Text>
                    <AboutCompany.TextBold>
                      {minimumDeliveryDay?.value}-{maximumDeliveryDay?.value}{" "}
                      {t(lnMap.day)}
                    </AboutCompany.TextBold>
                  </Flex>
                </AboutCompany.Item>
                <AboutCompany.Item>
                  <Flex align="center">
                    <AboutCompany.IconContainer>
                      <CalculatorIcon />
                    </AboutCompany.IconContainer>
                    <AboutCompany.Text>
                      {t(lnMap.cargo_price)}
                    </AboutCompany.Text>
                    <AboutCompany.TextBold>
                      {price}$ {t(lnMap.starting_price)} (kg)
                    </AboutCompany.TextBold>
                    <Tooltip
                      css={`
                        margin-left: 16px;
                      `}
                    >
                      {t(lnMap.tooltip_price_may_vary)}
                    </Tooltip>
                  </Flex>
                </AboutCompany.Item>
              </AboutCompany.List>
            </AboutCompany>
            <CompanyCommentContainer reviews={reviews} />
          </Flex>
        </Flex>
      </MainLayout>
    </>
  );
}

export default Company;
