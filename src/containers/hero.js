import React from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { Hero, Flex, Section } from "../components";
import { screens, sizes } from "../styles/variables";
import lnMap from "../languages/language-maps/home-lang-map";
import WarehouseSVG from "../assets/home/img/warehouse-green-new.svg";
import CargoPickerContainer from "./utils/cargo-picker";
import * as ROUTES from "../constants/routes"

function HeroContainer() {
  const { t } = useTranslation();

  return (
    <div>
      <Section variant="common2">
        <Hero>
          <div
            css={`
              margin: auto;
              max-width: ${sizes.sectionMaxWidth};
            `}
          >
            <Flex
              align="center"
              justify="space-between"
              direction="column"
              css={`
                padding: 27px;
                @media ${screens.lg} {
                  flex-direction: row;
                }
              `}
            >
              <Hero.ContentWrapper>
                <Hero.Title>
                  <span>
                    {t(lnMap.hero_title_part1)}
                    <br
                      css={`
                        display: none;
                        @media ${screens.lg} {
                          display: inline-block;
                        }
                      `}
                    />
                  </span>{" "}
                  <span
                    css={`
                      @media ${screens.lg} {
                        white-space: pre;
                      }
                    `}
                  >
                    {t(lnMap.hero_title_part2)}
                  </span>
                </Hero.Title>
                <Hero.Text>{t(lnMap.hero_text)}</Hero.Text>
                <Hero.ButtonLink to={ROUTES.ALL_COMPANIES}>{t(lnMap.hero_btn)}</Hero.ButtonLink>
              </Hero.ContentWrapper>
              <div
                css={`
                  margin-top: 5rem;
                `}
              >
                <img src={WarehouseSVG} alt="warehouse" />
              </div>
            </Flex>
            <div
              css={`
                padding: 4px;
                @media ${screens.lg} {
                  padding-left: 27px;
                  padding-right: 27px;
                }
              `}
            >
              <div
                css={`
                  margin-top: 66px;
                  @media ${screens.lg} {
                    left: 50%;
                    margin-top: 0;
                    position: absolute;
                    transform: translateX(-50%);
                    top: 82%;
                    width: 100%;
                  }
                `}
              >
                <CargoPickerContainer />
              </div>
            </div>
          </div>
        </Hero>
      </Section>
    </div>
  );
}

export default HeroContainer;
