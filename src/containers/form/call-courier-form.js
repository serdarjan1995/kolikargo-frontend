import React from "react";
import {
  AbsoluteCenter,
  Flex,
  Form,
  KGIndicator,
  SumCard,
} from "../../components";
import { ErrorMessage, Field, Formik } from "formik";
import lnMap from "../../languages/language-maps/shared-lang-map";
import "styled-components/macro";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useTranslation } from "react-i18next";
import { DropdownSearchboxContainer, SumCardContainer } from "..";
import { fonts, screens } from "../../styles/variables";
import { ButtonLarge } from "../../components/button";
import { TickIcon } from "../../components/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useCallCourierFormLogic, useLanguage } from "../../hooks";

const whatToShipChoices = [
  { key: "Beyaz Eşya", value: "Beyaz Eşya" },
  { key: "Giyim", value: "Giyim" },
  { key: "Mutfak Eşyaları", value: "Mutfak Eşyaları" },
  { key: "Tekstil", value: "Tekstil" },
  { key: "Karışık", value: "Karışık" },
];

const phoneInputStyle = {
  borderColor: "#E6E8EC",
  borderRadius: "15px",
  borderWidth: "2px",
  color: "#777E90",
  fontFamily: fonts.gilroy,
  fontWeight: "600",
  width: "100%",
};

