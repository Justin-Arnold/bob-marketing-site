import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true,
        },
    },
    redirects: {
        '/home': '/'
    },
    integrations: [
        tailwind(),
        storyblok({
            accessToken: process.env.STORYBLOK_TOKEN,
            apiOptions: {
                region: "us"
            },
            components: {
                page: 'storyblok/page',
                hero: 'storyblok/hero',
                siteHeader: 'storyblok/AppHeader',
                siteHeaderMenu: 'storyblok/AppHeaderMenu',
                logoAndName: 'storyblok/AppLogo',
                link: 'storyblok/BaseLink',
                uiTeaserImage: 'storyblok/UiTeaserImage',
                footer: 'storyblok/AppFooter',
            }
        })
    ]
});