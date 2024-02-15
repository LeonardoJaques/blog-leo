import Box from "@src/components/Box/box";
import Background from "./patterns/Background/background";
import Feed from "./patterns/Feed/feed";
import Footer from "./patterns/Footer/footer";
import Menu from "./patterns/Menu/menu";
import { useTheme } from "@src/theme/themeProvider";
import templatePageHOC from "@src/services/template/templatePageHOC";
import type { Post } from "@src/services/posts/postsService";

interface HomeScreenProps {
  posts: Post[];
}
function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      {/* <Menu /> */}
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts} />
      </Feed>
      <Footer />
    </Box>
  )
}

export default templatePageHOC(HomeScreen, {
  title: 'Home',
}); 
