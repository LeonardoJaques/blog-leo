import { Breakpoints } from '@displaykit/responsive_styles'

// Generic type for responsive properties
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  fontFamily: ResponsiveProperty<string> | string;
  fontSize: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;


}
