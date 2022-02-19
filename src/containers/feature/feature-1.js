import React from "react";
import { Feature, Flex } from "../../components";
import Advantage1IMG from "../../assets/home/img/advantage-1.svg";
import Advantage2IMG from "../../assets/home/img/advantage-2.svg";
import Advantage3IMG from "../../assets/home/img/advantage-3.svg";
import { useTranslation } from "react-i18next";
import lnMap from "../../languages/language-maps/home-lang-map";
import "styled-components/macro";

function FeatureContainer1() {
  const { t } = useTranslation();

  const svgSize = 90;

  return (
    <Feature>
      <Flex>
        <div
          css={`
            margin: auto;
          `}
        >
          <Feature.Title>{t(lnMap.hero_presentation_title1)}</Feature.Title>
          <Feature.TitleAlt>
            {t(lnMap.hero_presentation_text1)}
          </Feature.TitleAlt>
        </div>
      </Flex>
      <Feature.List>
        <Feature.Item>
          <div>
            <Feature.Img src={Advantage1IMG} alt="" width={svgSize} height={svgSize} />
          </div>
          <Feature.TitleSmall>
            {t(lnMap.hero_presentation_content1_title1)}
          </Feature.TitleSmall>
          <Feature.Text>
            {t(lnMap.hero_presentation_content1_text1)}
          </Feature.Text>
        </Feature.Item>
        <Feature.Item>
          <div>
            <Feature.Img src={Advantage2IMG} alt="" width={svgSize} height={svgSize}/>
          </div>
          <Feature.TitleSmall>
            {t(lnMap.hero_presentation_content1_title2)}
          </Feature.TitleSmall>
          <Feature.Text>
            {t(lnMap.hero_presentation_content1_text2)}
          </Feature.Text>
        </Feature.Item>
        <Feature.Item>
          <div>
            <Feature.Img src={Advantage3IMG} alt=""  width={svgSize} height={svgSize} />
          </div>
          <Feature.TitleSmall>
            {t(lnMap.hero_presentation_content1_title3)}
          </Feature.TitleSmall>
          <Feature.Text>
            {t(lnMap.hero_presentation_content1_text3)}
          </Feature.Text>
        </Feature.Item>
      </Feature.List>
    </Feature>
  );
}

export default FeatureContainer1;
