import Box from "@src/components/Box/box";
import Text from "@src/components/Text/text";
import Icon from "@src/components/Icon/icon";
import Image from "@src/components/Image/image";
import Link from "@src/components/Link/link";
import Button from "@src/components/Button/button";
import { useTheme } from "@src/theme/themeProvider";


interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',

      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = function FeedHeader() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x100}`,
        marginBottom: '32px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}

      >
        <Image src="https://github.com/leonardojaques.png" alt="imagem do perfil do Leonardo Jaques"
          styleSheet={{
            width: { xs: '64px', sm: '80px', md: '96px', lg: '112px', xl: '128px' },
            height: { xs: '64px', sm: '80px', md: '96px', lg: '112px', xl: '128px' },
            borderRadius: '50%'
          }}
        />
        <Box
          styleSheet={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px',
          }}

        >
          <Button
            fullWidth
            colorVariant="primary"
            size="xl"
            href="/"
          >
            newsletter
          </Button>
          <Button
            fullWidth
            colorVariant="neutral"
            size="xl"
            href="/"
          >
            Me paga um café!
          </Button>
        </Box>
        <Box
          styleSheet={{
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px',
          }}

        >
          <Button
            fullWidth
            colorVariant="primary"
            size="xs"
            href="/"
          >
            newsletter
          </Button>
          <Button
            fullWidth
            colorVariant="neutral"
            size="xs"
            href="/"
          >
            Me paga um café!
          </Button>
        </Box>

      </Box>
      <Button.Base href="https://github.com/leonardojaques">
        <Text tag="h1" variant="heading4">
          Leonardo Jaques
        </Text>
      </Button.Base>
      {/* <Link href="https://www.youtube.com/@LeonardoJaquesDev" >
        <Icon name="youtube" size="md" />
      </Link>
      <Icon name="twitter" />
      <Icon name="gitHub" />
      <Icon name="instagram" /> */}
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
