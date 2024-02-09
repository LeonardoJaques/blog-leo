import Box from "@src/components/Box/box";
import Text from "@src/components/Text/text";
import Icon from "@src/components/icon/icon";



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
    <Box
      styleSheet={{
        color: 'darkred'
      }}
    >
      <Icon name="youtube"/>
      <Icon name="twitter" />
      <Icon name="gitHub" />
      <Icon name="instagram" />
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
