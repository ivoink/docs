import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
            {
                text: "Linux",
                base: "/linux-system/",
                items: [{ text: "Overview", link: "/" }],
            },
        ],

        // socialLinks: [
        //     { icon: "github", link: "https://github.com/vuejs/vitepress" },
        // ],
    },
});
