// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://dreykp.github.io',
    base: '/awesome-open-source',
    integrations: [
        starlight({
            title: 'Open Source Compass',
            defaultLocale: 'uk',
            locales: {
                // en: {label: 'English'},
                uk: {label: '🇺🇦'}
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Dreykp/awesome-open-source' }],
            customCss: ['./src/styles/custom.css'],
            sidebar: [
                {
                    label: 'Інструкції',
                    autogenerate: { directory: 'guides' },
                },
                {
                    label: 'Сервіси',
                    autogenerate: { directory: 'self-hosted-services' },
                },{
                    label: 'Додатки',
                    autogenerate: { directory: 'desktop-and-mobile' },
                },
            ],
        }),
    ],
});