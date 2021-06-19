module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'OpenNLU Developers',

    globalLayout: '.vuepress/components/GlobalLayout.vue',

    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: 'The Twitch Message Interface for PHP 7.4+',

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#6d00ff'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * The base URL the site will be deployed at.
     *
     * ref：https://vuepress.vuejs.org/config/#base
     */
    base: "/",

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'opennlu/docs',
        editLinks: true,
        docsDir: 'docs',
        docsBranch: 'main',
        editLinkText: 'Help us improve this page!',
        lastUpdated: true,
        copyright: true,
        nav: [
            {
                text: 'Documentation',
                link: '/docs/'
            },
            {
                text: 'Official Packages',
                ariaLabel: 'Official Packages Menu',
                items: [
                    { text: 'PHP Client', link: '/docs/php-client' },
                    { text: 'Java Client', link: '/docs/java-client' },
                ]
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/qsxVMNg'
            }
        ],
        sidebar: {
            '/docs/': [
                {
                    title: 'Documentation',
                    sidebarDepth: 2,
                    collapsable: false,
                    children: [
                        '',
                        'agents',
                        'intents',
                        'entities',
                        'actions-and-parameters',
                        'contexts',
                        'fulfillment',
                    ]
                },
                {
                    title: 'Official Packages',
                    sidebarDepth: 2,
                    collapsable: false,
                    children: [
                        'php-client',
                        'java-client',
                    ]
                }
            ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'docs/assets'
            }
        }
    }
}
