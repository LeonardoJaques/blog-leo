import NewsletterScreen from '@src/screens/NewsletterScreen/newsletterScreen';
import ThemeProvider from '@src/theme/themeProvider';

export default function Newsletter() {
  return (
    <ThemeProvider>
      <NewsletterScreen />
    </ThemeProvider>
  );
};
