import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  // Title,
  // SubTitle,
  // Text,
  // Input,
  // Button,
  // Icon,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

// Header.Title = function HeaderTitle({ children, ...restProps }) {
//   return <Title {...restProps}>{children}</Title>;
// };

// Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
//   return <SubTitle {...restProps}>{children}</SubTitle>;
// };

// Header.Text = function HeaderText({ children, ...restProps }) {
//   return <Text {...restProps}>{children}</Text>;
// };

// Header.Input = function HeaderInput({ children, ...restProps }) {
//   return <Input {...restProps}>{children}</Input>;
// };

// Header.Button = function HeaderButton({ children, ...restProps }) {
//   return <Button {...restProps}>{children}</Button>;
// };

// Header.Icon = function HeaderIcon({ children, ...restProps }) {
//   return <Icon {...restProps}>{children}</Icon>;
// };
