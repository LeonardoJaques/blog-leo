import { parseStyleSheet } from "@displaykit/responsive_styles"
import { styled } from "styled-components"
import { StyleSheet } from "./StyleSheet";


interface StyledBaseComponent {
  styleSheet: StyleSheet
}

export const BaseComponent = (props) => { 
  const StyledBaseComponent = styled.div<StyledBaseComponent>`
  ${({styleSheet}) => parseStyleSheet(styleSheet) }
  `
  return (
    <StyledBaseComponent {...props} />

  )
}

BaseComponent.defaultProps = {
  styleSheet: {}
}
