import React, { useMemo } from "react";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { Flex, Form } from "../../components";
import { ButtonLarge, GoBackButton } from "../../components/button";
import { ProfileSectionTitleStyle } from "../../styles/mixins";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { ErrorMessage, Formik } from "formik";
import { screens } from "../../styles/variables";
import * as Yup from "yup";
import { useAddAddressLogic } from "../../hooks";

function AddAddressContainer() {
  const { t } = useTranslation();
  const { handlers } = useAddAddressLogic();
  const { handleSubmit } = handlers;

  const validationSchema = useMemo(
    () =>
      Yup.object({
        address_name: Yup.string().required(t(lnMap.form_warn_empty)),
        city: Yup.string().required(t(lnMap.form_warn_empty)),
        district: Yup.string().required(t(lnMap.form_warn_empty)),
        address_details: Yup.string().required(t(lnMap.form_warn_empty)),
      }),
    [t]
  );

  return (
    <>
      <Flex align="center" width="100%">
        <GoBackButton />
        <h1
          css={`
            ${ProfileSectionTitleStyle}
          `}
        >
          {t(lnMap.address)}
        </h1>
      </Flex>
      <Formik
        initialValues={{
          address_name: "",
          city: "",
          district: "",
          address_details: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldTouched }) => (
          <Form
            css={`
              margin-top: 89px;
              width: 100%;

              @media ${screens.md} {
                margin: 150px auto;
                width: 395px;
              }
            `}
            onSubmit={handleSubmit}
          >
            <Form.Section noMargin>
              <Form.InputBox>
                <Form.Fieldset>
                  <Form.InputField
                    id="address_name"
                    name="address_name"
                    label={t(lnMap.add_address_name)}
                    onChange={handleChange}
                    value={values.address_name}
                    setFieldTouched={setFieldTouched}
                  />
                </Form.Fieldset>
                <ErrorMessage name="address_name" component={Form.Warn} />
                <Form.Fieldset>
                  <Form.InputField
                    id="city"
                    name="city"
                    label={t(lnMap.add_address_city)}
                    onChange={handleChange}
                    value={values.city}
                    setFieldTouched={setFieldTouched}
                  />
                </Form.Fieldset>
                <ErrorMessage name="city" component={Form.Warn} />
                <Form.Fieldset>
                  <Form.InputField
                    id="district"
                    name="district"
                    label={t(lnMap.add_address_district)}
                    onChange={handleChange}
                    value={values.district}
                    setFieldTouched={setFieldTouched}
                  />
                </Form.Fieldset>
                <ErrorMessage name="district" component={Form.Warn} />
                <Form.Textarea
                  name="address_details"
                  placeholder={t(lnMap.add_address_details)}
                  rows="5"
                  onChange={handleChange}
                  value={values.address_details}
                  onBlur={() => setFieldTouched("address_details", true)}
                />
                <ErrorMessage name="address_details" component={Form.Warn} />
              </Form.InputBox>
            </Form.Section>
            <ButtonLarge
              full
              css={`
                margin-top: 62px;
              `}
            >
              {t(lnMap.action_save_address)}
            </ButtonLarge>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddAddressContainer;
