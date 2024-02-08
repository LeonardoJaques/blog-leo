import theme from "@src/theme/theme";
import Box from "../Box/box";
import { StyleSheet } from "@src/theme/styleSheet";
import { BaseComponent } from "@src/theme/baseComponent";

interface TextProps {
  variant?: 'display1' | 'display2' | 'display3' | 'display4' | 'headline' | 'title' | 'subheading' | 'body1' | 'body2' | 'caption' | 'button';
  children?: React.ReactNode;
  tag?: 'p' | 'li' | 'h1' | string; 
  styleSheet?: StyleSheet;
}


export default function Text({
  styleSheet,
  variant,
  ...props }: TextProps) {
  const textVariant = theme.typography.variants?.[variant];
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
  variant: 'body2',
}
