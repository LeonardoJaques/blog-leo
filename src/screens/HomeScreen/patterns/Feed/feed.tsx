import Box from "@src/components/Box/box";
import Text from "@src/components/Text/Text";



interface FeedProps { 
  children: React.ReactNode;
}

export default function Feed({ children}: FeedProps) { 
  return (
    <Box>
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = function FeedHeader() {
  return (
    <Box>
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = function FeedPosts() {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
