import { withTemplateConfig } from '@src/services/template/withTemplateConfig';
export { default } from '@src/screens/HomeScreen/homeScreen';

export async function getStaticProps() {
  return {
    props: await withTemplateConfig({
      exemplo: 'exemplo de props com withTemplateConfig'
    }),
  }
}





