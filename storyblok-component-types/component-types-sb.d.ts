import {StoryblokStory} from 'storyblok-generate-ts'

export interface AboutPageTitleStoryblok {
  text: string;
  _uid: string;
  component: "aboutPageTitle";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface AccentButtonStoryblok {
  title: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "accent_button";
  [k: string]: any;
}

export interface BannerTextStoryblok {
  heading?: string;
  subText?: string;
  _uid: string;
  component: "bannerText";
  [k: string]: any;
}

export interface BlogPostListStoryblok {
  heading?: string;
  _uid: string;
  component: "blog_post_list";
  [k: string]: any;
}

export interface CallToActionBannerStoryblok {
  heading?: string;
  subtext?: string;
  call_to_action?: string;
  call_to_action_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "call_to_action_banner";
  [k: string]: any;
}

export interface CardGroupStoryblok {
  cards?: (
    | CardGroupStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | PersonnelCardStoryblok
    | PricingCardStoryblok
    | TestimonialCardStoryblok
  )[];
  _uid: string;
  component: "cardGroup";
  [k: string]: any;
}

export interface CarouselStoryblok {
  items?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "carousel";
  [k: string]: any;
}

export interface ContactFormStoryblok {
  heading?: string;
  subheading?: string;
  phone_number?: string;
  email?: string;
  _uid: string;
  component: "contact_form";
  [k: string]: any;
}

export interface DisplayGridStoryblok {
  items?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "display_grid";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface FeaturedBlogPostListStoryblok {
  heading?: string;
  posts?: (StoryblokStory<PostStoryblok> | string)[];
  _uid: string;
  component: "featured_blog_post_list";
  [k: string]: any;
}

export interface FooterStoryblok {
  logo?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  socials?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  miscCategories?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  contactInformation?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  copywrite?: string;
  extraLinks?: LinkStoryblok[];
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface FullBleedStoryblok {
  item?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "full_bleed";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface FullBleedHeroStoryblok {
  heading_super?: string;
  heading?: string;
  body?: string;
  call_to_action?: string;
  background?: AssetStoryblok;
  _uid: string;
  component: "full_bleed_hero";
  [k: string]: any;
}

export interface GlobalStoryblok {
  global?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "global";
  uuid?: string;
  [k: string]: any;
}

export interface GlobalReferenceStoryblok {
  reference?: StoryblokStory<GlobalStoryblok> | string;
  _uid: string;
  component: "global_reference";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  preheading?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  heading?: string;
  subheading?: string;
  secondaryAction?: string;
  callToAction?: string;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface HorizontalStackStoryblok {
  items?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "horizontal_stack";
  [k: string]: any;
}

export interface ImageCardStoryblok {
  image: AssetStoryblok;
  _uid: string;
  component: "image_card";
  [k: string]: any;
}

export interface InfoCardStoryblok {
  heading?: string;
  subtext?: string;
  icon?: string;
  _uid: string;
  component: "infoCard";
  [k: string]: any;
}

export interface LinkStoryblok {
  title?: string;
  url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  isButton?: boolean;
  _uid: string;
  component: "link";
  [k: string]: any;
}

export interface ListStoryblok {
  items?: any[];
  _uid: string;
  component: "list";
  [k: string]: any;
}

export interface LogoAndNameStoryblok {
  logo?: AssetStoryblok;
  name?: string;
  _uid: string;
  component: "logoAndName";
  [k: string]: any;
}

export interface MenuItemActionStoryblok {
  title?: string;
  url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "menu_item_action";
  [k: string]: any;
}

export interface MenuItemNavStoryblok {
  title?: string;
  url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "menu_item_nav";
  [k: string]: any;
}

export interface PageStoryblok {
  header?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  body?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  footer?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PageSectionStoryblok {
  section_name?: string;
  items?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "page_section";
  [k: string]: any;
}

export interface PersonnelStoryblok {
  name?: string;
  title?: string;
  photo?: AssetStoryblok;
  description?: string;
  quote?: string;
  quote_author?: string;
  _uid: string;
  component: "personnel";
  [k: string]: any;
}

export interface PersonnelCardStoryblok {
  name?: string;
  title?: string;
  picture?: AssetStoryblok;
  description?: string;
  quote_text?: string;
  quote_author?: string;
  _uid: string;
  component: "personnel_card";
  [k: string]: any;
}

export interface PersonnelCardGridStoryblok {
  personnel?: (StoryblokStory<PersonnelStoryblok> | string)[];
  _uid: string;
  component: "personnel_card_grid";
  [k: string]: any;
}

export interface PersonnelReferenceStoryblok {
  reference?: (StoryblokStory<PersonnelStoryblok> | string)[];
  _uid: string;
  component: "personnel_reference";
  [k: string]: any;
}

export interface PostStoryblok {
  header?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  body?: PostBodyStoryblok[];
  footer?: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "post";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface PostBodyStoryblok {
  title?: string;
  description?: string;
  preview?: AssetStoryblok;
  posted?: string;
  author?: StoryblokStory<PersonnelStoryblok> | string;
  content?: RichtextStoryblok;
  _uid: string;
  component: "post_body";
  [k: string]: any;
}

export interface PricingCardStoryblok {
  name?: string;
  description?: string;
  cost_amount?: string;
  cost_frequency?: string;
  call_to_action?: string;
  feature_title?: string;
  features?: string;
  isPrimary?: boolean;
  _uid: string;
  component: "pricing-card";
  [k: string]: any;
}

export interface SiteHeaderStoryblok {
  leftSide: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  rightSide: (
    | AboutPageTitleStoryblok
    | AccentButtonStoryblok
    | BannerTextStoryblok
    | BlogPostListStoryblok
    | CallToActionBannerStoryblok
    | CardGroupStoryblok
    | CarouselStoryblok
    | ContactFormStoryblok
    | DisplayGridStoryblok
    | FeatureStoryblok
    | FeaturedBlogPostListStoryblok
    | FooterStoryblok
    | FullBleedStoryblok
    | FullBleedHeroStoryblok
    | GlobalStoryblok
    | GlobalReferenceStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HorizontalStackStoryblok
    | ImageCardStoryblok
    | InfoCardStoryblok
    | LinkStoryblok
    | ListStoryblok
    | LogoAndNameStoryblok
    | MenuItemActionStoryblok
    | MenuItemNavStoryblok
    | PageStoryblok
    | PageSectionStoryblok
    | PersonnelStoryblok
    | PersonnelCardStoryblok
    | PersonnelCardGridStoryblok
    | PersonnelReferenceStoryblok
    | PostStoryblok
    | PostBodyStoryblok
    | PricingCardStoryblok
    | SiteHeaderStoryblok
    | SiteHeaderMenuStoryblok
    | StatisticCardStoryblok
    | TeaserStoryblok
    | TestimonialCardStoryblok
    | TextContentStoryblok
  )[];
  _uid: string;
  component: "siteHeader";
  [k: string]: any;
}

export interface SiteHeaderMenuStoryblok {
  items?: (MenuItemActionStoryblok | MenuItemNavStoryblok)[];
  _uid: string;
  component: "siteHeaderMenu";
  [k: string]: any;
}

export interface StatisticCardStoryblok {
  title?: string;
  quantity?: string;
  _uid: string;
  component: "statistic_card";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}

export interface TestimonialCardStoryblok {
  quote?: string;
  author?: string;
  position?: string;
  _uid: string;
  component: "testimonial_card";
  [k: string]: any;
}

export interface TextContentStoryblok {
  body?: RichtextStoryblok;
  _uid: string;
  component: "text_content";
  [k: string]: any;
}
