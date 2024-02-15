import React from "react";
import { StyleSheet } from "@src/theme/styleSheet";
import { BaseComponent } from "@src/theme/baseComponent";
import { useTheme } from "@src/theme/themeProvider";
import { ThemeTypographyVariants } from "@src/theme/theme";

interface TextProps {
  variant?: ThemeTypographyVariants;
  children?: React.ReactNode;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'a' | string;
  styleSheet?: StyleSheet;
}

const Text = React.forwardRef(({
  tag,
  styleSheet,
  variant,
  ...props }: TextProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      ref={ref}
      {...props}
    />
  )
}

);

Text.defaultProps = {
  tag: 'p',
  variant: 'body1',
}

Text.displayName = 'Text'; // Add display name


export default Text;
