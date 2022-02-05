import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { AbsoluteCenter, Backdrop, Flex, Modal } from "../../components";
import { CrossIcon, EyeCrossIcon, EyeIcon } from "../../components/icons";
import { ButtonLarge } from "../../components/button";
import * as Yup from "yup";
import { useSignUpLogic } from "../../hooks";

const validationSchema = Yup.object({
  tel: Yup.string()
    .required("Lütfen telefon numaranızı giriniz.")
    .max(15, "Lütfen formata uygun bir telefon numarası giriniz"),
  name_surname: Yup.string().required("Lütfen adınızı giriniz."),
  password: Yup.string()
    .required("Lütfen bir parola giriniz")
    .min(8, "Parola 8 karakterden uzun olmalıdır."),
  password_again: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Parolalar eşleşmiyor."
  ),
});

function SignUpModalContainer(props) {
  const { t } = useTranslation();
  const { resetModal, openLoginModal } = props;
  const { handlers, resource } = useSignUpLogic({ successHandler: resetModal });
  const [showPassword, setShowPassword] = useState(false);

  const { handleSignUp } = handlers;
  const handleCloseClick = (e) => {
    resetModal(e);
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
          name_surname: "",
          tel: "",
          password: "",
          password_again: "",
        }}
        onSubmit={handleSignUp}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Modal>
            <Modal.SmallBtn onClick={handleCloseClick}>
              <AbsoluteCenter>
                <CrossIcon />
              </AbsoluteCenter>
            </Modal.SmallBtn>
            <Modal.Form onSubmit={handleSubmit}>
              <Modal.Title>{t(lnMap.modal_new_membership)}</Modal.Title>
              <Modal.InputWrapper>
                <Modal.InputContainer>
                  <Modal.Input
                    name="name_surname"
                    onChange={handleChange}
                    value={values.name_surname}
                    placeholder={t(lnMap.form_name_surname)}
                  />
                </Modal.InputContainer>
                {errors?.name_surname && touched?.name_surname && (
                  <Modal.Warn>{errors.name_surname}</Modal.Warn>
                )}
                {resource?.error?.response?.data?.last_name
                  ? resource?.error?.response?.data?.last_name.map((error) => (
                      <Modal.Warn>{error}</Modal.Warn>
                    ))
                  : null}
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
                {resource?.error?.response?.data?.phone_number
                  ? resource?.error?.response?.data?.phone_number.map(
                      (error) => <Modal.Warn>{error}</Modal.Warn>
                    )
                  : null}
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
                <Modal.InputContainer>
                  <Modal.Input
                    name="password_again"
                    type="password"
                    onChange={handleChange}
                    value={values.password_again}
                    placeholder={t(lnMap.password_again)}
                  />
                </Modal.InputContainer>
                {errors?.password_again && touched?.password_again && (
                  <Modal.Warn>{errors.password_again}</Modal.Warn>
                )}
              </Modal.InputWrapper>
              {resource?.error?.response?.data?.non_field_errors
                ? resource?.error?.response?.data?.non_field_errors.map(
                    (error) => <Modal.Warn>{error}</Modal.Warn>
                  )
                : null}
              <Modal.Box>
                <ButtonLarge full>{t(lnMap.modal_register)}</ButtonLarge>
                <Flex
                  align="center"
                  justify="center"
                  css={`
                    margin-top: 23px;
                  `}
                >
                  <Modal.Text>{t(lnMap.have_account_question)}</Modal.Text>
                  <Modal.TextButton onClick={openLoginModal} bold spaced>
                    {t(lnMap.login)}
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

export default SignUpModalContainer;
