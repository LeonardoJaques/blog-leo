import Box from "@src/components/Box/box";
import Icon from "@src/components/Icon/icon";
import { useTheme } from "@src/theme/themeProvider";

interface FeedPostProps {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string[];
}
export function FeedPost({ title, excerpt, date, tags, url }: FeedPostProps) {
  const theme = useTheme();
  const postDate = new Date(date)
    .toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .replace('.', '')
    .replace(/de /g, '')
  return (
    <Box
      styleSheet={{
        position: 'relative',
        marginBottom: '32px',
      }}
    >
      <FeedPostSideTimeline />
      {title}
    </Box>
  )
}

function FeedPostSideTimeline() {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        position: 'absolute',
        top: 0, bottom: 0,
        color: theme.colors.neutral.x200,
        marginLeft: '-16px',
      }}
    >
      <Icon
        size="sm"
        name="clock_fill"
        styleSheet={{
          transform: {
            xs: 'translateX(-50%) scale(.9)',
            sm: 'translateX(-50%)',
          },
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      />
      <Box
        styleSheet={{
          top: "16px",
          bottom: "0",
          margin: "auto",
          position: "absolute",
          width: '1px',
          backgroundColor: 'currentColor',
        }}
      />
    </Box>
  );
}
