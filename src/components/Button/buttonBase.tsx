import React, { useRef } from "react";
import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "../Text/text";
import { useRipple } from 'react-use-ripple'
import { StyleSheet } from "@src/theme/styleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text) <any>``

export interface ButtonBaseProps {
  href?: string,
  children?: React.ReactNode
  textVariant?: ThemeTypographyVariants,
  styleSheet?: StyleSheet
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void

}

export default function ButtonBase({
  href,
  textVariant,
  children,
  styleSheet,
  ...props
}: ButtonBaseProps) {
  const ref = useRef()
  const isLink = !!href
  const tag = isLink ? 'a' : 'button';
  const router = useRouter()
  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255,255,255,0.7)',
  })


  return (
    <StyledButton
      ref={ref}
      tag={tag}
      href={href}
      {...props}
      textVariant={textVariant}
      styleSheet={{
        cursor: 'pointer',
        outline: '0',
        backgroundColor: 'transparent',
        color: 'inherit',
        border: '0',
        textDecoration: 'none',
        ...styleSheet
      }}
      onClick={(event: any) => {
        isLink && event.preventDefault()
        isLink && router.push(href)
        !isLink && props.onClick && props.onClick(event)
      }}
    >
      {children}
    </StyledButton>
  )

}
