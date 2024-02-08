import { parseStyleSheet } from "@displaykit/responsive_styles";
import React from "react";
import styled from "styled-components";
import { StyleSheet } from "./styleSheet";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
}
const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props : any) => {
  return (
    <StyledBaseComponent {...props} />
  )
}
BaseComponent.defaultProps = {
  styleSheet: {},
}
