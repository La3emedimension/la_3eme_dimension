export type Locale = 'fr' | 'en';

export interface Translations {
  nav: {
    shop: string;
    work: string;
    blog: string;
    about: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    legalMention: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
  home: {
    heroTitle: string;
    heroTagline: string;
    selectedWork: string;
    viewAll: string;
    shopTitle: string;
    shopTagline: string;
  };
  shop: {
    title: string;
    tagline: string;
    allProducts: string;
    services: string;
    telescopes: string;
    accessories: string;
    astronomy: string;
  };
  work: {
    title: string;
    tagline: string;
  };
  blog: {
    title: string;
    tagline: string;
  };
  about: {
    title: string;
    tagline: string;
  };
  skills: {
    custom: {
      title: string;
      description: string;
    };
    design: {
      title: string;
      description: string;
    };
    workshop: {
      title: string;
      description: string;
    };
  };
  common: {
    learnMore: string;
    contact: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  product: {
    pricingTitle: string;
    draftBanner: string;
  };
  lightbox: {
    close: string;
    previousImage: string;
    nextImage: string;
  };
}
