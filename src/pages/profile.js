import React from "react";
import { Flex } from "../components";
import CargosMenuContainer from "../containers/utils/cargos-menu";
import "styled-components/macro";
import {
  AddAddressContainer,
  AddressesContainer,
  MyCargosContainer,
  SettingsContainer,
} from "../containers";
import { screens } from "../styles/variables";
import { Route, useMatch } from "react-router";
import * as ROUTES from "../constants/routes";

function Profile() {
  const { path } = useMatch();

  return (
    <div
      css={`
        padding: 0 21px;
        text-align: center;
      `}
    >
      <Flex
        css={`
          display: inline-flex;
          min-height: 80vh;
          max-width: 100%;
          text-align: start;
          width: 1300px;

          @media ${screens.lg} {
            margin-top: 52px;
          }
        `}
      >
        <CargosMenuContainer />
        <Flex
          align="center"
          direction="column"
          css={`
            margin-left: 0;
            max-width: 900px;
            padding-bottom: 30px;
            width: 100%;

            @media ${screens.lg} {
              align-items: flex-start;
              margin-left: 30px;
            }

            @media ${screens.lg3} {
              max-width: 1100px;
            }
          `}
        >
          <Route path={`${path}${ROUTES.SETTINGS}`}>
            <SettingsContainer />
          </Route>
          <Route path={`${path}${ROUTES.MY_ADDRESSES}`}>
            <AddressesContainer />
          </Route>
          <Route path={`${path}${ROUTES.ADD_ADDRESS}`}>
            <AddAddressContainer />
          </Route>
          <Route path={`${path}${ROUTES.MY_CARGOS}`}>
            <MyCargosContainer />
          </Route>
        </Flex>
      </Flex>
    </div>
  );
}

export default Profile;
