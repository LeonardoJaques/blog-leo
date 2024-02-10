import { BaseComponent } from "@src/theme/baseComponent";
import * as icons from "./svgs/_index";
import { StyleSheet } from "@src/theme/styleSheet";

const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px',
} as const;

interface IconProps {
  name?: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

export default function Icon({ name, size, styleSheet, ...props }: IconProps) {
  const CurrentIcon = icons[name] || icons._default_icon;
  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
        ...styleSheet,
      }}
      viewBox="0 0 24 24"
      color="inherit"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  )
}

Icon.defaultProps = {
  name: '_default_icon',
  size: 'md',
} 
