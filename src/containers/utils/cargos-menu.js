import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { CargosMenu } from "../../components";
import * as ROUTES from "../../constants/routes";
import {
  BellIcon,
  BoxesIcon,
  PinIcon,
  SettingsIcon2,
} from "../../components/icons";

function CargosMenuContainer() {
  const { t } = useTranslation();

  const cargoMenuItems = useMemo(
    () => [
      {
        icon: <BoxesIcon />,
        name: t(lnMap.cargos),
        path: `${ROUTES.PROFILE}${ROUTES.MY_CARGOS}`,
      },
      {
        icon: <PinIcon />,
        name: t(lnMap.adressess),
        path: `${ROUTES.PROFILE}${ROUTES.MY_ADDRESSES}`,
      },
      {
        icon: <SettingsIcon2 />,
        name: t(lnMap.settings),
        path: `${ROUTES.PROFILE}${ROUTES.SETTINGS}`,
      },
      {
        icon: <BellIcon />,
        name: t(lnMap.profile_notifications),
        path: `${ROUTES.PROFILE}${ROUTES.NOTIFICATIONS}`,
      },
    ],
    [t]
  );

  return (
    <CargosMenu>
      <CargosMenu.List>
        {cargoMenuItems.map(({ name, path, icon }) => (
          <CargosMenu.Item key={path}>
            <CargosMenu.ButtonLink
              to={path}
              exact
              activeStyle={{ color: "black" }}
            >
              <CargosMenu.IconContainer>{icon}</CargosMenu.IconContainer>
              <p>{name}</p>
            </CargosMenu.ButtonLink>
          </CargosMenu.Item>
        ))}
      </CargosMenu.List>
    </CargosMenu>
  );
}

export default CargosMenuContainer;
