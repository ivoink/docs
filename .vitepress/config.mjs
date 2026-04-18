import { defineConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
    srcDir: "docs",
    publicDir: ".vitepress/public",
    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "48x48",
                href: "/favicon-48x48.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/apple-touch-icon-152x152.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "167x167",
                href: "/apple-touch-icon-167x167.png",
            },
        ],
        ["link", { rel: "manifest", href: "/site.webmanifest" }],
        ["meta", { name: "theme-color", content: "#ffffff" }],
        [
            "meta",
            { name: "msapplication-config", content: "/browserconfig.xml" },
        ],
    ],
    title: "Inkwell Ops",
    description: "Linux & Infrastructure",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Blog", link: "https://ivoink.qzz.io", target: "_blank" },
        ],

        sidebar: [
            // {
            //     text: "Examples",
            //     items: [
            //         { text: "Markdown Examples", link: "/markdown-examples" },
            //         { text: "Runtime API Examples", link: "/api-examples" },
            //     ],
            // },
            {
                text: "关于",
                items: [{ text: "关于站点", link: "/about" }],
            },
            {
                text: "Linux",
                base: "/linux-system/",
                items: [
                    { text: "Overview", link: "/" },
                    {
                        text: "01 - Linux 安装与远程登录",
                        link: "/01-linux-installation-and-remote-login",
                    },
                    {
                        text: "02 - 软件与软件源",
                        link: "/02-software-and-software-sources",
                    },
                    {
                        text: "03 - 用户类型和用户权限",
                        link: "/03-user-types-and-user-permissions",
                    },
                ],
            },
        ],

        // socialLinks: [
        //     { icon: "github", link: "https://github.com/vuejs/vitepress" },
        // ],
    },
};

const vitePressI18nOptions = {
    locales: ["zhHans"],
};

export default defineConfig(withI18n(vitePressOptions, vitePressI18nOptions));
