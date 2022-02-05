import { ErrorMessage, Formik } from "formik";
import lnMap from "../../languages/language-maps/shared-lang-map";
import { ProfileSectionTitleStyle } from "../../styles/mixins";
import React, { useMemo } from "react";
import "styled-components/macro";
import { Flex, Form } from "../../components";
import { useTranslation } from "react-i18next";
import { screens } from "../../styles/variables";
import { ButtonLarge, GoBackButton } from "../../components/button";
import { CrossIcon2 } from "../../components/icons";
import * as Yup from "yup";

function SettingsContainer() {
  const { t } = useTranslation();

  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().required(t(lnMap.form_warn_empty)),
        email: Yup.string()
          .email(t(lnMap.form_warn_email_invalid_format))
          .required(t(lnMap.form_warn_empty)),
        tel: Yup.number().required(t(lnMap.form_warn_empty)),
        current_password: Yup.string().required(t(lnMap.form_warn_empty)),
        new_password: Yup.string().required(t(lnMap.form_warn_empty)),
        new_password_again: Yup.string().oneOf(
          [Yup.ref("new_password"), null],
          t(lnMap.form_warn_password_unmatched)
        ),
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
          {t(lnMap.settings)}
        </h1>
      </Flex>
      <div
        css={`
          margin: 70px auto;
          width: 100%;

          @media ${screens.lg} {
            width: 395px;
          }
        `}
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            tel: "",
            current_password: "",
            new_password: "",
            new_password_again: "",
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
          }) => (
            <Form>
              <Form.Section noMargin>
                <Form.InputBox>
                  <Form.Fieldset>
                    <Form.InputField
                      id="name"
                      name="name"
                      label={t(lnMap.form_name_surname)}
                      onChange={handleChange}
                      setFieldTouched={setFieldTouched}
                    />
                  </Form.Fieldset>
                  <ErrorMessage name="name" component={Form.Warn} />
                  <Form.Fieldset>
                    <Form.InputField
                      id="email"
                      name="email"
                      label={t(lnMap.footer_subscription_input)}
                      onChange={handleChange}
                      value={values.email}
                      setFieldTouched={setFieldTouched}
                    />
                  </Form.Fieldset>
                  <ErrorMessage name="email" component={Form.Warn} />
                  <Form.Text
                    css={`
                      color: black;
                    `}
                  >
                    {t(lnMap.settings_support_text)}
                  </Form.Text>
                  <Form.Text
                    css={`
                      margin-top: 0;
                    `}
                  >
                    <a
                      href="mailto:test@"
                      css={`
                        color: #fe7224;
                      `}
                    >
                      {t(lnMap.settings_write_message)}
                    </a>
                  </Form.Text>
                </Form.InputBox>
              </Form.Section>
              <Form.Section>
                <Form.Fieldset>
                  <Form.InputField
                    id="tel"
                    name="tel"
                    label={t(lnMap.form_tel)}
                    onChange={handleChange}
                    value={values.tel}
                    setFieldTouched={setFieldTouched}
                  />
                  <ErrorMessage name="tel" component={Form.Warn} />
                </Form.Fieldset>
              </Form.Section>
              <Form.Section>
                <Form.FieldTitle
                  css={`
                    color: black;
                  `}
                >
                  {t(lnMap.password)}
                </Form.FieldTitle>
                <Form.InputBox>
                  <Form.Fieldset>
                    <Form.InputField
                      id="current_password"
                      name="current_password"
                      label={t(lnMap.settings_current_password)}
                      onChange={handleChange}
                      value={values.current_password}
                      setFieldTouched={setFieldTouched}
                    />
                  </Form.Fieldset>
                  <ErrorMessage name="current_password" component={Form.Warn} />
                  <Form.Fieldset>
                    <Form.InputField
                      id="new_password"
                      name="new_password"
                      label={t(lnMap.settings_new_password)}
                      onChange={handleChange}
                      value={values.new_password}
                      setFieldTouched={setFieldTouched}
                    />
                  </Form.Fieldset>
                  <ErrorMessage name="new_password" component={Form.Warn} />
                  <Form.Fieldset>
                    <Form.InputField
                      id="new_password_again"
                      name="new_password_again"
                      label={t(lnMap.settings_new_password_again)}
                      onChange={handleChange}
                      value={values.new_password_again}
                      setFieldTouched={setFieldTouched}
                    />
                  </Form.Fieldset>
                  <ErrorMessage
                    name="new_password_again"
                    component={Form.Warn}
                  />
                </Form.InputBox>
              </Form.Section>
              <Flex>
                <button
                  css={`
                    color: #fe7224;
                    margin-left: auto;
                    margin-top: 16px;
                  `}
                >
                  {t(lnMap.action_change_password)}
                </button>
              </Flex>
              <Flex
                align="center"
                direction="column"
                css={`
                  margin-top: 46px;

                  @media ${screens.sm} {
                    flex-direction: row;
                  }
                `}
              >
                <ButtonLarge full>{t(lnMap.action_update_info)}</ButtonLarge>
                <button
                  onClick={handleSubmit}
                  css={`
                    align-items: center;
                    display: flex;
                    margin-top: 8px;
                    padding: 0.5em 1.2em;
                    white-space: nowrap;

                    @media ${screens.sm} {
                      margin-left: 8px;
                      margin-top: 0;
                    }
                  `}
                >
                  <Flex
                    css={`
                      margin-right: 15px;
                    `}
                  >
                    <CrossIcon2 />
                  </Flex>
                  <p>{t(lnMap.action_cancel)}</p>
                </button>
              </Flex>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default SettingsContainer;
