// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// 2026-02-15 Sunday 11:08:44.
const path = require('path');
// process.cwd() is /your-project/website
// path.join(..., '..') moves it to /your-project
const actualRootPath = path.join(process.cwd(), '..');
const projectFolderName = path.basename(actualRootPath);

// 2026-01-31 Saturday 13:11:26.Add timestamp to footer
const getDeploymentTimestamp = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // 2025-09-13
    const time = now.toISOString().split('T')[1].split('.')[0]; // 23:45:32
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    return `${date} ${time} UTC`;
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 2026-01-31 Saturday 12:27:16.I am commenting out this next block hoping to find a simple replacement.
// -----------------------------

// // 2026-01-30 Friday 13:09:29.  Try this switch for GH Pages vs. DreamHost --
// // I also modified the config inside 'const config' below.
// // 2026-01-31 Saturday 12:05:34.This is replaced.
// // const isGhPages = process.env.GITHUB_PAGES === 'true';

// /** @type {const} */
// const DEPLOY_TARGETS = ['local', 'gh', 'dreamhost'];

// // const deployTarget = process.env.DEPLOY_TARGET ?? 'local';
// // change this ^ to:

// /** @type {typeof DEPLOY_TARGETS[number]} */
// const deployTarget =
//     DEPLOY_TARGETS.includes(process.env.DEPLOY_TARGET)
//         ? process.env.DEPLOY_TARGET
//         : 'local';

// const siteConfig = {
//     local: {
//         url: 'http://localhost',
//         baseUrl: '/',
//     },
//     gh: {
//         url: 'https://johnmhoran.github.io',
//         baseUrl: '/408pinetrail.com/',
//     },
//     dreamhost: {
//         url: 'https://www.408pinetrail.com',
//         baseUrl: '/',
//     },
// };

// if (!siteConfig[deployTarget]) {
//     throw new Error(`Unknown DEPLOY_TARGET: ${deployTarget}`);
// }

// -------------------------------

// 2026-01-31 Saturday 12:29:02.Try this:
// ---
// Deployment target: local | gh | dreamhost
/** @type {'local' | 'gh' | 'dreamhost'} */
let deployTarget = 'local';

if (process.env.DEPLOY_TARGET === 'gh') {
    deployTarget = 'gh';
} else if (process.env.DEPLOY_TARGET === 'dreamhost') {
    deployTarget = 'dreamhost';
}

const siteConfig = {
    local: {
        url: 'http://localhost',
        baseUrl: '/',
    },
    gh: {
        url: 'https://johnmhoran.github.io',
        baseUrl: '/408pinetrail.com/',
    },
    dreamhost: {
        url: 'https://www.408pinetrail.com',
        baseUrl: '/',
    },
};

