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
        tailwind({
            applyBaseStyles: false,
        }),
        storyblok({
            accessToken: process.env.STORYBLOK_TOKEN,
            apiOptions: {
                region: "us"
            },
            components: {
                page: 'storyblok/content/Page',
                post: 'storyblok/content/Post',
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
                full_bleed_hero: 'storyblok/blocks/hero/FullBleed',
                personnel_card: 'storyblok/PersonnelCard',
                flex_list: 'storyblok/FlexList',
                statistic: 'storyblok/Statistic',
                accent_button: 'storyblok/AccentButton',
                contact_form: 'storyblok/ContactForm',
                post_body: 'storyblok/PostBody',
                blog_post_list: 'storyblok/BlogPostList',
                carousel: 'storyblok/Carousel',
                testimonial_card:'storyblok/TestimonialCard',
            }
        }),
        icon()
    ]
});