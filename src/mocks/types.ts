export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SiteConfig {
  name: string;
  description: string;
  logo: string;
  navItems: NavItem[];
  footerSections: FooterSection[];
  socialLinks: {
    platform: string;
    href: string;
    icon: string;
  }[];
}
