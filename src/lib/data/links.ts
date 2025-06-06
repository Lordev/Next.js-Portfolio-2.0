import { SocialLinks, Link} from '@/lib/types'

export const mobileNavLinks: Link[] = [
    { label: 'Home', href: '#Home' },
    { label: 'Projects', href: '#Projects' },
    { label: 'About', href: '#About' },
    { label: 'Contact', href: '#Contact' },
];

export const heroNavLinks: Link[] = [
    { label: 'Projects', href: '#Projects' },
    { label: 'About', href: '#About' },
    { label: 'Contact', href: '#Contact' },
];

export const socialLinks: SocialLinks = {
    github: {
        label: 'Github',
        href: 'https://www.github.com/lordev',
    },
    linkedIn: {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/lorenzo-sallons-383945176',
    },
    email: {
        label: 'lorenzo.sallons.dev@gmail.com',
        href: 'mailto:lordev@gmail.com',
    },
};