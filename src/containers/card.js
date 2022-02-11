import React from "react";
import lnMap from "../languages/language-maps/shared-lang-map";
import { useTranslation } from "react-i18next";
import { Card, Flex, Rating } from "../components";
import "styled-components/macro";
import * as ROUTES from "../constants/routes";
import CourierIMG from "../assets/mock/courier-real.jpg";

function CardContainer({ cardData }) {
  const { t } = useTranslation();

  const { id, title, rating, records, attributes } = cardData;
  const [, , minimumWeight, maximumDeliveryDay, minimumDeliveryDay] =
    attributes;

  return (
    <Card>
      <Card.Link to={`${ROUTES.COMPANY}/${id}`}>
        <Rating background positioned rate={rating || 10} star />
        <Card.ImgContainer>
          <Card.Img src={CourierIMG || ""} alt="" />
        </Card.ImgContainer>
        <Card.DescriptionContainer>
          <Flex justify="space-between">
            <div
              css={`
                margin-right: 5px;
              `}
            >
              <Card.Title>{title}</Card.Title>
              <Card.TitleAlt>{t(lnMap.fast_delivery)}</Card.TitleAlt>
            </div>
            <Flex align="center" direction="column">
              <Card.PriceContainer>
                <Card.Price>${records[0]?.price || "Unknown"}</Card.Price>
              </Card.PriceContainer>
              <Card.PriceText>{t(lnMap.product_card_kg_price)}</Card.PriceText>
            </Flex>
          </Flex>
          <Card.HR />
          <Flex justify="space-between">
            <div
              css={`
                margin-right: 5px;
              `}
            >
              <Card.InfoTitle>{t(lnMap.product_card_minimum)}</Card.InfoTitle>
              <Card.Info>{minimumWeight?.value} kg</Card.Info>
            </div>
            <div>
              <Card.InfoTitle>{t(lnMap.product_card_delivery)}</Card.InfoTitle>
              <Card.Info>
                {minimumDeliveryDay?.value}-{maximumDeliveryDay?.value}{" "}
                {t(lnMap.day)}
              </Card.Info>
            </div>
          </Flex>
        </Card.DescriptionContainer>
      </Card.Link>
    </Card>
  );
}

export default CardContainer;
