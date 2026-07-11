export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultKeywords: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
  };
}

export const seoDefaults: SEOConfig = {
  defaultTitle: "Ascope Tech — Enterprise Services, Education & Careers",
  titleTemplate: "%s | Ascope Tech",
  defaultDescription: "Ascope Tech is a premium integrated platform offering bespoke IT services, specialized professional training courses, and enterprise recruitment services.",
  defaultKeywords: "IT services, Web development training, recruiter portal, candidate portal, tech bootcamps, HR platform, enterprise tech education",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ascope.tech",
    siteName: "Ascope Tech",
    images: [
      {
        url: "https://ascope.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ascope Tech Platform Banner",
      }
    ],
  },
  twitter: {
    handle: "@ascopetech",
    site: "@ascopetech",
    cardType: "summary_large_image",
  },
};
