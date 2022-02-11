import React from "react";
import lnMap from "../../../languages/language-maps/shared-lang-map";
import { Flex, TrackCargoStatus } from "../../../components";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import {
  CircledCheck,
  HourGlassIcon,
  HouseIcon,
  PackageIcon,
  PathIcon,
  PinIcon,
  TruckIcon,
} from "../../../components/icons";
import { screens } from "../../../styles/variables";

const data = {
  lastUpdate: "21.03.2021 17:00",
  movements: [
    {
      id: "accepted",
      date: "01.04.2021 - 16:00",
      text: "Kargonuz kabul edildi",
    },
    {
      id: "in_depot",
      date: "01.04.2021 - 16:00",
      text: "Depoda hazırlanıyor",
    },
    {
      id: "shipped",
      date: "01.04.2021 - 16:00",
      text: "Hedef ülkeye gönderildi",
    },
    {
      id: "arrived",
      date: "01.04.2021 - 16:00",
      text: "Hedef ülkeye ulaştı",
    },
    {
      id: "in_branch",
      date: "01.04.2021 - 16:00",
      text: "Kargonuz şubede ",
    },
    {
      id: "in_distrubution",
      date: "01.04.2021 - 16:00",
      text: "Dağıtıma çıktı",
    },
    {
      id: "delivered",
      date: "",
      text: "Teslim edildi",
    },
  ],
};

const getIconById = {
  accepted: <PackageIcon />,
  in_depot: <HouseIcon />,
  shipped: <TruckIcon />,
  arrived: <PinIcon />,
  in_branch: <HourGlassIcon />,
  in_distrubution: <PathIcon />,
  delivered: <CircledCheck />,
};

function TrackCargoStatusContainer() {
  const { t } = useTranslation();
  const { lastUpdate, movements } = data;

  return (
    <TrackCargoStatus>
      <Flex
        justify="space-between"
        direction="column"
        css={`
          @media ${screens.md} {
            align-items: flex-start;
            flex-direction: row;
          }
        `}
      >
        <TrackCargoStatus.Title>
          {t(lnMap.cargo_track_title)}
        </TrackCargoStatus.Title>
        <Flex
          align="center"
          css={`
            margin-top: 5px;

            @media ${screens.md} {
              margin-top: 0;
            }
          `}
        >
          <TrackCargoStatus.TitleSmall>
            {t(lnMap.cargo_track_last_update)}
          </TrackCargoStatus.TitleSmall>
          <TrackCargoStatus.Date>{lastUpdate}</TrackCargoStatus.Date>
        </Flex>
      </Flex>
      <Flex
        css={`
          margin-top: 30px;

          @media ${screens.md} {
            margin-top: 67px;
          }
        `}
      >
        <TrackCargoStatus.List>
          {movements.map(({ id, text, date }, i, arr) => (
            <TrackCargoStatus.Item>
              <TrackCargoStatus.IconContainer
                variant={
                  id === "in_distrubution"
                    ? "active"
                    : i <= arr.length - 2
                    ? "completed"
                    : false
                }
              >
                {i !== arr.length - 1 && <TrackCargoStatus.Line />}
                {getIconById[id]}
              </TrackCargoStatus.IconContainer>
              <div
                css={`
                  margin-left: 16px;

                  @media ${screens.md} {
                    margin-left: 55px;
                  }
                `}
              >
                <TrackCargoStatus.Text variant={!date && "disabled"}>
                  {text}
                </TrackCargoStatus.Text>
                <TrackCargoStatus.TextSmall>{date}</TrackCargoStatus.TextSmall>
              </div>
            </TrackCargoStatus.Item>
          ))}
        </TrackCargoStatus.List>
      </Flex>
    </TrackCargoStatus>
  );
}

export default TrackCargoStatusContainer;
