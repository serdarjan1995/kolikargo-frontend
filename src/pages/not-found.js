import React from "react";
import { Flex, MainLayout } from "../components";
import { ButtonLarge } from "../components/button";
import lnMap from "../languages/language-maps/shared-lang-map";
import NotFound404Img from "../assets/not-found/404.png";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { fonts, screens } from "../styles/variables";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

function NotFound() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Flex
        align="center"
        css={`
          min-height: calc(100vh - 90px);
        `}
      >
        <div
          css={`
            font-family: ${fonts.gilroy};
            margin: auto;
            text-align: center;
          `}
        >
          <img
            src={NotFound404Img}
            alt=""
            css={`
              @media ${screens.md} {
                max-width: 626px;
              }
            `}
          />
          <h2
            css={`
              font-size: 4rem;
              font-weight: 700;
              line-height: 50px;
              margin-top: 59px;
            `}
          >
            {t(lnMap.not_found_title)}
          </h2>
          <p
            css={`
              margin-top: 29px;
            `}
          >
            {t(lnMap.not_found_text)}
          </p>
          <ButtonLarge
            as={Link}
            to={ROUTES.HOME}
            style={{
              display: "inline-block",
              marginTop: "75px",
              maxWidth: "231px",
            }}
          >
            {t(lnMap.go_to_homepage)}
          </ButtonLarge>
        </div>
      </Flex>
    </MainLayout>
  );
}

export default NotFound;
