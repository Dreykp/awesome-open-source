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
                en: {label: '🇬🇧'},
                uk: {label: '🇺🇦'}
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Dreykp/awesome-open-source' }],
            customCss: ['./src/styles/custom.css'],
            sidebar: [
                {
                    label: 'Вступ',
                    link: 'structure'
                },
                {
                    label: 'Сервіси',
                    items: [
                        {
                            label: 'Менеджери контейнерів',
                            items: [
                                {
                                    label: 'Portainer',
                                    link: 'project/portainer',
                                },
                            ],
                        },
                    ],
                },{
                    label: 'Додатки',
                    autogenerate: { directory: 'desktop-and-mobile' },
                },
            ],
        }),
    ],
});