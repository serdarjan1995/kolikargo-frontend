import React, { useState } from "react";
import { ModalContext } from "../context";

const modalDefaultState = {
  showLoginModal: false,
  showSignUpModal: false,
  showResetPasswordModal: false,
  showSMSVerificationModal: false,
  showCargoTrackModal: false,
};

function ModalProvider({ children, ...rest }) {
  const [modal, setModal] = useState(modalDefaultState);
  const modalState = { modal, setModal };

  return (
    <ModalContext.Provider value={modalState} {...rest}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
