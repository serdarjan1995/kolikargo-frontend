import { useContext } from "react";
import { ModalContext } from "../context";

const modalDefaultState = {
  showLoginModal: false,
  showSignUpModal: false,
  showResetPasswordModal: false,
  showSMSVerificationModal: false,
  showCargoTrackModal: false,
};

function useModal() {
  const { modal, setModal } = useContext(ModalContext);

  const openLoginModal = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setModal({ ...modalDefaultState, showLoginModal: true });
  };

  const openCargoTrackModal = () => {
    setModal({ ...modalDefaultState, showCargoTrackModal: true });
  };
  const openSignUpModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal({ ...modalDefaultState, showSignUpModal: true });
  };

  const openResetPasswordModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal({ ...modalDefaultState, showResetPasswordModal: true });
  };

  const openSMSVerificationModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal({ ...modalDefaultState, showSMSVerificationModal: true });
  };

  const resetModal = (e) => {
    e?.stopPropagation();
    setModal({ ...modalDefaultState });
  };
  return {
    openSignUpModal,
    openLoginModal,
    openResetPasswordModal,
    openSMSVerificationModal,
    resetModal,
    openCargoTrackModal,
    modal,
  };
}

export default useModal;
