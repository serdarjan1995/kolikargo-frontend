import React from "react";
import "styled-components/macro";
import { useTranslation } from "react-i18next";
import { Feature2, Flex } from "../../components";
import lnMap from "../../languages/language-maps/home-lang-map";
import Cargo1SVG from "../../assets/home/img/cargo-1.svg";
import Cargo2SVG from "../../assets/home/img/cargo-2.svg";
import Cargo3SVG from "../../assets/home/img/cargo-3.svg";
import { ReactComponent as DashLineSVG } from "../../assets/home/img/dash-line.svg";
import { ReactComponent as DashLineSmallSVG } from "../../assets/home/img/dash-line-small.svg";

function FeatureContainer2() {
  const { t } = useTranslation();
  return (
    <Feature2.Background>
      <Feature2>
        <Flex>
          <div
            css={`
              margin: auto;
            `}
          >
            <Feature2.Title>{t(lnMap.hero_presentation_title2)}</Feature2.Title>
            <Feature2.TitleAlt>
              {t(lnMap.hero_presentation_text2)}
            </Feature2.TitleAlt>
          </div>
        </Flex>
        <Feature2.List>
          <Feature2.Item>
            <div>
              <Feature2.Img src={Cargo1SVG} alt="" />
              <Feature2.DashLineContainer>
                <DashLineSVG />
              </Feature2.DashLineContainer>
            </div>
            <Feature2.TitleSmall>
              {t(lnMap.hero_presentation_content2_title1)}
            </Feature2.TitleSmall>
            <Feature2.Text>
              {t(lnMap.hero_presentation_content2_text1)}
            </Feature2.Text>
            <Feature2.DashLineSmallContainer>
              <DashLineSmallSVG />
            </Feature2.DashLineSmallContainer>
          </Feature2.Item>
          <Feature2.Item>
            <div>
              <Feature2.Img src={Cargo2SVG} alt="" />
            </div>
            <Feature2.TitleSmall>
              {t(lnMap.hero_presentation_content2_title2)}
            </Feature2.TitleSmall>
            <Feature2.Text>
              {t(lnMap.hero_presentation_content2_text2)}
            </Feature2.Text>
            <Feature2.DashLineSmallContainer>
              <DashLineSmallSVG />
            </Feature2.DashLineSmallContainer> 
          </Feature2.Item>
          <Feature2.Item>
            <div>
              <Feature2.Img src={Cargo3SVG} alt="" />
            </div>
            <Feature2.TitleSmall>
              {t(lnMap.hero_presentation_content2_title3)}
            </Feature2.TitleSmall>
            <Feature2.Text>
              {t(lnMap.hero_presentation_content2_text3)}
            </Feature2.Text>
          </Feature2.Item>
        </Feature2.List>
      </Feature2>
    </Feature2.Background>
  );
}

export default FeatureContainer2;
