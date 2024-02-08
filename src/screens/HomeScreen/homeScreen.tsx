import Box from "@src/components/Box/box";
import Text from "@src/components/Text/Text";
import Background from "./patterns/Background/background";
import Menu from "./patterns/Menu/menu";
import Feed from "./patterns/Feed/feed";
import Footer from "./patterns/Footer/footer";

export default function HomeScreen() { 
  return (
    <Box
      tag={"main"}
      styleSheet={{
        backgroundColor: "grey",
        flex: 1,
      }}
      >
      <Background />
      <Menu />
      <Feed>
        <Feed.hearder />
          <Text tag="h2" variant="display1">
            Últimas atualizações
          </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  )
}
