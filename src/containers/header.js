import React from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";
import {
  AccountDropdownMenuContainer,
  LanguageDropdownContainer,
  MobileMenuContainer,
} from ".";
import { Flex, Header } from "../components";
import {
  AvatarIcon,
  BurgerIcon,
  GlobeIcon,
  LineIcon,
  SearchIcon2,
} from "../components/icons";
import lnMap from "../languages/language-maps/shared-lang-map";
import { screens } from "../styles/variables";
import * as ROUTES from "../constants/routes";
import LogoSVG from "../assets/logo.svg";
import { IsOutsideClick } from "../helpers";
import { useHeaderLogic } from "../hooks";
import { Form, Formik } from "formik";

function HeaderContainer() {
  const {
    handlers,
    closeLanguageDropdown,
    closeMobileMenu,
    closeAccountDropdownMenu,
    showMobileMenu,
    showLanguageDropdown,
    showAccountDropdownMenu,
    t,
  } = useHeaderLogic();

  const {
    handleHamburgerClick,
    handleLanguageToggleClick,
    handleLanguageDropdownItemClick,
    handleAvatarClick,
    handleCargoTrackClick,
    handleSearchSubmit,
  } = handlers;

  return (
    <Header>
      <Flex align="center">
        <Link
          to={ROUTES.HOME}
          css={`
            flex-shrink: 0;

            @media ${screens.md} {
              margin-right: 66px;
            }
          `}
        >
          <Header.LogoContainer>
            <Header.Logo src={LogoSVG} alt="Kolikargo" />
          </Header.LogoContainer>
        </Link>
        <Formik
          initialValues={{
            query: "",
          }}
          onSubmit={handleSearchSubmit}
        >
          {({ values, handleChange }) => (
            <Form
              css={`
                margin-right: 100px;
                width: 100%;
              `}
            >
              <Header.SearchboxContainer>
                <Header.Searchbox
                  name="query"
                  value={values.query}
                  onChange={handleChange}
                  placeholder={t(lnMap.search)}
                />
                <Header.SearchboxButton>
                  <SearchIcon2 />
                </Header.SearchboxButton>
              </Header.SearchboxContainer>
            </Form>
          )}
        </Formik>
        <Flex css="margin-left:auto">
          <Flex
            css={`
              display: none;
              @media ${screens.md} {
                display: flex;
              }
            `}
            align="center"
          >
            <Header.ButtonLink as="button" onClick={handleCargoTrackClick}>
              {t(lnMap.header_btn)}
            </Header.ButtonLink>
            <div css="margin: 0 35px;">
              <LineIcon />
            </div>
          </Flex>
          <Flex align="center" justify="flex-end">
            <div
              css={`
                position: relative;
              `}
            >
              <Header.AvatarButton onClick={handleAvatarClick}>
                <AvatarIcon />
              </Header.AvatarButton>
              {showAccountDropdownMenu && (
                <IsOutsideClick
                  Component={
                    <AccountDropdownMenuContainer
                      closeAccountDropdownMenu={closeAccountDropdownMenu}
                    />
                  }
                  handler={closeAccountDropdownMenu}
                />
              )}
            </div>
            <button
              onClick={handleHamburgerClick}
              css={`
                @media ${screens.md} {
                  display: none;
                }
              `}
            >
              <BurgerIcon />
            </button>
            <Flex
              css={`
                position: relative;
                display: none;

                @media ${screens.md} {
                  display: flex;
                }
              `}
            >
              <Header.PopoverToggleButton onClick={handleLanguageToggleClick}>
                <div css="display:flex; margin-right:1.3rem;">
                  <GlobeIcon />
                </div>
                <p>{t(lnMap.current_language)}</p>
              </Header.PopoverToggleButton>
              {showLanguageDropdown && (
                <IsOutsideClick
                  Component={
                    <LanguageDropdownContainer
                      handleItemClick={handleLanguageDropdownItemClick}
                    />
                  }
                  handler={closeLanguageDropdown}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <MobileMenuContainer
        closeMobileMenu={closeMobileMenu}
        showMobileMenu={showMobileMenu}
      />
    </Header>
  );
}

export default HeaderContainer;
