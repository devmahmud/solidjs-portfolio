import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

import { settingsPlugin } from './plugins/yaml-settings';
import { githubPlugin } from './plugins/github';
import { postsPlugin } from './plugins/posts';
import { sitemapGenerator } from './plugins/sitemap';

export default defineConfig({
  base: '/', // base URL for the projects
  plugins: [
    solid({ ssr: false, extensions: ['.mdx', '.md'] }),
    eslint(),
    settingsPlugin({ relativePath: './src/settings.yml' }),
    githubPlugin({ username: 'devmahmud' }),
    postsPlugin(),
    sitemapGenerator(),
  ],
});
