import React from "react";
import styled from "styled-components";
import { StyleSheet } from '@src/theme/styleSheet';
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
  ref?: any
}

interface BaseComponentProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props, ref) => {
  return (
    <StyledBaseComponent ref={ref} {...props} />
  );
});

BaseComponent.displayName = "BaseComponent";

BaseComponent.defaultProps = {
  styleSheet: {},
};
