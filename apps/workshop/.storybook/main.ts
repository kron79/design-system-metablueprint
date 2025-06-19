import { join, dirname } from 'path';
import { type StorybookConfig } from '@storybook/react-vite';

/**
 * Resolve absolute path of a package.
 * This helps when using Yarn PnP or monorepos.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    {
      directory: '../../../packages/ui/src/',
      titlePrefix: 'UI',
      files: '*.stories.@(ts|tsx|js|jsx)',
    },
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-backgrounds'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config;