function CallCourierFormContainer() {
  const { t } = useTranslation();
  const {
    handlers,
    customDatePickerInput,
    //validationSchema,
    selectedDay,
    setSelectedDay,
  } = useCallCourierFormLogic();
  const {
    handleCallCourierClick,
    handleAcceptTermsClick,
    handleDateRadioClick,
  } = handlers;
  const { fromCities, whereCities, whereCountries } = useLanguage();

  return (
    <Formik
      initialValues={{
        shipper_name: "",
        shipper_tel: "",
        shipping_address_city: "",
        shipping_address_country: "",
        shipping_address_details: "",
        what_to_ship: "",
        recipient_name: "",
        recipient_tel: "",
        delivery_address_country: "",
        delivery_address_city: "",
        delivery_address_details: "",
        box_weight: "",
        shipping_date: "today",
        note: "",
        coupon_code: "",
        acceptTerms: false,
      }}
      onSubmit={handleCallCourierClick}
 /*      validationSchema={validationSchema} */
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Section noMargin>
            <Form.Title>{t(lnMap.form_shipper)}</Form.Title>
            <Form.InputBox>
              <Form.Fieldset>
                <Form.InputField
                  id="shipper_name"
                  name="shipper_name"
                  label={t(lnMap.form_name_surname)}
                  onChange={handleChange}
                  value={values.shipper_name}
                  variantProp={
                    errors?.shipper_name && touched?.shipper_name ? "warn" : ""
                  }
                  setFieldTouched={setFieldTouched}
                />
                <ErrorMessage name="shipper_name" component={Form.Warn} />
              </Form.Fieldset>
              <Form.Fieldset>
                <PhoneInput
                  inputProps={{
                    name: "shipper_tel",
                    id: "shipper_tel",
                    onChange: handleChange,
                    onBlur: () => setFieldTouched("shipper_tel", true),
                  }}
                  specialLabel={t(lnMap.form_tel)}
                  country={"tr"}
                  value={values.shipper_tel}
                  inputStyle={phoneInputStyle}
                />
                <ErrorMessage name="shipper_tel" component={Form.Warn} />
              </Form.Fieldset>
            </Form.InputBox>
            <Form.InputBox
              css={`
                margin-top: 20px;
              `}
            >
              <Form.FieldTitle>
                {t(lnMap.form_shipping_address)}
              </Form.FieldTitle>
              <Form.Fieldset
                css={`
                  display: flex;

                  & > div {
                    width: 100% !important;
                  }

                  & > * + * {
                    margin-left: 16px;
                  }
                `}
              >
                <div>
                  <DropdownSearchboxContainer
                    items={fromCities}
                    name="shipping_address_city"
                    handleChange={handleChange}
                    value={values.shipping_address_city}
                    placeholder={t(lnMap.form_country)}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />
                  <ErrorMessage
                    name="shipping_address_city"
                    component={Form.Warn}
                  />
                </div>
                <div>
                  <Form.InputField
                    id="shipping_address_country"
                    name="shipping_address_country"
                    label={t(lnMap.form_district)}
                    onChange={handleChange}
                    value={values.shipping_address_country}
                    setFieldTouched={setFieldTouched}
                  />
                  <ErrorMessage
                    name="shipping_address_country"
                    component={Form.Warn}
                  />
                </div>
              </Form.Fieldset>
              <Form.Textarea
                name="shipping_address_details"
                placeholder={t(lnMap.form_address_details)}
                rows="5"
                onChange={handleChange}
                value={values.shipping_address_details}
                onBlur={() => setFieldTouched("shipping_address_details", true)}
              />
              <ErrorMessage
                name="shipping_address_details"
                component={Form.Warn}
              />
            </Form.InputBox>
          </Form.Section>
          <Form.Section>
            <Form.Title>{t(lnMap.form_recipient)}</Form.Title>
            <Form.InputBox>
              <Form.InputField
                id="recipient_name"
                name="recipient_name"
                label={t(lnMap.form_name_surname)}
                onChange={handleChange}
                value={values.recipient_name}
                setFieldTouched={setFieldTouched}
              />
              <ErrorMessage name="recipient_name" component={Form.Warn} />
              <PhoneInput
                inputProps={{
                  name: "recipient_tel",
                  id: "recipient_tel",
                  onChange: handleChange,
                  onBlur: () => setFieldTouched("recipient_tel", true),
                }}
                specialLabel={t(lnMap.form_tel)}
                value={values.recipient_tel}
                country={"tr"}
                inputStyle={phoneInputStyle}
              />
              <ErrorMessage name="recipient_tel" component={Form.Warn} />
            </Form.InputBox>
            <Form.Section>
              <Form.FieldTitle>
                {t(lnMap.form_delivery_address)}
              </Form.FieldTitle>
              <Form.InputBox>
                <Form.Fieldset
                  css={`
                    display: flex;

                    & > div {
                      width: 100% !important;
                    }

                    & > * + * {
                      margin-left: 16px;
                    }
                  `}
                >
                  <div
                    css={`
                      position: relative;
                      z-index: 200;
                    `}
                  >
                    <DropdownSearchboxContainer
                      items={whereCountries}
                      name="delivery_address_country"
                      handleChange={handleChange}
                      value={values.delivery_address_country}
                      placeholder={t(lnMap.form_country_land)}
                      setFieldValue={setFieldValue}
                      setFieldTouched={setFieldTouched}
                    />
                    <ErrorMessage
                      name="delivery_address_country"
                      component={Form.Warn}
                    />
                  </div>
                  <div
                    css={`
                      position: relative;
                      z-index: 200;
                    `}
                  >
                    <DropdownSearchboxContainer
                      items={whereCities}
                      name="delivery_address_city"
                      handleChange={handleChange}
                      value={values.delivery_address_city}
                      placeholder={t(lnMap.form_country)}
                      setFieldValue={setFieldValue}
                      setFieldTouched={setFieldTouched}
                    />
                    <ErrorMessage
                      name="delivery_address_city"
                      component={Form.Warn}
                    />
                  </div>
                </Form.Fieldset>
                <div>
                  <Form.Textarea
                    name="delivery_address_details"
                    placeholder={t(lnMap.form_address_details)}
                    rows="5"
                    onChange={handleChange}
                    value={values.delivery_address_details}
                    onBlur={() =>
                      setFieldTouched("delivery_address_details", true)
                    }
                  />
                  <ErrorMessage
                    name="delivery_address_details"
                    component={Form.Warn}
                  />
                </div>
              </Form.InputBox>
              <Form.Section>
                <Form.Title small>{t(lnMap.form_what_to_ship)}</Form.Title>
                <Form.InputBox>
                  <div>
                    <Form.Fieldset>
                      <DropdownSearchboxContainer
                        items={whatToShipChoices}
                        name="what_to_ship"
                        handleChange={handleChange}
                        value={values.what_to_ship}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        readOnly
                      />
                      <ErrorMessage name="what_to_ship" component={Form.Warn} />
                      <Form.Text>{t(lnMap.form_what_to_ship_desc)}</Form.Text>
                    </Form.Fieldset>
                  </div>
                  <div
                    css={`
                      max-width: 270px;
                    `}
                  >
                    <Form.FieldTitle>
                      {t(lnMap.form_cargo_weight)}
                    </Form.FieldTitle>
                    <Form.Fieldset>
                      <Form.InputContainer>
                        <Field
                          type="number"
                          as={Form.Input}
                          name="box_weight"
                          placeholder={t(lnMap.form_box_weight)}
                        />
                        <KGIndicator>kg</KGIndicator>
                      </Form.InputContainer>
                    </Form.Fieldset>
                    <ErrorMessage name="box_weight" component={Form.Warn} />
                  </div>
                </Form.InputBox>
              </Form.Section>
            </Form.Section>
            <Form.Section>
              <Form.Title small>{t(lnMap.form_cargo_receival_date)}</Form.Title>
              <Form.Fieldset
                css={`
                  margin-top: 20px;

                  @media ${screens.md} {
                    & > * + * {
                      margin-left: 14px;
                    }
                  }
                `}
              >
                <Form.RadioLabel
                  onClick={handleDateRadioClick}
                  active={values.shipping_date === "today" && !selectedDay}
                >
                  {t(lnMap.form_date_select_today)}
                  <Form.Radio
                    name="shipping_date"
                    value="today"
                    onChange={handleChange}
                  />
                </Form.RadioLabel>
                <Form.RadioLabel
                  onClick={handleDateRadioClick}
                  active={values.shipping_date === "tomorrow" && !selectedDay}
                  css={`
                    margin-left: 10px;

                    @media ${screens.md} {
                      & > * + * {
                        margin-left: 0;
                      }
                    }
                  `}
                >
                  {t(lnMap.form_date_select_tomorrow)}
                  <Form.Radio
                    value="tomorrow"
                    name="shipping_date"
                    onChange={handleChange}
                  />
                </Form.RadioLabel>
                <div
                  css={`
                    display: inline-flex;
                    margin-top: 20px;

                    @media ${screens.md} {
                      margin-top: 0;
                    }
                  `}
                >
                  <DatePicker
                    value={selectedDay}
                    onChange={setSelectedDay}
                    renderInput={customDatePickerInput}
                  />
                </div>
              </Form.Fieldset>
            </Form.Section>
            <Form.Section>
              <Form.Title small>{t(lnMap.form_note)}</Form.Title>
              <Field
                name="note"
                as={Form.Textarea}
                rows="5"
                placeholder={t(lnMap.form_note_optional)}
              />
            </Form.Section>
            <Form.Section>
              <Form.Title small>{t(lnMap.form_do_you_have_coupon)}</Form.Title>
              <Flex
                direction="column"
                css={`
                  @media ${screens.lg} {
                    flex-direction: row;
                  }
                `}
              >
                <Form.InputField
                  id="coupon_code"
                  name="coupon_code"
                  label={t(lnMap.form_enter_coupon_code)}
                  onChange={handleChange}
                  value={values.coupon_code}
                  setFieldTouched={setFieldTouched}
                />
                <ButtonLarge
                  css={`
                    margin-top: 12px;

                    @media ${screens.lg} {
                      margin-left: 16px;
                      margin-top: 0;
                    }
                  `}
                >
                  {t(lnMap.action_apply)}
                </ButtonLarge>
              </Flex>
            </Form.Section>
          </Form.Section>
          <Form.Title
            css={`
              font-weight: 700;
              margin: 20px 0;

              @media ${screens.lg} {
                margin: 30px 0;
              }
            `}
          >
            {t(lnMap.total_card_title)}
          </Form.Title>
          <SumCardContainer />
          <div
            css={`
              margin-top: 38px;
            `}
          >
            <ButtonLarge
              full
              css={`
                @media ${screens.lg} {
                  max-width: 273px;
                }
              `}
            >
              {t(lnMap.accept_and_call_courier)}
            </ButtonLarge>
            <Flex
              css={`
                margin-top: 28px;

                @media ${screens.lg} {
                  margin-top: 33px;
                }
              `}
            >
              <Form.CheckboxLabel
                htmlFor="acceptTerms"
                active={values.acceptTerms}
                tabIndex="0"
                onKeyDown={(e) =>
                  handleAcceptTermsClick(
                    e,
                    setFieldValue("acceptTerms", !values.acceptTerms)
                  )
                }
              >
                {values.acceptTerms && (
                  <AbsoluteCenter>
                    <TickIcon />
                  </AbsoluteCenter>
                )}
                <Field
                  id="acceptTerms"
                  type="checkbox"
                  name="acceptTerms"
                  tabIndex="-1"
                />
              </Form.CheckboxLabel>
              <SumCard.Info
                css={`
                  color: #141416;
                  font-size: 1.4rem;
                `}
              >
                {t(lnMap.form_privacy_policy)}
              </SumCard.Info>
            </Flex>
            <ErrorMessage name="acceptTerms" component={Form.Warn} />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CallCourierFormContainer;
