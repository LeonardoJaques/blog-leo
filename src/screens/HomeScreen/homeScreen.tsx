import Box from "@src/components/Box/box";
import Background from "./patterns/Background/background";
import Feed from "./patterns/Feed/feed";
import Footer from "./patterns/Footer/footer";
import Menu from "./patterns/Menu/menu";
import Text from "@src/components/Text/text";
import { useTheme } from "@src/theme/themeProvider";
import Link from "@src/components/Link/link";



export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x100,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Link colorVariant="negative" href="/about" >
        sobre
      </Link>
      <Link href="https://www.google.com" >
        google
      </Link>
      

      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h1" variant="display1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  )
}
