import Box from "@src/components/Box/box";
import Text from "@src/components/Text/text";
import Image from "@src/components/Image/image";
import Button from "@src/components/Button/button";
import { useTheme } from "@src/theme/themeProvider";
import { useTemplateConfig } from "@src/services/template/templateConfigContext";
import Link from "@src/components/Link/link";
import Icon from "@src/components/Icon/icon";
import type { Post } from "@src/services/posts/postsService";
import { FeedPost } from "./patterns/feedPost";


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
  const templateConfig = useTemplateConfig();
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

        <Image src={templateConfig.personal.avatar} alt={templateConfig.personal.avatarAlt}
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
          {templateConfig?.personal?.name}
        </Text>
      </Button.Base>

      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: '4px',
          marginBottom: '5px',
        }}
      >

        {Object.keys(templateConfig.personal.socialNetworks).map((key) => {
          const socialNetwork = templateConfig.personal.socialNetworks[key];
          if (socialNetwork) {
            return (
              <Link
                key={key}
                target="_blank"
                href={socialNetwork}
              >
                <Icon name={key as any} />
              </Link>
            )
          }
          return null;

        })}
      </Box>
    </Box>
  )
}

interface FeedPostsProps {
  posts: Post[];

}
Feed.Posts = function FeedPosts({ posts }: FeedPostsProps) {
  return (
    <Box>
      {posts.map(({ title, slug, metadata, content }) => {
        const { date, excerpt, tags, url } = metadata
        return (
          <FeedPost
            key={slug}
            title={title}
            date={date}
            excerpt={excerpt}
            tags={tags}
            url={url}
          />
        )
      })}
    </Box>
  )
}
