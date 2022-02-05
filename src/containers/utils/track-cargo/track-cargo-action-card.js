import React from "react";
import { Flex, Rating, TrackCargoActionCard } from "../../../components";
import { ButtonSmall } from "../../../components/button";
import { ChatIcon } from "../../../components/icons";
import lnMap from "../../../languages/language-maps/shared-lang-map";
import Logo from "../../../assets/mock/mock-small-company-logo.png";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

function TrackCargoActionCardContainer() {
  const { t } = useTranslation();

  return (
    <TrackCargoActionCard>
      <Flex>
        <div>
          <TrackCargoActionCard.Img src={Logo} alt="Company name" />
        </div>
        <div
          css={`
            margin-left: 15px;
          `}
        >
          <TrackCargoActionCard.Title>
            Türkmenexpress
          </TrackCargoActionCard.Title>
          <TrackCargoActionCard.Text
            css={`
              margin-top: 4px;
            `}
          >
            Hızlı ve kaliteli kargo
          </TrackCargoActionCard.Text>
        </div>
        <Rating
          star
          rate="9.7"
          background
          css={`
            margin-left: 26px;
            padding: 5px 6px;
          `}
        />
      </Flex>
      <Flex
        align="stretch"
        css={`
          margin-top: 26px;
        `}
      >
        <TrackCargoActionCard.ButtonLink>
          <TrackCargoActionCard.IconContainer>
            <ChatIcon />
          </TrackCargoActionCard.IconContainer>
          <p
            css={`
              font-size: inherit;
              margin-left: 8px;
            `}
          >
            {t(lnMap.action_comment)}
          </p>
        </TrackCargoActionCard.ButtonLink>
        <ButtonSmall
          as={Link}
          style={{
            alignItems:"center",
            justifyContent:"center",
            display: "flex",
            fontSize: "1.4rem",
            padding: "13px 17px",
            width: "100%",
          }}
          to={`${ROUTES.COMPANY}/turkmenexpress`}
        >
          {t(lnMap.action_go_to_profile)}
        </ButtonSmall>
      </Flex>
    </TrackCargoActionCard>
  );
}

export default TrackCargoActionCardContainer;
