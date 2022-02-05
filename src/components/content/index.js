import React from "react";
import {
  Container,
  Section,
  Article,
  Title,
  Text,
  ImgContainer,
  Img,
} from "./styles/content";

function Content({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Content.Title = function ContentTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Content.Text = function ContentText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Content.Section = function ContentSection({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
};

Content.Article = function ContentArticle({ children, ...rest }) {
  return <Article {...rest}>{children}</Article>;
};

Content.ImgContainer = function ContentImgContainer({ children, ...rest }) {
  return <ImgContainer {...rest}>{children}</ImgContainer>;
};

Content.Img = function ContentImg({ ...rest }) {
  return <Img {...rest} />;
};

export default Content;
