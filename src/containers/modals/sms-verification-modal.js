import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { AbsoluteCenter, Backdrop, Flex, Modal } from "../../components";
import { ButtonLarge } from "../../components/button";
import { CrossIcon } from "../../components/icons";
import "styled-components/macro";
import { screens } from "../../styles/variables";
import { DigitInputContainer } from "..";

function SMSVerificationModalContainer(props) {
  const { t } = useTranslation();
  const { resetModal, openLoginModal } = props;

  return (
    <Backdrop onClick={resetModal}>
      <Formik
        initialValues={{
          digit_1: "",
          digit_2: "",
          digit_3: "",
          digit_4: "",
        }}
      >
        {({ values, handleChange }) => (
          <Modal>
            <Modal.SmallBtn onClick={resetModal}>
              <AbsoluteCenter>
                <CrossIcon />
              </AbsoluteCenter>
            </Modal.SmallBtn>
            <Modal.Form>
              <Modal.Title>{t(lnMap.sms_verification)}</Modal.Title>
              <div
                css={`
                  margin: auto;
                  margin-top: 28px;
                  max-width: 202px;

                  @media ${screens.md} {
                    margin-top: 40px;
                    max-width: 240px;
                  }
                `}
              >
                <Modal.Text
                  color="#C7C7C7"
                  css={`
                    @media ${screens.md} {
                      font-size: 1.7rem;
                    }
                  `}
                >
                  <span
                    css={`
                      color: #141416;
                      font-weight: 700;
                    `}
                  >
                    +90 5** *** **45{" "}
                  </span>
                  {t(lnMap.enter_4_digit_number)}
                </Modal.Text>
              </div>
              <DigitInputContainer
                handleChange={handleChange}
                values={values}
              />
              <div
                css={`
                  margin-top: 35px;

                  @media ${screens.md} {
                    margin-top: 60px;
                  }
                `}
              >
                <Modal.TextButton>
                  <Modal.Text
                    color="#C7C7C7"
                    css={`
                      font-size: 1.5rem;
                    `}
                  >
                    {t(lnMap.send_code_again)}
                  </Modal.Text>
                  <Modal.Text
                    color="#C7C7C7"
                    css={`
                      font-size: 1.6rem;
                    `}
                  >
                    0:20
                  </Modal.Text>
                </Modal.TextButton>
              </div>
              <Modal.Box>
                <Flex
                  align="center"
                  justify="center"
                  css={`
                    margin-top: 23px;
                  `}
                >
                  <Modal.Text>{t(lnMap.have_account_question)}</Modal.Text>
                  <Modal.TextButton onClick={openLoginModal} spaced bold>
                    {t(lnMap.login)}
                  </Modal.TextButton>
                </Flex>
                <ButtonLarge full>{t(lnMap.accept_and_continue)}</ButtonLarge>
              </Modal.Box>
            </Modal.Form>
          </Modal>
        )}
      </Formik>
    </Backdrop>
  );
}

export default SMSVerificationModalContainer;
