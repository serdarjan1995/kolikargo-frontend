import { Field, Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { CargoPickerSearchboxContainer } from "..";
import { CargoPicker, Flex } from "../../components";
import {
  HandCartIcon,
  PaperPlaneIcon,
  PinIcon,
  SearchIcon,
} from "../../components/icons";
import { useCargoPickerLogic } from "../../hooks";
import lnMap from "../../languages/language-maps/home-lang-map";

function CargoPickerContainer() {
  const { t } = useTranslation();
  const { fromList, setFromList, whereList, setWhereList, handlers } =
    useCargoPickerLogic();

  const { handleSubmit } = handlers;

  return (
    <CargoPicker>
      <Formik
        initialValues={{
          from: "",
          where: "",
          weight: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <Flex direction="column">
              <CargoPicker.TitleContainer>
                <CargoPicker.Title>
                  {t(lnMap.hero_card_title)}
                </CargoPicker.Title>
              </CargoPicker.TitleContainer>
              <CargoPicker.Box>
                <CargoPickerSearchboxContainer
                  name="from"
                  cargoPicker={{
                    title: t(lnMap.hero_card_section_title1),
                    text: t(lnMap.hero_card_section_text1),
                    icon: (
                      <CargoPicker.IconContainer>
                        <PaperPlaneIcon />
                      </CargoPicker.IconContainer>
                    ),
                  }}
                  list={fromList}
                  setList={setFromList}
                  setFieldValue={setFieldValue}
                />
                <CargoPickerSearchboxContainer
                  name="where"
                  cargoPicker={{
                    title: t(lnMap.hero_card_section_title2),
                    text: t(lnMap.hero_card_section_text2),
                    icon: (
                      <CargoPicker.IconContainer
                        css={`
                          font-size: 2.4rem;
                          line-height: 2.1;
                        `}
                      >
                        <PinIcon />
                      </CargoPicker.IconContainer>
                    ),
                  }}
                  list={whereList}
                  setList={setWhereList}
                  setFieldValue={setFieldValue}
                />
                <CargoPicker.ContentWrapper>
                  <CargoPicker.IconContainer>
                    <HandCartIcon />
                  </CargoPicker.IconContainer>
                  <CargoPicker.ContentInnerWrapper>
                    <Field
                      as={CargoPicker.Input}
                      type="number"
                      name="weight"
                      placeholder={t(lnMap.hero_card_section_title3)}
                    />
                    <CargoPicker.Text>
                      {t(lnMap.hero_card_section_text3)}
                    </CargoPicker.Text>
                  </CargoPicker.ContentInnerWrapper>
                </CargoPicker.ContentWrapper>
                <CargoPicker.ButtonMobile>
                  <div
                    css={`
                      margin-right: 12px;
                    `}
                  >
                    <SearchIcon />
                  </div>
                  <p>{t(lnMap.hero_card_btn)}</p>
                </CargoPicker.ButtonMobile>
                <CargoPicker.Button>
                  <div
                    css={`
                      align-items: center;
                      color: white;
                      display: flex;
                      font-size: 2rem;
                      justify-content: center;
                    `}
                  >
                    <SearchIcon />
                  </div>
                </CargoPicker.Button>
              </CargoPicker.Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </CargoPicker>
  );
}

export default CargoPickerContainer;
