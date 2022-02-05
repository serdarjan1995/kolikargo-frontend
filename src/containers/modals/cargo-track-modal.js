import { Formik } from "formik";
import lnMap from "../../languages/language-maps/shared-lang-map";
import React, { useMemo } from "react";
import { AbsoluteCenter, Backdrop, Modal } from "../../components";
import { ButtonLarge } from "../../components/button";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { CrossIcon } from "../../components/icons";
import * as Yup from "yup";

function CargoTrackModalContainer({ resetModal }) {
  const { t } = useTranslation();

  const validationSchema = useMemo(
    () =>
      Yup.object({
        track_number: Yup.number().required(t(lnMap.form_warn_empty)),
      }),
    [t]
  );
  return (
    <Backdrop onClick={resetModal}>
      <Modal
        css={`
          padding-bottom: 50px;
        `}
      >
        <Modal.SmallBtn onClick={resetModal}>
          <AbsoluteCenter>
            <CrossIcon />
          </AbsoluteCenter>
        </Modal.SmallBtn>
        <Formik
          initialValues={{
            track_number: "",
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange }) => (
            <Modal.Form>
              <Modal.Title
                css={`
                  font-size: 2.4rem;
                  font-weight: 800;
                `}
              >
                {t(lnMap.modal_cargo_track)}
              </Modal.Title>
              <Modal.InputWrapper>
                <Modal.Label for="track_number">
                  {t(lnMap.modal_enter_track_number)}
                </Modal.Label>
                <Modal.InputContainer>
                  <Modal.Input
                    id="track_number"
                    name="track_number"
                    onChange={handleChange}
                    value={values.track_number}
                    placeholder={t(lnMap.track_no)}
                  />
                </Modal.InputContainer>
                {errors?.track_number && touched?.track_number && (
                  <Modal.Warn>{errors.track_number}</Modal.Warn>
                )}
              </Modal.InputWrapper>
              <ButtonLarge
                full
                css={`
                  margin-top: 30px;
                `}
              >
                {t(lnMap.action_show_results)}
              </ButtonLarge>
            </Modal.Form>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
}

export default CargoTrackModalContainer;
