import { useState } from "react";
import { useCurrentUser, useModal } from "..";

function useMobileMenuLogic(params) {
  const { closeMobileMenu } = params;
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { logout } = useCurrentUser();
  const { openCargoTrackModal, openLoginModal } = useModal();

  const handleLanguageClick = () => {
    setShowLanguageMenu(true);
  };

  const closeLanguageMenu = () => {
    setShowLanguageMenu(false);
  };

  const handleCloseMenuClick = () => {
    closeMobileModals()
  };

  const handleCargoTrackClick = (e) => {
    openCargoTrackModal();
    handleCloseMenuClick(e);
  };

  const closeMobileModals = () => {
    closeLanguageMenu();
    closeMobileMenu();
  };

  const handleLogoutClick = () => {
    logout();
    closeMobileModals();
  };

  const handleLoginClick = () => {
    closeMobileModals();
    openLoginModal();
  };

  const handlers = {
    handleLanguageClick,
    handleCloseMenuClick,
    handleCargoTrackClick,
    handleLoginClick,
    handleLogoutClick,
  };
  return {
    showLanguageMenu,
    closeLanguageMenu,
    handlers,
    isSearchFocus,
    setIsSearchFocus,
  };
}

export default useMobileMenuLogic;
