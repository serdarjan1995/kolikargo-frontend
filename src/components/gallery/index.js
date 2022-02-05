import React from "react";
import {
  Container,
  ImgContainer,
  Img,
  List,
  Item,
  Button,
  SmallButton,
  ThumbnailContainer,
  Thumbnail,
} from "./styles/gallery";

function Gallery({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Gallery.ImgContainer = function GalleryImgContainer({ children, ...rest }) {
  return <ImgContainer {...rest}>{children}</ImgContainer>;
};

Gallery.Img = function GalleryImg({ ...rest }) {
  return <Img {...rest} />;
};

Gallery.List = function GalleryList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Gallery.Item = function GalleryItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Gallery.Button = function GalleryButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Gallery.SmallButton = function GallerySmallButton({ children, ...rest }) {
  return <SmallButton {...rest}>{children}</SmallButton>;
};

Gallery.ThumbnailContainer = function GalleryThumbnailContainer({
  children,
  ...rest
}) {
  return <ThumbnailContainer {...rest}>{children}</ThumbnailContainer>;
};
Gallery.Thumbnail = function GalleryThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

export default Gallery;
