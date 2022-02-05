import React from "react";
import { CompanyCard, Flex, Rating } from "../../components";
import lnMap from "../../languages/language-maps/shared-lang-map";
import {
  BoxesIcon,
  FlagIcon,
  HomeIcon,
  ShareIcon,
  StarIconStroked,
} from "../../components/icons";
import { useTranslation } from "react-i18next";
import CourierIMG from "../../assets/mock/courier.jpg";
import "styled-components/macro";
import { fonts, screens } from "../../styles/variables";
import * as ROUTES from "../../constants/routes";
import { useRouteMatch } from "react-router";

function CompanyCardContainer(props) {
  const { t } = useTranslation();
  const { companyCardData } = props;
  const { title, image, reviews,rating } = companyCardData;
  const { url } = useRouteMatch();

  return (
    <CompanyCard>
      <CompanyCard.TopContainer>
        <CompanyCard.ImgContainer>
          <CompanyCard.Img src={image} />
        </CompanyCard.ImgContainer>
        <Flex direction="column">
          <CompanyCard.Title>{title}</CompanyCard.Title>
          <Flex
            align="center"
            css={`
              @media ${screens.lg} {
                margin-top: 2px;
              }
            `}
          >
            <Rating
              background
              rate={rating}
              star
              css={`
                margin-right: 9px;
              `}
            />
            <CompanyCard.TextSmall>
              ({reviews?.length || ""} {t(lnMap.comment)})
            </CompanyCard.TextSmall>
          </Flex>
        </Flex>
      </CompanyCard.TopContainer>
      <CompanyCard.ShortInfoContainer>
        <Flex align="center">
          <CompanyCard.IconContainer>
            <BoxesIcon />
          </CompanyCard.IconContainer>
          <CompanyCard.Text>
            {t(lnMap.company_card_free_packaging)}
          </CompanyCard.Text>
        </Flex>
        <Flex align="center">
          <CompanyCard.IconContainer>
            <StarIconStroked />
          </CompanyCard.IconContainer>
          <CompanyCard.Text>{reviews?.length || ""} {t(lnMap.comment)}</CompanyCard.Text>
        </Flex>
      </CompanyCard.ShortInfoContainer>
      <CompanyCard.Box>
        <CompanyCard.ActionButtonLink to={`${url}${ROUTES.CALL_COURIER}`}>
          {t(lnMap.call_courier)}
        </CompanyCard.ActionButtonLink>
        <CompanyCard.ShareButton>
          <ShareIcon />
        </CompanyCard.ShareButton>
      </CompanyCard.Box>
      <CompanyCard.HR />
      <CompanyCard.TextSmall>
        {t(lnMap.membership_date)} Mar 15, 2021
      </CompanyCard.TextSmall>
      <button
        css={`
          align-items: center;
          color: #777e90;
          display: flex;
          margin-top: 32px;
        `}
      >
        <div
          css={`
            display: flex;
            font-family: ${fonts.dmSans};
            font-size: 1.3rem;
            margin-right: 10px;
          `}
        >
          <FlagIcon />
        </div>
        {t(lnMap.report_company)}
      </button>
    </CompanyCard>
  );
}

export default CompanyCardContainer;
