import React from "react";
import {
  Container,
  Title,
  Subtitle,
  CardList,
  Card,
  Label,
  Content,
  Text,
  TextSmall,
  Box,
  Button,
  Background,
  Img,
  IconContainer,
  ImgContainer,
  CardLink,
} from "./styles/blog";

function Blog({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default Blog;

Blog.Title = function BlogTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Blog.Subtitle = function BlogSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Blog.CardList = function BlogCardList({ children, ...rest }) {
  return <CardList {...rest}>{children}</CardList>;
};

Blog.Card = function BlogCard({ children, ...rest }) {
  return <Card {...rest}>{children}</Card>;
};

Blog.CardLink = function BlogCardLink({ children, ...rest }) {
  return <CardLink {...rest}>{children}</CardLink>;
};

Blog.Label = function BlogLabel({ children, ...rest }) {
  return <Label {...rest}>{children}</Label>;
};

Blog.Content = function BlogContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Blog.Text = function BlogText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Blog.TextSmall = function BlogTitle({ children, ...rest }) {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

Blog.Box = function BlogBox({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
};

Blog.Background = function BlogBackground({ children, ...rest }) {
  return <Background {...rest}>{children}</Background>;
};

Blog.Button = function BlogButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Blog.ImgContainer = function BlogImgContainer({ children, ...rest }) {
  return <ImgContainer {...rest}>{children}</ImgContainer>;
};

Blog.Img = function BlogImg({ src, alt, ...rest }) {
  return <Img src={src} alt={alt} {...rest} />;
};

Blog.IconContainer = function BlogIconContainer({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};
