import React from "react";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { useTranslation } from "react-i18next";
import { Card, Flex, Rating, SumCard } from "../../components";
import "styled-components/macro";
import { screens } from "../../styles/variables";
import { useSumCardLogic } from "../../hooks";

function SumCardContainer() {
  const { t } = useTranslation();
  const { info, cardData } = useSumCardLogic();
  const { box_weight, cargo_route, shipper_name, recipient_name, coupon_code } =
    info;
  const { image, rating, reviews, title } = cardData;

  return (
    <SumCard>
      <Flex
        direction="column"
        css={`
          @media ${screens.lg} {
            flex-direction: row;
          }
        `}
      >
        <SumCard.ImgContainer>
          <SumCard.Img src={image} />
        </SumCard.ImgContainer>
        <div
          css={`
            margin-top: 12px;
            width: 100%;

            @media ${screens.lg} {
              margin-left: 36px;
            }
          `}
        >
          <SumCard.CompanyName>{title}</SumCard.CompanyName>
          <SumCard.TextSmall
            css={`
              margin-top: 8px;

              @media ${screens.lg} {
                margin-top: 10px;
              }
            `}
          >
            Hızlı ve kaliteli
          </SumCard.TextSmall>
          <Card.HR
            css={`
              height: 1px;
              margin-bottom: 7px;
              margin-top: 8px;

              @media ${screens.lg} {
                margin-top: 14px;
              }
            `}
          />
          <Flex
            align="center"
            css={`
              margin-top: 8px;

              @media ${screens.lg} {
                margin-top: 10px;
              }
            `}
          >
            <Rating
              background
              rate={rating}
              star
              css={`
                margin-right: 10px;
              `}
            />
            <SumCard.Text>{`(${reviews.length} ${t(lnMap.comment)})`}</SumCard.Text>
          </Flex>
        </div>
      </Flex>
      <SumCard.InfoContainer>
        <div>
          <SumCard.TextSmall>{t(lnMap.total_card_shipper)}</SumCard.TextSmall>
          <SumCard.Info>{shipper_name}</SumCard.Info>
        </div>
        <div>
          <SumCard.TextSmall>{t(lnMap.total_card_recipient)}</SumCard.TextSmall>
          <SumCard.Info>{recipient_name}</SumCard.Info>
        </div>
        <div>
          <SumCard.TextSmall>
            {t(lnMap.total_card_cargo_route)}
          </SumCard.TextSmall>
          <SumCard.Info
            css={`
              font-size: 1.6rem;
            `}
          >
            {cargo_route}
          </SumCard.Info>
        </div>
        <div>
          <SumCard.TextSmall>
            {t(lnMap.total_shipment_weight)}
          </SumCard.TextSmall>
          <SumCard.Info
            css={`
              font-size: 1.6rem;
            `}
          >
            {box_weight}kg
          </SumCard.Info>
        </div>
      </SumCard.InfoContainer>
      <div
        css={`
          margin-top: 25px;
        `}
      >
        <SumCard.PriceTitle>{t(lnMap.total_price_title)}</SumCard.PriceTitle>
        <div
          css={`
            margin-top: 28px;

            & > * + * {
              margin-top: 6px;
            }
          `}
        >
          <SumCard.PriceRow>
            <SumCard.Text>{`${box_weight}kg x1.5$ ${t(
              lnMap.cargo_price
            )}`}</SumCard.Text>
            <SumCard.Info>{info.price_info.cargo_price}</SumCard.Info>
          </SumCard.PriceRow>
          <SumCard.PriceRow>
            <SumCard.Text>{t(lnMap.total_service_price)}</SumCard.Text>
            <SumCard.Info>{info.price_info.service_price}</SumCard.Info>
          </SumCard.PriceRow>
          {coupon_code && (
            <SumCard.PriceRow>
              <SumCard.Text>{t(lnMap.total_coupon_discount)}</SumCard.Text>
              <SumCard.Info
                css={`
                  color: #ff4c34;
                `}
              >
                -10$
              </SumCard.Info>
            </SumCard.PriceRow>
          )}
          <SumCard.PriceRow
            css={`
              background: #f4f5f6;
            `}
          >
            <SumCard.Text
              css={`
                color: #23262f;
                font-weight: 500;
              `}
            >
              {t(lnMap.total_sum)}
            </SumCard.Text>
            <SumCard.Info>{info.price_info.total_sum} (USD)</SumCard.Info>
          </SumCard.PriceRow>
        </div>
      </div>
    </SumCard>
  );
}

export default SumCardContainer;
