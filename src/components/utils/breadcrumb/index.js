import React from "react";
import { useLocation } from "react-router";
import useBreadcrumb from "../../../hooks/useBreadcrumb";
import { ChevronRightIcon } from "../../icons";
import {
  ButtonLink,
  Container,
  IconContainer,
  Item,
  List,
  Nav,
} from "./styles/breadcrumb";

function Breadcrumb() {
  const paths = useBreadcrumb();
  const location = useLocation();

  return (
    <Container>
      <Nav>
        <List>
          {paths.map(({ name, path }, i, arr) => (
            <Item key={name}>
              <ButtonLink to={path} active={location.pathname === path}>
                {name}
              </ButtonLink>
              {i + 1 !== arr.length && (
                <IconContainer>
                  <ChevronRightIcon />
                </IconContainer>
              )}
            </Item>
          ))}
        </List>
      </Nav>
    </Container>
  );
}

export default Breadcrumb;
