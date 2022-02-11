import React from "react";
import lnMap from "../languages/language-maps/shared-lang-map";
import { Flex, Info, MainLayout, /*TrackNumberDisplay*/ } from "../components";
import { CircledCheck, /*CopyIcon,*/ LeftArrowIcon } from "../components/icons";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { ButtonLarge } from "../components/button";
import { screens, sizes } from "../styles/variables";
import * as ROUTES from "../constants/routes";
import TrackNumberDisplayContainer from "../containers/utils/track-number-display";
import { Link } from "react-router-dom";
function Confirmation() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <Flex
        css={`
          min-height: calc(100vh - ${sizes.headerMobileHeight});

          @media ${screens.lg} {
            min-height: calc(100vh - ${sizes.headerHeight});
          }
        `}
      >
        <Info>
          <Info.IconContainer>
            <CircledCheck />
          </Info.IconContainer>
          <Info.Title
            css={`
              margin-top: 35px;

              @media ${screens.lg} {
                margin-top: 43px;
              }
            `}
          >
            {t(lnMap.info_thanks)}
          </Info.Title>
          <Info.Text
            css={`
              margin-top: 50px;

              @media ${screens.lg} {
                margin-top: 23px;
              }
            `}
          >
            <Info.Link variant="orange">1283453</Info.Link>{" "}
            {t(lnMap.info_no_order_created)}
          </Info.Text>
          <Info.Text
            css={`
              margin: 0 auto;
              max-width: 281px;
            `}
          >
            {t(lnMap.info_shipping_process)}{" "}
            <Info.Link>{t(lnMap.info_profile)}</Info.Link> {""}
            {t(lnMap.info_from_page_follow)}
          </Info.Text>
          <TrackNumberDisplayContainer
            text={t(lnMap.info_track_number)}
            trackNumber="AB2345012"
          />
          <ButtonLarge
            full
            as={Link}
            style={{ display: "inline-block", marginTop: "50px" }}
            to={`${ROUTES.TRACK_CARGO}`}
          >
            {t(lnMap.action_track_cargo)}
          </ButtonLarge>
          <div
            css={`
              margin-top: 30px;

              @media ${screens.lg} {
                margin-top: 25px;
              }
            `}
          >
            <Flex align="center" justify="center">
              <div
                css={`
                  color: #3371f5;
                  display: none;
                  font-size: 1.2rem;
                  margin-right: 14px;

                  @media ${screens.lg} {
                    display: flex;
                  }
                `}
              >
                <LeftArrowIcon />
              </div>
              <Info.Link to={ROUTES.HOME}>{t(lnMap.go_to_homepage)}</Info.Link>
            </Flex>
          </div>
        </Info>
      </Flex>
    </MainLayout>
  );
}

export default Confirmation;
