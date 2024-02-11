import PostsService from '@src/services/posts/postsService';
import { withTemplateConfig } from '@src/services/template/withTemplateConfig';
export { default } from '@src/screens/HomeScreen/homeScreen';

export async function getStaticProps() {
  const posts = await PostsService().getAll();
  return {
    props: await withTemplateConfig({
      posts,
    }),
  }
}





