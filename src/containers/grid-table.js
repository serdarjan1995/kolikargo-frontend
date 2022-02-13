import React from "react";
import { Flex, GridTable } from "../components";
import lnMap from "../languages/language-maps/shared-lang-map";
import { useTranslation } from "react-i18next";
import {
  PinIcon2,
  RightArrowIcon,
  RightChevronIcon,
  Truck2Icon,
} from "../components/icons";
import "styled-components/macro";
import * as ROUTES from "../constants/routes";
import Moment from "react-moment";
//import { useNavigate } from "react-router";

function GridTableContainer({ cargos }) {
  const { t } = useTranslation();
  //const history = useNavigate();

  /*  const tableItems = useMemo(
    () => [
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "82343382",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "823432382",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "823433482",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "823413382",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "823443382",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "823463382",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
    ],
    [t]
  ); */

  return (
    <GridTable>
      <GridTable.Head>
        <GridTable.Row headRow>
          <GridTable.Data>
            <GridTable.DataTitle>
              {t(lnMap.profile_cargo_status_title)}
            </GridTable.DataTitle>
          </GridTable.Data>
          <GridTable.Data>
            <GridTable.DataTitle>
              {t(lnMap.profile_track_no)}
            </GridTable.DataTitle>
          </GridTable.Data>
          <GridTable.Data>
            <GridTable.DataTitle>
              {t(lnMap.profile_cargo_from)}
            </GridTable.DataTitle>
          </GridTable.Data>
          <GridTable.Data>
            <GridTable.DataTitle>
              {t(lnMap.profile_cargo_to)}
            </GridTable.DataTitle>
          </GridTable.Data>
          <GridTable.Data>
            <GridTable.DataTitle>
              {t(lnMap.profile_cargo_date)}
            </GridTable.DataTitle>
          </GridTable.Data>
          <GridTable.Data>
            <GridTable.DataTitle>{t(lnMap.profile_price)}</GridTable.DataTitle>
          </GridTable.Data>
        </GridTable.Row>
      </GridTable.Head>
      <GridTable.Body>
        <GridTable.RowGroup>
          {cargos.map(
            ({
              status,
              number: track_no,
              date_placed: shipping_date,
              total_incl_tax: price,
              from,
              shipping_address: to,
              url,
            }) => (
              <GridTable.Row key={track_no}>
                <GridTable.Data>
                  <GridTable.Text>{status}</GridTable.Text>
                  <GridTable.Stepper status="delivered" />
                  <Flex
                    align="center"
                    css={`
                      flex-wrap: wrap;
                      margin-top: 9px;
                    `}
                  >
                    <Flex align="center">
                      <GridTable.IconContainer bgColor="#F2F6FF">
                        <Truck2Icon />
                      </GridTable.IconContainer>
                      <GridTable.Text>{from}</GridTable.Text>
                    </Flex>
                    <div
                      css={`
                        font-size: 0.9rem;
                        margin: 0 20px;
                      `}
                    >
                      <RightArrowIcon />
                    </div>
                    <Flex align="center">
                      <GridTable.IconContainer bgColor="#FFF9F5">
                        <PinIcon2 />
                      </GridTable.IconContainer>
                      <GridTable.Text>{to}</GridTable.Text>
                    </Flex>
                  </Flex>
                </GridTable.Data>
                <GridTable.Data>
                  <GridTable.DataText>{track_no}</GridTable.DataText>
                </GridTable.Data>
                <GridTable.Data>
                  <GridTable.DataText>{from}</GridTable.DataText>
                </GridTable.Data>
                <GridTable.Data>
                  <GridTable.DataText>{to}</GridTable.DataText>
                </GridTable.Data>
                <GridTable.Data>
                  <GridTable.DataText>
                    {<Moment date={shipping_date} format="d/mm/yy" />}
                  </GridTable.DataText>
                </GridTable.Data>
                <GridTable.Data>
                  <GridTable.DataText>{price}$</GridTable.DataText>
                </GridTable.Data>
                <GridTable.Data>
                  <GridTable.ButtonLink
                    to={`${ROUTES.TRACK_CARGO}/${url.match(/\d+/)[0]}`}
                  >
                    <RightChevronIcon />
                  </GridTable.ButtonLink>
                </GridTable.Data>
              </GridTable.Row>
            )
          )}
        </GridTable.RowGroup>
      </GridTable.Body>
    </GridTable>
  );
}

export default GridTableContainer;
