import Box from "@src/components/Box/box";
import Text from "@src/components/Text/text";
import Icon from "@src/components/Icon/icon";
import Image from "@src/components/Image/image";
import Link from "@src/components/Link/link";
import Button from "@src/components/Button/button";


interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
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
      <Button>
        Me paga um café!
      </Button>
      <Button.Base href="https://github.com/leonardojaques">
        <Image src="https://github.com/leonardojaques.png" alt="imagem do perfil do Leonardo Jaques"
          styleSheet={{
            width: '128px',
            height: '128px',
            borderRadius: '50%'
          }}
        />
      </Button.Base>
      <Link href="https://www.youtube.com/@LeonardoJaquesDev" >
        <Icon name="youtube" size="md" />
      </Link>
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
