import React from "react";
import "styled-components/macro";
import { Flex, MainLayout } from "../components";
import { GoBackButton } from "../components/button";
import {
  TrackCargoActionCardContainer,
  TrackCargoNoContainer,
  TrackCargoPlacesContainer,
  TrackCargoStatusContainer,
  TrackCargoUserInfoContainer,
} from "../containers";
import { useTrackCargoLogic } from "../hooks";
import { screens } from "../styles/variables";

function TrackCargo() {
  useTrackCargoLogic();
  return (
    <div
      css={`
        background: #fcfcfd;

        @media ${screens.md} {
          background: white;
          padding-top: 60px;
        }
      `}
    >
      <MainLayout
        css={`
          padding-bottom: 26px;
          padding-top: 10px;

          @media ${screens.md} {
            padding-bottom: 90px;
          }
        `}
      >
        <Flex direction="column" css={``}>
          <GoBackButton
            css={`
              margin-bottom: 14px;
            `}
          />
          <div
            css={`
              margin: 0 auto;
              max-width: 790px;

              & > * + * {
                margin-top: 15px;
              }

              @media ${screens.lg} {
                & > * + * {
                  margin-top: 20px;
                }
              }
            `}
          >
            <Flex
              direction="column"
              align="stretch"
              css={`
                @media ${screens.md} {
                  flex-direction: row;
                }
              `}
            >
              <TrackCargoActionCardContainer />
              <TrackCargoNoContainer />
            </Flex>
            <TrackCargoPlacesContainer />
            <TrackCargoUserInfoContainer />
            <TrackCargoStatusContainer />
          </div>
        </Flex>
      </MainLayout>
    </div>
  );
}

export default TrackCargo;
