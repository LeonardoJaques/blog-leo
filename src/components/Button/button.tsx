import ButtonBase, { ButtonBaseProps } from "./buttonBase";
import React from "react";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { useTheme } from "@src/theme/themeProvider";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonsProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  styleSheet,
  fullWidth,
  colorVariant,
  variant,
  size,
  onClick,
  ...props

}: ButtonsProps) {
  const theme = useTheme();

  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
      {...props}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  )
};


Button.defaultProps = {
  fullWidth: false,
  size: "md",
  variant: "contained",
  colorVariant: 'primary',

};
Button.Base = ButtonBase;
