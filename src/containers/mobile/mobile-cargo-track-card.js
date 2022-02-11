import React, { /*useMemo*/ } from "react";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { Flex, GridTable, MobileCargoTrackCard } from "../../components";
import { useTranslation } from "react-i18next";
import { PinIcon2, RightArrowIcon, Truck2Icon } from "../../components/icons";
import "styled-components/macro";
import * as ROUTES from "../../constants/routes";

function MobileCargoTrackCardContainer({ cargos }) {
  const { t } = useTranslation();

  /*  const mockItems = useMemo(
    () => [
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "82343382",
        cargo_id: "5324",
        cargo_status_id: "1",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
      {
        status: t(lnMap.profile_cargo_situation_onway),
        track_no: "823433823",
        cargo_id: "5324",
        cargo_status_id: "2",
        shipping_date: "21.02.2021",
        price: "327.40$",
        from: "İstanbul",
        to: "Aşgabat",
      },
    ],
    [t]
  ); */

  // const cargoStatus = {
  //   1: "delivered",
  //   2: "on_way",
  // };

  return (
    <>
      {cargos.map(
        ({
          status,
          number: cargo_id,
          number: track_no,
          from,
          shipping_address: to,
        }) => (
          <MobileCargoTrackCard key={track_no}>
            <MobileCargoTrackCard.ButtonLink to={`${ROUTES.TRACK_CARGO}`}>
              <Flex justify="space-between">
                <Flex align="center">
                  <MobileCargoTrackCard.Title>
                    {`${t(lnMap.profile_cargo_id)}`}
                  </MobileCargoTrackCard.Title>
                  <MobileCargoTrackCard.Text
                    css={`
                      margin-left: 3px;
                    `}
                  >
                    {cargo_id}
                  </MobileCargoTrackCard.Text>
                </Flex>
                <Flex align="center">
                  <MobileCargoTrackCard.Title>
                    {t(lnMap.track_no)}
                  </MobileCargoTrackCard.Title>
                  <MobileCargoTrackCard.Text
                    css={`
                      margin-left: 14px;
                    `}
                    bold
                  >
                    {track_no}
                  </MobileCargoTrackCard.Text>
                </Flex>
              </Flex>
              <div
                css={`
                  margin-top: 19px;
                `}
              >
                <MobileCargoTrackCard.Title>
                  {t(lnMap.profile_cargo_status_title)}
                </MobileCargoTrackCard.Title>
                <MobileCargoTrackCard.Text
                  css={`
                    font-size: 1.6rem;
                    margin-top: 4px;
                  `}
                  bold
                >
                  {t(lnMap.profile_cargo_situation_onway)}
                </MobileCargoTrackCard.Text>
                <GridTable.Stepper status={status} />
              </div>
              <Flex
                align="center"
                justify="space-between"
                css={`
                  flex-wrap: wrap;
                  margin-top: 13px;
                  max-width: 250px;
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
                    color: black;
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
            </MobileCargoTrackCard.ButtonLink>
          </MobileCargoTrackCard>
        )
      )}
    </>
  );
}

export default MobileCargoTrackCardContainer;
