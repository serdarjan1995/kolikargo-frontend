import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { Flex, AccountDropdownMenu } from "../../components";
import {
  BoxesIcon,
  PinIcon,
  SettingsIcon,
  //SettingsIcon2,
} from "../../components/icons";
import { useCurrentUser } from "../../hooks";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { PrimaryBtnStyle } from "../../styles/mixins";
import * as ROUTES from "../../constants/routes";

const AccountDropdownMenuContainer = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { logout } = useCurrentUser();
  const handleLogOutClick = () => logout();
  const { closeAccountDropdownMenu } = props;

  const accountDropdownMenuItems = useMemo(
    () => [
      {
        icon: <BoxesIcon />,
        name: t(lnMap.cargos),
        path: `${ROUTES.PROFILE}${ROUTES.MY_CARGOS}`,
      },
      {
        icon: <SettingsIcon />,
        name: t(lnMap.adressess),
        path: `${ROUTES.PROFILE}${ROUTES.MY_ADDRESSES}`,
      },
      {
        icon: <PinIcon />,
        name: t(lnMap.settings),
        path: `${ROUTES.PROFILE}${ROUTES.SETTINGS}`,
      },
    ],
    [t]
  );

  const handleLinkClick = () => closeAccountDropdownMenu();

  return (
    <AccountDropdownMenu>
      <nav>
        <AccountDropdownMenu.List ref={ref}>
          {accountDropdownMenuItems.map(({ name, path, icon }) => (
            <AccountDropdownMenu.Item key={name}>
              <AccountDropdownMenu.ButtonLink
                onClick={handleLinkClick}
                to={path}
              >
                <AccountDropdownMenu.IconContainer>
                  {icon}
                </AccountDropdownMenu.IconContainer>
                <AccountDropdownMenu.Text>{name}</AccountDropdownMenu.Text>
              </AccountDropdownMenu.ButtonLink>
            </AccountDropdownMenu.Item>
          ))}
        </AccountDropdownMenu.List>
      </nav>
      <AccountDropdownMenu.HR />
      <Flex
        css={`
          margin-top: 16px;
        `}
      >
        <button
          css={`
            ${PrimaryBtnStyle}
            border-radius: 20px;
            margin-right: 8px;
            padding: 12px 33px;
            width: 100%;
          `}
        >
          {t(lnMap.account)}
        </button>
        <button
          onClick={handleLogOutClick}
          css={`
            ${PrimaryBtnStyle}
            background: transparent;
            border: 2px solid rgba(230, 232, 236, 1);
            border-radius: 20px;
            color: #23262f;
            padding: 12px 33px;
            width: 100%;

            &:hover,
            &:focus {
              background: #dcdedf;
            }
          `}
        >
          {t(lnMap.logout)}
        </button>
      </Flex>
    </AccountDropdownMenu>
  );
});

export default AccountDropdownMenuContainer;
