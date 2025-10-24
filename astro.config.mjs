// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import starlightSidebarTopics from 'starlight-sidebar-topics'

import { sidebarTopics } from './sidebar.config.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://dreykp.github.io',
    base: '/awesome-open-source',
    integrations: [
        starlight({
            plugins: [starlightThemeGalaxy(), sidebarTopics,
            ],
            title: 'Open Source Compass',
            defaultLocale: 'uk',
            locales: {
                en: {label: '🇬🇧'},
                uk: {label: '🇺🇦'}
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Dreykp/awesome-open-source' }],
            customCss: ['./src/styles/custom.css'],
        }),
    ],
});