import {Formik} from "formik";
import React, {useMemo, useState} from "react";
import lnMap from "../../languages/language-maps/shared-lang-map";
import {Card, Dropdown, Flex, Form} from "../../components";
import {circledIconStyle, ProfileSectionTitleStyle,} from "../../styles/mixins";
import {screens} from "../../styles/variables";
import {useTranslation} from "react-i18next";
import "styled-components/macro";
import {ButtonSmall} from "../../components/button";
import OverlayDropdownContainer from "../utils/overlay-dropdown";
import {ChevronRightIcon} from "../../components/icons";
import GridTableContainer from "../grid-table";
import MobileCargoTrackCardContainer from "../mobile/mobile-cargo-track-card";
import {useMyCargosLogic} from "../../hooks";

const cargoTrackIconStyle = `
position: absolute;
right: 7px;
transform: translateY(-50%);
top: 50%;
`;

function MyCargosContainer() {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(lnMap.profile_all);
  const { cargos, handlers } = useMyCargosLogic();
  const { handleSubmit } = handlers;
  const handleTabClick = (name) => {
    setCurrentTab(name);
  };

  const dropdownItems = useMemo(() => {
    return [
      {
        name: lnMap.profile_all,
        handler: handleTabClick(lnMap.profile_all),
      },
      {
        name: lnMap.profile_on_the_way,
        handler: lnMap.profile_on_the_way,
      },
      {name: lnMap.profile_completed, handler: lnMap.profile_completed},
    ];
  }, []);

  return (
    <div>
      <Flex
        align="center"
        direction="column"
        width="100%"
        css={`
          padding-right: 10px;

          @media ${screens.lg2} {
            flex-direction: row;
          }
        `}
      >
        <h1
          css={`
            display: none;
            ${ProfileSectionTitleStyle}

            @media ${screens.lg} {
              display: block;
            }
          `}
        >
          {t(lnMap.cargos)}
        </h1>
        <Formik
          initialValues={{
            track_no: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form
              css={`
                margin-top: 20px;
                width: 100%;

                @media ${screens.lg} {
                  margin-left: 60px;
                  margin-right: 15px;
                  width: 520px;
                }
                @media ${screens.lg2} {
                  margin-top: 0;
                }
              `}
              onSubmit={handleSubmit}
            >
              <Form.Section noMargin>
                <Form.InputBox>
                  <Form.Fieldset>
                    <Form.InputContainer
                      css={`
                        border: 0.5px solid rgba(226, 232, 245, 1);
                      `}
                    >
                      <Form.Input
                        id="track_no"
                        name="track_no"
                        placeholder={t(lnMap.profile_enter_track_number)}
                        onChange={handleChange}
                        value={values.track_no}
                      />
                    </Form.InputContainer>
                    <ButtonSmall
                      css={`
                        display: none;
                        ${cargoTrackIconStyle}

                        @media ${screens.lg} {
                          display: block;
                        }
                      `}
                    >
                      {t(lnMap.search)}
                    </ButtonSmall>
                    <button
                      css={`
                        ${cargoTrackIconStyle}
                      `}
                    >
                      <Dropdown.IconContainer
                        css={`
                          ${circledIconStyle}
                          font-size: 1.6rem;

                          @media ${screens.lg} {
                            display: none;
                          }
                        `}
                      >
                        <ChevronRightIcon size="18" />
                      </Dropdown.IconContainer>
                    </button>
                  </Form.Fieldset>
                </Form.InputBox>
              </Form.Section>
            </Form>
          )}
        </Formik>
        <div
          css={`
            display: none;

            @media ${screens.lg2} {
              display: block;
              margin-left: auto;
            }
          `}
        >
          <OverlayDropdownContainer items={dropdownItems} />
        </div>
      </Flex>
      <Card.TabContainer
        css={`
          margin-top: 28px;

          @media ${screens.lg2} {
            display: none;
          }
        `}
      >
        {dropdownItems.map(({ name }) => (
          <Card.TabButton
            key={name}
            onClick={() => handleTabClick(name)}
            active={name === currentTab}
            padding="17px 18px"
          >
            {t(lnMap[name])}
          </Card.TabButton>
        ))}
      </Card.TabContainer>
      <div
        css={`
          display: none;

          @media ${screens.lg} {
            display: block;
            width: 100%;
          }
        `}
      >
        {cargos?.length ? <GridTableContainer cargos={cargos} /> : null}
      </div>
      <div
        css={`
          width: 100%;

          @media ${screens.lg} {
            display: none;
          }

          & > * + * {
            margin-top: 15px;
          }
        `}
      >
        {cargos?.length ? (
          <MobileCargoTrackCardContainer cargos={cargos} />
        ) : null}
      </div>
    </div>
  );
}

export default MyCargosContainer;
