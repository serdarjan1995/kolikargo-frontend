import React from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { LanguageDropdown, MobileMenu } from "../../components";
import { CancelIcon } from "../../components/icons";
import languages from "../../constants/languages.json";

function LanguageMenuMobileContainer(props) {
  const { active, closeLanguageMenu } = props;
  const { i18n } = useTranslation();

  const handleLanguageItemClick = (language) => {
    closeLanguageMenu();
    i18n.changeLanguage(language);
  };

  return (
    <MobileMenu
      active={active}
      css={`
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      `}
    >
      <button
        onClick={closeLanguageMenu}
        css={`
          position: absolute;
          right: 16px;
          top: 20px;
        `}
      >
        <CancelIcon />
      </button>
      <MobileMenu.List>
        {languages.map(({ name, code }) => (
          <MobileMenu.Item key={name}>
            <LanguageDropdown.Button
              onClick={() => handleLanguageItemClick(code)}
            >
              <LanguageDropdown.Text>{name}</LanguageDropdown.Text>
            </LanguageDropdown.Button>
          </MobileMenu.Item>
        ))}
      </MobileMenu.List>
    </MobileMenu>
  );
}

export default LanguageMenuMobileContainer;
