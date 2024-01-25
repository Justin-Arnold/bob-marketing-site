import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwindcssNesting from 'tailwindcss/nesting'
import icon from "astro-icon";
import { squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true
        },
        css: {
            postcss: {
                plugins: [tailwindcssNesting()]
            }
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
            applyBaseStyles: false
        }),
        storyblok({
            accessToken: process.env.STORYBLOK_TOKEN,
            apiOptions: {
                region: "us"
            },
            components: {
                accent_button: 'storyblok/blocks/buttons/AccentButton',
                banner_text: 'storyblok/blocks/banners/BannerText',
                blog_post_list: 'storyblok/blocks/blog/BlogPostList',
                call_to_action_banner: 'storyblok/blocks/banners/CallToActionBanner',
                carousel: 'storyblok/Carousel',
                contact_form: 'storyblok/ContactForm',
                featured_blog_post_list: 'storyblok/blocks/blog/FeaturedBlogPostList',
                flex_layout: 'storyblok/blocks/layouts/FlexLayout',
                footer: 'storyblok/blocks/globals/AppFooter',
                full_bleed_hero: 'storyblok/blocks/hero/FullBleed',
                global_reference: 'storyblok/content/GlobalReference',
                grid_layout: 'storyblok/blocks/layouts/GridLayout',
                hero: 'storyblok//blocks/hero/NoBleed',
                horizontal_stack: 'storyblok/HorizontalStack',
                ImageCard: 'storyblok/blocks/cards/ImageCard',
                infoCard: 'storyblok/blocks/cards/InfoCard',
                link: 'storyblok/BaseLink',
                logoAndName: 'storyblok/AppLogo',
                menu_item_action: 'storyblok/blocks/menu_items/ActionItem',
                menu_item_nav: 'storyblok/blocks/menu_items/NavItem',
                page_section: 'storyblok/PageSection',
                page: 'storyblok/content/Page',
                personnel_card_grid: 'storyblok/PersonnelCardGrid',
                personnel_card: 'storyblok/blocks/cards/PersonnelCard',
                post_body: 'storyblok/blocks/blog/PostBody',
                post: 'storyblok/content/Post',
                pricing_card: 'storyblok/blocks/cards/PricingCard',
                siteHeader: 'storyblok/blocks/globals/AppHeader',
                siteHeaderMenu: 'storyblok/blocks/menu_items/AppHeaderMenu',
                statistic_card: 'storyblok/blocks/cards/StatisticCard',
                testimonial_card:'storyblok/blocks/cards/TestimonialCard',
                text_card: 'storyblok/blocks/cards/TextCard',
            }
        }),
        icon()
    ]
});