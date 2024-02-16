import { useTheme } from '@src/theme/themeProvider';
import Markdown from 'markdown-to-jsx'

export default function Post({ children, ...props }) {
  const theme = useTheme();
  return (
    <Markdown {...props}
      options={{
        wrapper: 'article',
      }}
      style={{
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: theme.colors.neutral.x000,
        color: theme.colors.neutral.x800,
        border: `1px solid ${theme.colors.neutral.x100}`,
        marginBottom: '16px',
        fontSize: '16px',
      }}
    >
      {children}
    </Markdown>
  )
}
