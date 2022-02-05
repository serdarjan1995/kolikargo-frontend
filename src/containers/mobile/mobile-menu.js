import React from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";
import "styled-components/macro";
import { Backdrop, Header, MobileMenu } from "../../components";
import {
  CancelIcon,
  GlobeIcon,
  PinIcon,
  SearchIcon,
  SettingsIcon,
  TruckIcon,
} from "../../components/icons";
import { LanguageMenuMobileContainer } from "..";
import { useCurrentUser, useMobileMenuLogic } from "../../hooks";
import * as ROUTES from "../../constants/routes";

function MobileMenuContainer(props) {
  const { t } = useTranslation();
  const { closeMobileMenu, showMobileMenu } = props;
  const { currentUser } = useCurrentUser();
  const {
    showLanguageMenu,
    closeLanguageMenu,
    handlers,
    isSearchFocus,
    setIsSearchFocus,
  } = useMobileMenuLogic({ closeMobileMenu });
  const {
    handleCloseMenuClick,
    handleLanguageClick,
    handleCargoTrackClick,
    handleLoginClick,
    handleLogoutClick,
  } = handlers;

  return (
    <>
      {showMobileMenu && <Backdrop onClick={handleCloseMenuClick} />}
      <MobileMenu active={showMobileMenu}>
        {!isSearchFocus && (
          <button
            onClick={handleCloseMenuClick}
            css={`
              position: absolute;
              right: 16px;
              top: 46px;
            `}
          >
            <CancelIcon />
          </button>
        )}

        <MobileMenu.SearchBoxContainer active={isSearchFocus}>
          <MobileMenu.SearchBox
            placeholder={t(lnMap.search)}
            onFocus={() => setIsSearchFocus(true)}
            onBlur={() => setIsSearchFocus(false)}
          />
          <button
            css={`
              color: #696c70;
              font-size: 1.7rem;
            `}
          >
            <SearchIcon />
          </button>
        </MobileMenu.SearchBoxContainer>
        <MobileMenu.Nav>
          <MobileMenu.List>
            <MobileMenu.Item>
              <MobileMenu.ButtonLink
                onClick={handleCloseMenuClick}
                to={`${ROUTES.PROFILE}${ROUTES.MY_CARGOS}`}
              >
                <MobileMenu.IconContainer>
                  <TruckIcon />
                </MobileMenu.IconContainer>
                <MobileMenu.ButtonText>{t(lnMap.cargos)}</MobileMenu.ButtonText>
              </MobileMenu.ButtonLink>
            </MobileMenu.Item>
            <MobileMenu.Item>
              <MobileMenu.ButtonLink
                onClick={handleCloseMenuClick}
                to={`${ROUTES.PROFILE}${ROUTES.MY_ADDRESSES}`}
              >
                <MobileMenu.IconContainer>
                  <PinIcon />
                </MobileMenu.IconContainer>
                <MobileMenu.ButtonText>
                  {t(lnMap.adressess)}
                </MobileMenu.ButtonText>
              </MobileMenu.ButtonLink>
            </MobileMenu.Item>
            <MobileMenu.Item>
              <MobileMenu.ButtonLink
                onClick={handleCloseMenuClick}
                to={`${ROUTES.PROFILE}${ROUTES.SETTINGS}`}
              >
                <MobileMenu.IconContainer>
                  <SettingsIcon />
                </MobileMenu.IconContainer>
                <MobileMenu.ButtonText>
                  {t(lnMap.settings)}
                </MobileMenu.ButtonText>
              </MobileMenu.ButtonLink>
            </MobileMenu.Item>
          </MobileMenu.List>
        </MobileMenu.Nav>
        <Header.PopoverToggleButton
          onClick={handleLanguageClick}
          css={`
            margin-top: 52px;
          `}
        >
          <div css="display:flex; margin-right:1.3rem;">
            <GlobeIcon />
          </div>
          <p>{t(lnMap.current_language)}</p>
        </Header.PopoverToggleButton>
        <MobileMenu.Box>
          <MobileMenu.ButtonAction onClick={handleCargoTrackClick}>
            {t(lnMap.track_cargo)}
          </MobileMenu.ButtonAction>
          {currentUser ? (
            <MobileMenu.Button onClick={handleLogoutClick}>
              {t(lnMap.logout)}
            </MobileMenu.Button>
          ) : (
            <MobileMenu.Button onClick={handleLoginClick}>
              {t(lnMap.login)}
            </MobileMenu.Button>
          )}
        </MobileMenu.Box>
      </MobileMenu>
      <LanguageMenuMobileContainer
        active={showLanguageMenu}
        closeLanguageMenu={closeLanguageMenu}
      />
    </>
  );
}

export default MobileMenuContainer;
