import Box from "@src/components/Box/box";
import Button from "@src/components/Button/button";
import Icon from "@src/components/Icon/icon";
import Text from "@src/components/Text/text";
import { useTheme } from "@src/theme/themeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize = "40px";
  const baseStyle = {
    width: baseSize,
    height: baseSize,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <Box
      styleSheet={{
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        flexDirection: 'row',
        paddingHorizontal: '16px',
        paddingVertical: '20px',
        color: theme.colors.neutral.x000,

      }}
    >
      <Button.Base
        styleSheet={{
          ...baseStyle,
          backgroundColor: theme.colors.primary.x500,
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Text>
          L-J
        </Text>
      </Button.Base>
      <Button.Base
        styleSheet={{
          ...baseStyle,
          hover: {
            backgroundColor: theme.colors.neutral.x400,
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600,
          },
          backgroundColor: theme.colors.neutral.x500,
        }}
      >
        <Icon name="menu" size="md" />
      </Button.Base>
    </Box>
  )
}
