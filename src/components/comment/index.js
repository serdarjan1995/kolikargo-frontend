import React from "react";
import {
  Container,
  Avatar,
  AvatarContainer,
  List,
  Button,
  Gallery,
  GalleryImg,
  GalleryImgContainer,
  IconContainer,
  InputContainer,
  Item,
  StarBox,
  StarContainer,
  Text,
  TextSmall,
  Title,
  Username,
  CommentText,
  RadioStar,
  StarLabel,
  Box,
  ButtonSmall,
  TextArea
} from "./styles/comment";

function Comment({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Comment.AvatarContainer = function CommentAvatarContainer({
  children,
  ...rest
}) {
  return <AvatarContainer {...rest}>{children}</AvatarContainer>;
};

Comment.Avatar = function CommentAvatar({ ...rest }) {
  return <Avatar {...rest} />;
};

Comment.Box = function CommentBox({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
};

Comment.Gallery = function CommentGallery({ children, ...rest }) {
  return <Gallery {...rest}>{children}</Gallery>;
};

Comment.GalleryImg = function CommentGalleryImg({ ...rest }) {
  return <GalleryImg {...rest} />;
};

Comment.GalleryImgContainer = function CommentGalleryImgContainer({
  children,
  ...rest
}) {
  return <GalleryImgContainer {...rest}>{children}</GalleryImgContainer>;
};

Comment.IconContainer = function CommentIconContainer({ children, ...rest }) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Comment.InputContainer = function CommentInputContainer({ children, ...rest }) {
  return <InputContainer {...rest}>{children}</InputContainer>;
};

Comment.TextArea = function CommentTextArea({ children, ...rest }) {
  return <TextArea {...rest}>{children}</TextArea>;
};

Comment.List = function CommentList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Comment.Item = function CommentItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Comment.RadioStar = function CommentRadioStar({ ...rest }) {
  return <RadioStar type="radio" {...rest} />;
};

Comment.StarBox = function CommentStarBox({ children, ...rest }) {
  return <StarBox {...rest}>{children}</StarBox>;
};

Comment.StarContainer = function CommentStarContainer({ children, ...rest }) {
  return <StarContainer {...rest}>{children}</StarContainer>;
};

Comment.StarLabel = function CommentStarLabel({ children, ...rest }) {
  return <StarLabel {...rest}>{children}</StarLabel>;
};

Comment.Text = function CommentText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Comment.TextSmall = function CommentTextSmall({ children, ...rest }) {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

Comment.Title = function CommentTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Comment.Username = function CommentUsername({ children, ...rest }) {
  return <Username {...rest}>{children}</Username>;
};

Comment.Button = function CommentButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Comment.ButtonSmall = function CommentButtonSmall({ children, ...rest }) {
  return <ButtonSmall {...rest}>{children}</ButtonSmall>;
};

Comment.CommentText = function CommentCommentText({ children, ...rest }) {
  return <CommentText {...rest}>{children}</CommentText>;
};

export default Comment;
