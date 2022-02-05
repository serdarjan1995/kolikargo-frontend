import React from "react";
import { Breadcrumb, Content, MainLayout, SocialLinks } from "../components";
import MockImg from "../assets/mock/mock-blog-photo.jpg";
import "styled-components/macro";
import {
  FacebookIcon,
  InstagramIconLarge,
  TwitterIconLarge,
  VKIcon,
} from "../components/icons";
import { screens } from "../styles/variables";
import { BlogContainer } from "../containers";
import lnMap from "../languages/language-maps/shared-lang-map";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();
  const socialLinks = [
    { href: "#", icon: <FacebookIcon /> },
    { href: "#", icon: <TwitterIconLarge /> },
    { href: "#", icon: <InstagramIconLarge /> },
    { href: "#", icon: <VKIcon /> },
  ];

  return (
    <>
      <MainLayout
        css={`
          padding-bottom: 60px;

          @media ${screens.lg} {
            padding-bottom: 99px;
          }
        `}
      >
        <div
          css={`
            margin-top: 17px;
          `}
        >
          <Breadcrumb />
        </div>
        <Content>
          <Content.Article>
            <Content.Title>
              The true beauty of music is that it connects people
            </Content.Title>
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
              <Content.ImgContainer>
                <Content.Img src={MockImg} alt="" />
              </Content.ImgContainer>
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
          </Content.Article>
        </Content>
        <SocialLinks>
          <SocialLinks.List>
            {socialLinks.map(({ href, icon }) => (
              <SocialLinks.Item>
                <SocialLinks.AnchorLink href={href}>
                  {icon}
                </SocialLinks.AnchorLink>
              </SocialLinks.Item>
            ))}
          </SocialLinks.List>
        </SocialLinks>
      </MainLayout>
      <BlogContainer title={t(lnMap.blog_similar_blogs)} />
    </>
  );
}

export default Blog;
