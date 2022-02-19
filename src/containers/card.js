import React, {useState} from "react";
import lnMap from "../languages/language-maps/shared-lang-map";
import { useTranslation } from "react-i18next";
import { Card, Flex, Rating } from "../components";
import "styled-components/macro";
import * as ROUTES from "../constants/routes";
import CourierIMG from "../assets/mock/courier-real.jpg";
import deliveryTruck from "../assets/home/img/delivery_truck.svg";

function CardContainer({ cardData }) {
  const [hover, setHover] = useState(false);
  const { t } = useTranslation();

  const { id, title, rating, records, attributes } = cardData;
  const [, , minimumWeight, maximumDeliveryDay, minimumDeliveryDay] =
    attributes;

  const GrayBadge = ({children}) => {

    return (
        <div css={`
            padding: 12px;
            font-size: 15px;
            color: black;
            background: #F6F6F6;
            border-radius: 30px;
            `}>
          {children}
        </div>
    )
  }

  return (
    <Card style={{
      //boxShadow: "0 0 0 0 rgb(227 228 230 / 0%)",
      boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.05)",
      borderRadius: 16,
      ...(hover && {
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.1)",
        marginTop: -4,
      }),
    }}
          onMouseEnter={()=>{
            setHover(true);
          }}
          onMouseLeave={()=>{
            setHover(false);
          }}
    >
      <Card.Link to={`${ROUTES.COMPANY}/${id}`}>
        <Rating background positioned rate={rating || 10} star />
        <Card.ImgContainer>
          <Card.Img src={CourierIMG || ""} alt="" />
        </Card.ImgContainer>
        <Card.DescriptionContainer>
          <Flex justify="space-between" style={{paddingBottom: 20}}>
            <div
                css={`
                margin-right: 5px;
              `}
            >
              <Card.Title>{title}</Card.Title>
              <Card.TitleAlt>{t(lnMap.fast_delivery)}</Card.TitleAlt>
            </div>
          </Flex>
          <Flex justify="space-between">
            <GrayBadge><p>{t(lnMap.product_card_minimum)} {minimumWeight?.value}kg</p></GrayBadge>
            <GrayBadge>
              <div style={{display: 'inline-flex'}}>
                <img src={deliveryTruck} width={25} style={{marginRight: 10}} alt="icon"/> <p>{minimumDeliveryDay?.value}-{maximumDeliveryDay?.value}{" "} {t(lnMap.day)}</p>
              </div>
            </GrayBadge>
            <GrayBadge><p>${records[0]?.price || "Unknown"}/kg *</p></GrayBadge>
          </Flex>


          {/*<Card.HR />*/}
          {/*<Flex justify="space-between">*/}
          {/*  <div*/}
          {/*    css={`*/}
          {/*      margin-right: 5px;*/}
          {/*    `}*/}
          {/*  >*/}
          {/*    <Card.InfoTitle>{t(lnMap.product_card_minimum)}</Card.InfoTitle>*/}
          {/*    <Card.Info>{minimumWeight?.value} kg</Card.Info>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <Card.InfoTitle>{t(lnMap.product_card_delivery)}</Card.InfoTitle>*/}
          {/*    <Card.Info>*/}
          {/*      {minimumDeliveryDay?.value}-{maximumDeliveryDay?.value}{" "}*/}
          {/*      {t(lnMap.day)}*/}
          {/*    </Card.Info>*/}
          {/*  </div>*/}
          {/*</Flex>*/}
        </Card.DescriptionContainer>
      </Card.Link>
    </Card>
  );
}

export default CardContainer;