// ---

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '408pinetrail.com',
    tagline: '[Tagline . . . ?]',
    favicon: 'img/favicon-test.ico',

    // 2026-02-14 Saturday 11:03:21.custom field to ID project in footer
    customFields: {
        projectPath: process.cwd(), // full build-time path
        projectName: '408pinetrail.com', // or whatever label helps you
    },

    // 2026-02-14 Saturday 17:00:50.plugin to handle releases from other GH repos
    plugins: [require.resolve('./src/plugins/github-releases')],

    markdown: {
        format: 'detect', // Auto-detects: .md = plain Markdown (CommonMark), .mdx = MDX
    },

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // // Set the production url of your site here
    // url: 'https://your-docusaurus-site.example.com',
    // // Set the /<baseUrl>/ pathname under which your site is served
    // // For GitHub pages deployment, it is often '/<projectName>/'
    // baseUrl: '/',

    // // GitHub pages deployment config.
    // // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    // ======================================================================
    // // GH Pages deployment:
    // url: 'https://johnmhoran.github.io',
    // baseUrl: '/408pinetrail.com/',
    // trailingSlash: false,

    // // DreamHost deployment:
    // // url: "https://www.408pinetrail.com",
    // // baseUrl: "/",
    // // trailingSlash: false,

    // 2026-01-30 Friday 13:10:42.Replace above with the const I just set at the top.
    // 2026-01-31 Saturday 12:09:24.Replaced.
    // baseUrl: isGhPages ? '/408pinetrail.com/' : '/',

    // For GitHub pages deployment:
    // organizationName: 'johnmhoran',
    // projectName: '408pinetrail.com',

    url: siteConfig[deployTarget].url,
    baseUrl: siteConfig[deployTarget].baseUrl,
    trailingSlash: false,

    // ======================================================================

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // editUrl: ({ docPath }) => {
                    //     // TODO We can include a map here as in packageurl.org.
                    //     // Otherwise, provide a default (so “Edit this page” still works)
                    //     return `https://github.com/aboutcode-org/www.aboutcode.org/blob/main/website/docs/${docPath}`;
                    //     // fork:
                    //     // return `https://github.com/johnmhoran/www.aboutcode.org/blob/main/website/docs/${docPath}`;
                    // },
                },
                blog: {
                    showReadingTime: true,
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    // blogTitle: 'AboutCode blog!',
                    blogTitle: '408PineTrail blog!',
                },

                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            // image: 'img/docusaurus-social-card.jpg',
            // colorMode: {
            //     respectPrefersColorScheme: true,
            // },
            navbar: {
                logo: {
                    // alt: 'www.aboutcode.org Logo',
                    // src: 'img/AboutCode-logo-stackedv3.png',
                    alt: 'www.408pinetrail Logo',
                    src: 'img/no_logo_placeholder.svg',
                },
                style: 'dark',
                items: [
                    { to: '/', label: 'Home', position: 'left', exact: true },

                    {
                        to: '/releases',
                        label: 'Releases',
                        position: 'left',
                    },

                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'scancode',
                    //     position: 'left',
                    //     label: 'ScanCode',
                    // },
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'vulnerablecode',
                    //     position: 'left',
                    //     label: 'VulnerableCode',
                    // },
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'purldb',
                    //     position: 'left',
                    //     label: 'PURL-DB',
                    // },
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'dejacode',
                    //     position: 'left',
                    //     label: 'DejaCode',
                    // },
                    {
                        type: 'docSidebar',
                        sidebarId: 'about',
                        position: 'left',
                        label: 'About',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/johnmhoran',
                        label: 'GitHub',
                        position: 'right',
                    },
                    // {
                    //     href: 'https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og',
                    //     label: 'Slack',
                    //     position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                // links: [
                //     {
                //         html: `<img src="/www.aboutcode.org/img/AboutCode.svg" alt="My Company" width="150"/>`,
                //     },

                //     {
                //         html: `<a href="https://github.com/aboutcode-org" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="/www.aboutcode.org/img/github-mark-white.svg" alt="" width="20" height="20"></a>`,
                //     },

                //     {
                //         html: `<a href="https://www.linkedin.com/company/aboutcode/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BrQlfT6M0S1qSDpQjt52CiQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/www.aboutcode.org/img/brand-inlogo-download-fg-dsk-v01-2x.png" alt="" width="20" height="20"></a>`,
                //     },

                //     {
                //         html: `<a href="https://join.slack.com/t/aboutcode-org/shared_invite/zt-1paqwxccw-IuafuiAvYJFkTqGaZsC1og" target="_blank" rel="noopener noreferrer" aria-label="Slack"><img src="/www.aboutcode.org/img/slack-logo.svg" alt="" width="20" height="20"></a>`,
                //     },

                //     {
                //         html: `<a href="https://app.gitter.im/#/room/#aboutcode-org_discuss:gitter.im" target="_blank" rel="noopener noreferrer" aria-label="Gitter"><img src="/www.aboutcode.org/img/gitter.svg" alt="" width="20" height="20"></a>`,
                //     },

                //     {
                //         html: `<a href="mailto:hello@aboutcode.org" target="_blank" rel="noopener noreferrer" aria-label="Email"><img src="/www.aboutcode.org/img/email-svgrepo-com.svg" alt="" width="25" height="20"></a>`,
                //     },

                //     { label: 'Privacy Policy', to: '/privacy' },
                //     { label: 'Terms of Service', to: '/terms' },
                // ],

                // copyright: `Copyright John M. Horan. &nbsp; All rights reserved. &nbsp; Built with Docusaurus. <br />Last deployed: ${getDeploymentTimestamp()}`,

                // copyright: `Project: ${process.env.PROJECT_NAME || 'Default'} | Built on ${new Date().toLocaleDateString()}`,

                // copyright: `Copyright John M. Horan. &nbsp; All rights reserved. &nbsp; Built with Docusaurus. <br />Last deployed: ${getDeploymentTimestamp()} <br /><span style="color: #00ff00;">${process.cwd()} <br />Project: ${process.env.PROJECT_NAME || 'Default'} | Built on ${new Date().toLocaleDateString()}</span> <br /><span style="color: #80ffff;">${projectFolderName}</span>`,
                // Build path: ${process.cwd()}

                // copyright: `Copyright John M. Horan. &nbsp; All rights reserved. &nbsp; Built with Docusaurus. <br />Last deployed: ${getDeploymentTimestamp()} | <span style="color: #ff9999;">${projectFolderName}</span>`,

                copyright: `Copyright John M. Horan. &nbsp; All rights reserved. &nbsp; Built with Docusaurus. <br />Last deployed: ${getDeploymentTimestamp()} | <span style="background-color: #ffffff; padding: 0px 5px; border-radius: 5px; color: #000000;">${projectFolderName}</span>`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
