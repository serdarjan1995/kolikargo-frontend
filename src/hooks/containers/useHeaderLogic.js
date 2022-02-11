import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useCurrentUser, useLocalStorage } from "../../hooks";
import useModal from "../useModal";
import * as ROUTES from "../../constants/routes";

function useHeaderLogic() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const history = useHistory();
  const [showAccountDropdownMenu, setShowAccountDropdownMenu] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { currentUser, } = useCurrentUser();
  const { openLoginModal, openCargoTrackModal } = useModal();
  const [storedValue, setStoredValue] = useLocalStorage("lang", "en");
  const { t, i18n } = useTranslation();

  const closeMobileMenu = () => setShowMobileMenu(false);

  const handleHamburgerClick = () => setShowMobileMenu(true);

  const handleLanguageToggleClick = () =>
    setShowLanguageDropdown(!showLanguageDropdown);

  const handleAvatarClick = (e) => {
    if (currentUser) {
      return setShowAccountDropdownMenu(!showAccountDropdownMenu);
    }
    openLoginModal(e);
  };

  const handleLanguageDropdownItemClick = (language) => {
    closeLanguageDropdown();
    setStoredValue(language);
    i18n.changeLanguage(language);
  };

  const handleCargoTrackClick = () => {
    openCargoTrackModal();
  };

  const handleSearchSubmit = (values) => {
    const { query } = values;
    if (query) {
      const params = new URLSearchParams();
      params.append("q", query);
      history.push({
        pathname: ROUTES.ALL_COMPANIES,
        search: params.toString(),
      });
    }
  };

  const closeLanguageDropdown = () => setShowLanguageDropdown(false);
  const closeAccountDropdownMenu = () => setShowAccountDropdownMenu(false);

  useEffect(() => {
    if (storedValue) {
      return i18n.changeLanguage(storedValue);
    }
  }, [storedValue, i18n]);

  const handlers = {
    handleHamburgerClick,
    handleLanguageToggleClick,
    handleLanguageDropdownItemClick,
    handleAvatarClick,
    handleCargoTrackClick,
    handleSearchSubmit,
  };

  return {
    handlers,
    closeMobileMenu,
    closeAccountDropdownMenu,
    closeLanguageDropdown,
    showMobileMenu,
    showLanguageDropdown,
    showAccountDropdownMenu,
    t,
  };
}

export default useHeaderLogic;
