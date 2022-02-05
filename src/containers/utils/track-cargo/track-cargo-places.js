import React from "react";
import "styled-components/macro";
import { Flex, TrackCargoPlaces } from "../../../components";
import { SmallDashedLine } from "../../../components/icons";

const places = ["Turkiye - İstanbul", "Turkmenistan - Ashgabat"];

function TrackCargoPlacesContainer() {
  return (
    <TrackCargoPlaces>
      <Flex align="center">
        <div
          css={`
            text-align: center;
          `}
        ></div>
        <TrackCargoPlaces.List>
          {places.map((place, i, arr) => (
            <TrackCargoPlaces.Item key={place}>
              <TrackCargoPlaces.Circle
                variant={i === 0 ? "blue" : "orange"}
                key={i}
              >
                {i !== arr.length - 1 && (
                  <div
                    css={`
                      left: 50%;
                      padding: 6px 0;
                      position: absolute;
                      top: 100%;
                      transform: translateX(-50%);
                    `}
                    key={i}
                  >
                    <SmallDashedLine />
                  </div>
                )}
              </TrackCargoPlaces.Circle>
              <div
                css={`
                  margin-left: 16px;
                  width: 100%;
                `}
              >
                <TrackCargoPlaces.Text>{place}</TrackCargoPlaces.Text>
                {i !== arr.length - 1 && <TrackCargoPlaces.HR />}
              </div>
            </TrackCargoPlaces.Item>
          ))}
        </TrackCargoPlaces.List>
      </Flex>
    </TrackCargoPlaces>
  );
}

export default TrackCargoPlacesContainer;
