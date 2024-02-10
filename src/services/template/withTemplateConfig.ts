import path from 'path';
import readYamlFile from 'read-yaml-file/index';
export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  }
  personal?: {
    name?: string;
    avatar?: string;
    avatarAlt?: string;
    socialNetworks?: {
      youtube?: string;
      github?: string;
      twitter?: string;
      linkedin?: string;
    };
  }
}


export async function withTemplateConfig(props = {}) {

  const PATH_TEMPLATE_CONFIG = path.resolve(".", "template-config.yml");
  const templateConfig = await readYamlFile<TemplateConfig>(path.resolve(PATH_TEMPLATE_CONFIG));
  return {
    templateConfig,
    ...props,
  }
}
