import React from 'react';
import NextLink from 'next/link';
import Text from "@src/components/Text/text";
import { StyleSheet } from '@src/theme/styleSheet';
import { ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from '@src/theme/themeProvider';

interface LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}
const Link = React.forwardRef(({
  children,
  href,
  target,
  styleSheet,
  colorVariant,
  colorVariantEnabled,
  ...props
}: LinkProps, ref): React.JSX.Element => {

  const isIExternalLink = href.startsWith('http') || href.startsWith('https') || href.startsWith('www');

  const theme = useTheme();
  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600,
    }
  };

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.hover.color,
        },
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        },
      },
      ...styleSheet,
    },
    legacyBehavior: true,
    ...props,
  }
  if (isIExternalLink) return (
    <Text
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Text {...props} />
    </NextLink>
  )
})

Link.defaultProps = {
  colorVariant: 'primary',
  variant: 'body1',
  colorVariantEnabled: true,
}

Link.displayName = 'Link';
export default Link;

