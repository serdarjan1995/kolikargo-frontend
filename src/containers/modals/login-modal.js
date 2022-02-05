import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";
import "styled-components/macro";
import { Backdrop, Flex, Modal, Form, AbsoluteCenter } from "../../components";
import { ButtonLarge } from "../../components/button";
import {
  CrossIcon,
  EyeCrossIcon,
  EyeIcon,
  GoogleIcon,
  TickIcon,
} from "../../components/icons";
import { useLoginModalLogic } from "../../hooks";
import * as Yup from "yup";

const validationSchema = Yup.object({
  tel: Yup.string().required("Lütfen telefon numaranızı giriniz."),
  password: Yup.string()
    .required("Lütfen bir parola giriniz")
    .min(8, "Parola 8 karakterden uzun olmalıdır."),
});

function LoginModalContainer(props) {
  const { t } = useTranslation();
  const { resetModal, openSignUpModal, openResetPasswordModal } = props;
  const [isRemember, setIsRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { handlers, resource } = useLoginModalLogic();

  const { handleLoginClick } = handlers;

  const handleRememberClick = () => {
    setIsRemember(!isRemember);
  };

  const handlePasswordToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <Backdrop onClick={resetModal}>
      <Formik
        initialValues={{
          tel: "",
          password: "",
          remember: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleLoginClick}
      >
        {({ values, errors, handleChange, handleSubmit, touched }) => (
          <Modal>
            <Modal.SmallBtn onClick={resetModal}>
              <AbsoluteCenter>
                <CrossIcon />
              </AbsoluteCenter>
            </Modal.SmallBtn>
            <Modal.Form onSubmit={handleSubmit}>
              <Modal.Title>{t(lnMap.member_login)}</Modal.Title>
              <Modal.InputWrapper>
                <Modal.InputContainer>
                  <Modal.Input
                    name="tel"
                    onChange={handleChange}
                    value={values.tel}
                    placeholder={t(lnMap.modal_tel)}
                  />
                </Modal.InputContainer>
                {errors?.tel && touched?.tel && (
                  <Modal.Warn>{errors.tel}</Modal.Warn>
                )}
                <Modal.InputContainer>
                  <Modal.Input
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    type={showPassword ? "text" : "password"}
                    placeholder={t(lnMap.password)}
                  />

                  <Modal.AbsoluteButton
                    onClick={handlePasswordToggle}
                    active={showPassword}
                  >
                    {showPassword ? <EyeCrossIcon /> : <EyeIcon />}
                  </Modal.AbsoluteButton>
                </Modal.InputContainer>
                {errors?.password && touched?.password && (
                  <Modal.Warn>{errors.password}</Modal.Warn>
                )}
              </Modal.InputWrapper>
              <Flex
                align="center"
                justify="space-between"
                css={`
                  margin-top: 17px;
                `}
              >
                <Flex align="center">
                  <Form.CheckboxLabel
                    active={isRemember}
                    css={`
                      margin-right: 10px;
                    `}
                  >
                    <AbsoluteCenter>
                      <TickIcon />
                    </AbsoluteCenter>
                    <input
                      type="checkbox"
                      name="remember"
                      onChange={handleChange}
                      onClick={handleRememberClick}
                    />
                  </Form.CheckboxLabel>
                  <Modal.Text>{t(lnMap.remember_me)}</Modal.Text>
                </Flex>
                <Modal.Text>
                  <Modal.TextButton onClick={openResetPasswordModal}>
                    {t(lnMap.forgot_password)}
                  </Modal.TextButton>
                </Modal.Text>
              </Flex>
              {resource?.error?.response?.data?.detail ? (
                <Modal.Warn>{resource?.error?.response?.data?.detail}</Modal.Warn>
              ) : null}
              <Modal.Box>
                <ButtonLarge full disabled={resource.isLoading}>
                  {t(lnMap.login)}
                </ButtonLarge>
                <Modal.Text>{t(lnMap.login_via_social)}</Modal.Text>
                <ButtonLarge full variant="secondary">
                  <Flex align="center" justify="center">
                    <Flex
                      css={`
                        margin-right: 9px;
                      `}
                    >
                      <GoogleIcon />
                    </Flex>
                    <p>Google</p>
                  </Flex>
                </ButtonLarge>
                <Flex
                  align="center"
                  justify="center"
                  css={`
                    margin-top: 23px;
                  `}
                >
                  <Modal.Text>{t(lnMap.no_account_question)}</Modal.Text>
                  <Modal.TextButton onClick={openSignUpModal} spaced bold>
                    {t(lnMap.modal_sign_up)}
                  </Modal.TextButton>
                </Flex>
              </Modal.Box>
            </Modal.Form>
          </Modal>
        )}
      </Formik>
    </Backdrop>
  );
}

export default LoginModalContainer;
