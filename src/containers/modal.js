import React from "react";
import {
  CargoTrackModalContainer,
  LoginModalContainer,
  ResetPasswordModalContainer,
  SignUpModalContainer,
  SMSVerificationModalContainer,
} from ".";
import { useModal } from "../hooks";

function Modal() {
  const {
    modal,
    resetModal,
    openLoginModal,
    openResetPasswordModal,
    openSMSVerificationModal,
    openSignUpModal,
  } = useModal();

  const {
    showLoginModal,
    showSignUpModal,
    showResetPasswordModal,
    showSMSVerificationModal,
    showCargoTrackModal,
  } = modal;

  return (
    <>
      {showLoginModal && (
        <LoginModalContainer
          resetModal={resetModal}
          openSignUpModal={openSignUpModal}
          openResetPasswordModal={openResetPasswordModal}
        />
      )}
      {showSignUpModal && (
        <SignUpModalContainer
          openLoginModal={openLoginModal}
          resetModal={resetModal}
        />
      )}
      {showResetPasswordModal && (
        <ResetPasswordModalContainer
          openSignUpModal={openSignUpModal}
          openSMSVerificationModal={openSMSVerificationModal}
          resetModal={resetModal}
        />
      )}
      {showSMSVerificationModal && (
        <SMSVerificationModalContainer
          openLoginModal={openLoginModal}
          resetModal={resetModal}
        />
      )}
      {showCargoTrackModal && (
        <CargoTrackModalContainer resetModal={resetModal} />
      )}
    </>
  );
}

export default Modal;
