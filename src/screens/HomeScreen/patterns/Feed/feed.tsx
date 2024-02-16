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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageNext from 'next/image'
import ButtonBase from "@src/components/Button/buttonBase";






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
        paddingTop: '40px',
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
  const notify = () => toast(`Obrigado por me comprar um café`, {
    position: "top-center",
    autoClose: 5000,
    style: {
      backgroundColor: theme.colors.primary.x500,
      color: theme.colors.neutral.x000,
      fontWeight: 'bold',
      fontSize: '16px',
      borderRadius: '8px',
      boxShadow: `0px 0px 16px 0px ${theme.colors.neutral.x900}`,
    },
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon: <Icon name="gitHub" size="md" />,
  });

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x100}`,
        marginBottom: '15px',
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
        <Image
          src={templateConfig.personal.avatar}
          alt={templateConfig.personal.avatarAlt}
          styleSheet={{
            width: { xs: '64px', sm: '80px', md: '96px', lg: '112px', xl: '128px' },
            height: { xs: '64px', sm: '80px', md: '96px', lg: '112px', xl: '128px' },
            borderRadius: '50%',
            border: `1px solid ${theme.colors.neutral.x200}`,
            boxShadow: `0px 0px 16px 0px ${theme.colors.neutral.x200}`,
          }}
        />
        <Box>

          <Text tag="h1" variant="heading4">
            Me paga um café?
          </Text>

          <ImageNext
            src={"/images/mepagaumcafe.png"}
            alt="Café"
            width={128}
            height={128}
            onClick={notify}
            style={{
              cursor: 'pointer',
              border: `1px solid ${theme.colors.neutral.x200}`,
              borderRadius: '16px',
              boxShadow: `0px 0px 16px 0px ${theme.colors.neutral.x200}`,
              borderColor: theme.colors.primary.x200,
              justifyContent: 'center',
              marginLeft: '16px',
              marginTop: '16px',
            }}
          />
          <ToastContainer />

        </Box>
      </Box>
      <Box
        styleSheet={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '16px',
          marginTop: '-60px',
        }}
      >
        <ButtonBase href={templateConfig.personal.socialNetworks.linkedin}
          styleSheet={{
            width: '170px',
          }}
        >
          <Text tag="h1" variant="heading4">
            {templateConfig?.personal?.name}
          </Text>
        </ButtonBase>

        <Box
          styleSheet={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '4px',
            marginBottom: '25px',
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
    </Box>
  )
}

interface FeedPostsProps {
  posts: Post[];

}
Feed.Posts = function FeedPosts({ posts }: FeedPostsProps) {
  return (
    <Box>
      <Text tag="h2" variant="heading4" styleSheet={{
        marginBottom: '32px',
      }}>
        Últimos posts
      </Text>
      {posts.map(({ title, slug, metadata, content, image }) => {
        const { date, excerpt, tags, url } = metadata
        return (
          <FeedPost
            key={slug}
            title={title}
            date={date}
            excerpt={excerpt}
            tags={tags}
            url={url}
            image={image}
            content={content}
          />
        )
      })}
    </Box>
  )
}
