import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from '@vitejs/plugin-basic-ssl';

import icon from "astro-icon";
import { squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [basicSsl()],
        server: {
        https: true
        }
    },
    redirects: {
        '/home': '/'
    },
    image: {
        service: squooshImageService(),
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
                bannerText: 'storyblok/BannerText',
                infoCard: 'storyblok/InfoCard',
                cardGroup: 'storyblok/CardGroup',
                pricing_card: 'storyblok/PricingCard',
                horizontal_stack: 'storyblok/HorizontalStack',
                full_bleed: 'storyblok/FullBleed',
            }
        }),
        icon()
    ]
});