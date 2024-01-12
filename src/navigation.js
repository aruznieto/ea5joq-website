import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/aruznieto', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/aruznieto', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/aruznieto', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') , target: '_blank'},
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/aruznieto', target: '_blank' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/ea5joq.png)]"></span>
    Edited by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> EA5JOQ</a> · All rights reserved.
  `,
};
