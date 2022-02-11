import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { AbsoluteCenter, Backdrop, Flex, Modal } from "../../components";
import { ButtonLarge } from "../../components/button";
import { CrossIcon } from "../../components/icons";
import "styled-components/macro";
import * as Yup from "yup";

const validationSchema = Yup.object({
  tel: Yup.number()
    .required("Lütfen telefon numaranızı giriniz.")
    .max(15, "Lütfen formata uygun bir telefon numarası giriniz"),
});

function ResetPasswordModalContainer(props) {
  const { t } = useTranslation();
  const { resetModal, openSignUpModal, /*openSMSVerificationModal*/ } = props;

  return (
    <Backdrop onClick={resetModal}>
      <Formik
        initialValues={{
          tel: "",
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, errors, handleSubmit, touched }) => (
          <Modal>
            <Modal.SmallBtn onClick={resetModal}>
              <AbsoluteCenter>
                <CrossIcon />
              </AbsoluteCenter>
            </Modal.SmallBtn>
            <Modal.Form>
              <Modal.Title>{t(lnMap.password_proccess)}</Modal.Title>
              <Modal.Text
                css={`
                  font-weight: 400;
                  margin-top: 34px;
                `}
              >
                {t(lnMap.modal_enter_tel_text)}
              </Modal.Text>
              <Modal.InputWrapper>
                <Modal.InputContainer>
                  <Modal.Input
                    name="tel"
                    onChange={handleChange}
                    value={values.tel}
                    placeholder={t(lnMap.modal_tel)}
                  />
                </Modal.InputContainer>
              </Modal.InputWrapper>
              {errors?.tel && touched?.tel && (
                <Modal.Warn>{errors.tel}</Modal.Warn>
              )}
              <Modal.Box>
                <ButtonLarge full onClick={handleSubmit}>
                  {t(lnMap.renew_password)}
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

export default ResetPasswordModalContainer;
