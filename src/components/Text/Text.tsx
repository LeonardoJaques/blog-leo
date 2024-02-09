import React from "react";
import { StyleSheet } from "@src/theme/styleSheet";
import { BaseComponent } from "@src/theme/baseComponent";
import { useTheme } from "@src/theme/themeProvider";
import { ThemeTypographyVariants } from "@src/theme/theme";

interface TextProps {
  variant?: ThemeTypographyVariants;
  children?: React.ReactNode;
  tag?: 'p' | 'li' | 'h1' | 'h2'; 
  styleSheet?: StyleSheet;
}


export default function Text({
  styleSheet,
  variant,
  ...props }: TextProps) {
  const theme = useTheme(); 
  const textVariant = theme.typography.variants[variant];

  return (
  <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      {...props}
    />
  )
}


Text.defaultProps = {
  tag: 'p',
  variant: 'body1',
}
