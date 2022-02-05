import React from "react";
import { Container, List, Item, AnchorLink } from "./styles/social-links";

function SocialLinks({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

SocialLinks.List = function SocialLinksList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

SocialLinks.Item = function SocialLinksItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

SocialLinks.AnchorLink = function SocialLinksAnchorLink({ children, ...rest }) {
  return <AnchorLink {...rest}>{children}</AnchorLink>;
};

export default SocialLinks;
