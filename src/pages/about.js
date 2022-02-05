import React from "react";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import { Content, MainLayout } from "../components";
import lnMap from "../languages/language-maps/shared-lang-map";
import { screens } from "../styles/variables";

function About() {
  const { t } = useTranslation();

  return (
    <MainLayout
      css={`
        padding-bottom: 50px;
        padding-top: 25px;

        @media ${screens.lg} {
          padding-bottom: 100px;
          padding-top: 53px;
        }
      `}
    >
      <Content>
        <Content.Article>
          <Content.Title>{t(lnMap.footer_link_about)}</Content.Title>
          <div
            css={`
              & > * + * {
                margin-top: 37px;
              }
            `}
          >
            <Content.Section>
              <Content.Text>
                Haec et tu ita posuisti, et verba vestra sunt. Contemnit enim
                disserendi elegantiam, confuse loquitur. Bona autem corporis
                huic sunt, quod posterius posui, similiora. Quod cum ita sit,
                perspicuum est omnis rectas res atque laudabilis eo referri, ut
                cum voluptate vivatur. Quasi vero aut concedatur in omnibus
                stultis aeque magna esse vitia, et eadem inbecillitate et
                inconstantia L. Levatio igitur vitiorum magna fit in iis, qui
                habent ad virtutem progressionis aliquantum. Tertium autem
                omnibus aut maximis rebus iis, quae secundum naturam sint,
                fruentem vivere. Materiam vero rerum et copiam apud hos exilem,
                apud illos uberrimam reperiemus. Atque his de rebus et splendida
                est eorum et illustris oratio.
              </Content.Text>
            </Content.Section>
            <Content.Section>
              <Content.Text>
                Haec et tu ita posuisti, et verba vestra sunt. Contemnit enim
                disserendi elegantiam, confuse loquitur. Bona autem corporis
                huic sunt, quod posterius posui, similiora. Quod cum ita sit,
                perspicuum est omnis rectas res atque laudabilis eo referri, ut
                cum voluptate vivatur. Quasi vero aut concedatur in omnibus
                stultis aeque magna esse vitia, et eadem inbecillitate et
                inconstantia L. Levatio igitur vitiorum magna fit in iis, qui
                habent ad virtutem progressionis aliquantum. Tertium autem
                omnibus aut maximis rebus iis, quae secundum naturam sint,
                fruentem vivere. Materiam vero rerum et copiam apud hos exilem,
                apud illos uberrimam reperiemus. Atque his de rebus et splendida
                est eorum et illustris oratio.
              </Content.Text>
            </Content.Section>
            <Content.Section>
              <Content.Text>
                Haec et tu ita posuisti, et verba vestra sunt. Contemnit enim
                disserendi elegantiam, confuse loquitur. Bona autem corporis
                huic sunt, quod posterius posui, similiora. Quod cum ita sit,
                perspicuum est omnis rectas res atque laudabilis eo referri, ut
                cum voluptate vivatur. Quasi vero aut concedatur in omnibus
                stultis aeque magna esse vitia, et eadem inbecillitate et
                inconstantia L. Levatio igitur vitiorum magna fit in iis, qui
                habent ad virtutem progressionis aliquantum. Tertium autem
                omnibus aut maximis rebus iis, quae secundum naturam sint,
                fruentem vivere. Materiam vero rerum et copiam apud hos exilem,
                apud illos uberrimam reperiemus. Atque his de rebus et splendida
                est eorum et illustris oratio.
              </Content.Text>
            </Content.Section>
          </div>
        </Content.Article>
      </Content>
    </MainLayout>
  );
}

export default About;
