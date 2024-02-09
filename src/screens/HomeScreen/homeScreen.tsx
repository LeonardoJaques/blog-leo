import Box from "@src/components/Box/box";
import Background from "./patterns/Background/background";
import Feed from "./patterns/Feed/feed";
import Footer from "./patterns/Footer/footer";
import Menu from "./patterns/Menu/menu";
import Text from "@src/components/Text/Text";


export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: 'grey',
        flex: 1,
        alignItems: 'center',
      }}
    >
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
