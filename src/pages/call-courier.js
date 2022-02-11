import React from "react";
//import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { Breadcrumb, Card, Flex, MainLayout } from "../components";
import { CallCourierFormContainer } from "../containers";
import lnMap from "../languages/language-maps/shared-lang-map";
import { fonts, screens } from "../styles/variables";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "../components/icons";

function CallCourier() {
  const { t } = useTranslation();




  return (
    <MainLayout
      css={`
        padding-bottom: 83px;
      `}
    >
      <div
        css={`
          display: none;
          margin-top: 35px;
          @media ${screens.lg} {
            display: block;
          }
        `}
      >
        <Breadcrumb />
      </div>
      <h1
        css={`
          font-family: ${fonts.dmSans};
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.3;

          @media ${screens.lg} {
            font-size: 3.8rem;
          }
        `}
      >
        {t(lnMap.form_calling_courier_and_prica_calculator)}
      </h1>
      <Flex
        align="baseline"
        css={`
          @media ${screens.lg} {
            margin-top: 63px;
            padding-left: 60px;
          }
        `}
      >
        <div
          css={`
            display: none;
            @media ${screens.lg} {
              display: block;
              margin-right: 45px;
            }
          `}
        >
          <Card.Button
            as={Link}
            to={ROUTES.HOME}
            style={{ borderRadius: "20px", marginTop: 0 }}
          >
            <Flex
              css={`
                font-size: 2.2rem;
                margin-right: 12px;
              `}
            >
              <ChevronLeftIcon />
            </Flex>
            <p>{t(lnMap.go_to_homepage)}</p>
          </Card.Button>
        </div>
        <div
          direction="column"
          css={`
            @media ${screens.lg} {
              width: 490px;
            }
          `}
        >
          <CallCourierFormContainer
       
          />
        </div>
      </Flex>
    </MainLayout>
  );
}

export default CallCourier;
