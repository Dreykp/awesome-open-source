// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://dreykp.github.io',
    base: '/awesome-open-source',
    integrations: [
        starlight({
            title: 'Awesome open source',
            defaultLocale: 'en',
            locales: {
                en: {label: 'English'},
                uk: {label: 'Українська'}
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                // 👇 ОСЬ НОВИЙ БЛОК ДЛЯ ВАШОГО КАТАЛОГУ
                {
                    label: 'Каталог Додатків', // Назва секції в меню
                    autogenerate: { directory: 'apps' }, // Автоматично генерувати меню з папки 'apps'
                },
                // ЦЕ ЗАЛИШКОВІ БЛОКИ, ЇХ МОЖНА ВИДАЛИТИ АБО ЗАЛИШИТИ
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});