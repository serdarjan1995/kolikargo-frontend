import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Footer, Form as CustomForm } from "../components";
import lnMap from "../languages/language-maps/shared-lang-map";
import Logo from "../assets/logo.svg";
import "styled-components/macro";
import { IconButton } from "../components/button";
import {
  InstagramIcon,
  RightArrowIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../components/icons";
import { screens } from "../styles/variables";
import * as ROUTES from "../constants/routes";
import { Form, Formik } from "formik";
import * as Yup from "yup";

function FooterContainer() {
  const { t } = useTranslation();
  const validationSchema = useMemo(
    () =>
      Yup.object({
        email: Yup.string()
          .email(t(lnMap.form_warn_email_invalid_format))
          .required(t(lnMap.form_warn_empty)),
      }),
    [t]
  );

  return (
    <div
      css={`
        @media ${screens.md} {
          border-top: 2px solid #e6e8ec;
        }
      `}
    >
      <Footer>
        <Footer.Row>
          <Footer.LeftCol>
            <Footer.ImgContainer>
              <Footer.Logo src={Logo} alt="Kolikargo" />
            </Footer.ImgContainer>
            <Footer.SocialContainer>
              <Footer.SocialLink>
                <InstagramIcon />
              </Footer.SocialLink>
              <Footer.SocialLink>
                <TwitterIcon />
              </Footer.SocialLink>
              <Footer.SocialLink>
                <YouTubeIcon />
              </Footer.SocialLink>
            </Footer.SocialContainer>
            <Footer.Copyright>{t(lnMap.footer_copyright)}</Footer.Copyright>
          </Footer.LeftCol>
          <Footer.RightCol>
            <Footer.Col>
              <Footer.ListContainer
                css={`
                  margin-right: 55px;
                `}
              >
                <Footer.ListTitle>
                  {t(lnMap.footer_link_title1)}
                </Footer.ListTitle>
                <Footer.List>
                  <Footer.Item>
                    <Footer.ButtonLink to={ROUTES.ABOUT}>
                      {t(lnMap.footer_link_about)}
                    </Footer.ButtonLink>
                  </Footer.Item>
                  <Footer.Item>
                    <Footer.ButtonLink to={ROUTES.ABOUT}>
                      {t(lnMap.footer_link_services)}
                    </Footer.ButtonLink>
                  </Footer.Item>
                  <Footer.Item>
                    <Footer.ButtonLink to={ROUTES.BLOG}>
                      {t(lnMap.footer_link_blog)}
                    </Footer.ButtonLink>
                  </Footer.Item>
                </Footer.List>
              </Footer.ListContainer>
              <Footer.ListContainer>
                <Footer.ListTitle>
                  {t(lnMap.footer_link_title2)}
                </Footer.ListTitle>
                <Footer.List>
                  <Footer.Item>
                    <Footer.ButtonLink to={ROUTES.ABOUT}>
                      {t(lnMap.footer_link_policy)}
                    </Footer.ButtonLink>
                  </Footer.Item>
                  <Footer.Item>
                    <Footer.ButtonLink to={ROUTES.ALL_COMPANIES}>
                      {t(lnMap.footer_link_companies)}
                    </Footer.ButtonLink>
                  </Footer.Item>
                  <Footer.Item>
                    <Footer.ButtonLink to={ROUTES.FAQ}>
                      {t(lnMap.footer_link_faq)}
                    </Footer.ButtonLink>
                  </Footer.Item>
                </Footer.List>
              </Footer.ListContainer>
            </Footer.Col>
            <Footer.SubscriptionContainer>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={validationSchema}
              >
                {({handleChange, errors }) => (
                  <Form>
                    <Footer.InputTitle>
                      {t(lnMap.footer_subscription_title)} 🔥
                    </Footer.InputTitle>
                    <Footer.InputContainer>
                      <Footer.Input
                        name="email"
                        type="email"
                        placeholder={t(lnMap.footer_subscription_input)}
                        onChange={handleChange}
                      />
                      <IconButton
                        css={`
                          font-size: 1rem;
                        `}
                      >
                        <RightArrowIcon />
                      </IconButton>
                    </Footer.InputContainer>
                    {errors?.email && (
                      <CustomForm.Warn>{errors.email}</CustomForm.Warn>
                    )}
                  </Form>
                )}
              </Formik>
            </Footer.SubscriptionContainer>
          </Footer.RightCol>
          <Footer.HR />
          <Footer.CopyrightMobile>
            {t(lnMap.footer_copyright)}
          </Footer.CopyrightMobile>
        </Footer.Row>
      </Footer>
    </div>
  );
}

export default FooterContainer;
