import React from "react";
import { Blog } from "../components";
import MockImg from "../assets/mock/mock-image.jpg";
import lnMap from "../languages/language-maps/home-lang-map";
import { useTranslation } from "react-i18next";
import "styled-components/macro";
import * as ROUTES from "../constants/routes";

const cards = [
  {
    title: "Lorem ipsum",
    date: "21.08.201",
    label: "discount",
    img: MockImg,
    path: `${ROUTES.BLOG}/5`,
  },
  {
    title: "Lorem ipsum",
    date: "21.08.201",
    label: "discount",
    img: MockImg,
    path: `${ROUTES.BLOG}/5`,
  },
  {
    title: "Lorem ipsum",
    date: "21.08.201",
    label: "discount",
    img: MockImg,
    path: `${ROUTES.BLOG}/5`,
  },
  {
    title: "Lorem ipsum",
    date: "21.08.201",
    label: "discount",
    img: MockImg,
    path: `${ROUTES.BLOG}/5`,
  },
];

export default function BlogContainer({title}) {
  const { t } = useTranslation();

  return (
    <Blog.Background>
      <Blog>
        <Blog.Title>{title}</Blog.Title>
        <Blog.Subtitle>{t(lnMap.blog_text)}</Blog.Subtitle>
        <Blog.CardList>
          {cards.map(({ title, date, label, img,path }, i) => (
            <Blog.Card key={i}>
              <Blog.CardLink to={path}>
                <Blog.ImgContainer>
                  <Blog.Img src={img} alt="" />
                  <Blog.Label>{label}</Blog.Label>
                </Blog.ImgContainer>
                <Blog.Content>
                  <Blog.Text>{title}</Blog.Text>
                  <Blog.TextSmall>{date}</Blog.TextSmall>
                </Blog.Content>
              </Blog.CardLink>
            </Blog.Card>
          ))}
          <Blog.Box>
            <Blog.Button></Blog.Button>
            <Blog.Button></Blog.Button>
          </Blog.Box>
        </Blog.CardList>
      </Blog>
    </Blog.Background>
  );
}
