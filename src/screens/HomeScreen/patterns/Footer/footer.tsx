import Box from "@src/components/Box/box";
import Text from "@src/components/Text/text";
import { useTheme } from "@src/theme/themeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        width: '100%',
        height: '120px',
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        alignItems: 'center',
        justifyContent: 'center',

        // lib @displaykit/responsive_styles"
        paddingVertical: '24px',
        paddingHorizontal: '24px',
        textAlign: 'center',
      }}
    >
      <Text variant="body2">
        Feito por ☕ Leonardo Jaques
      </Text>
    </Box>
  )
}
