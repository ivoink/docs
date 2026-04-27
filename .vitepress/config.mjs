import { defineConfig } from "vitepress";

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
    title: "Ink-Explorer-Well",
    description: "Notes of Exploration",
    locales: {
        root: {
            label: "简体中文",
            lang: "zh-Hans",
        },
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Blog", link: "https://ivoink.qzz.io", target: "_blank" },
        ],
        sidebar: [
            {
                text: "Linux",
                collapsed: true,
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
                    {
                        text: "04 - 文件编辑与操作",
                        link: "/04-file-editing-and-operation",
                    },
                    {
                        text: "05 - 系统与服务",
                        link: "/05-system-and-services",
                    },
                    {
                        text: "06 - Linux系统配置与安全",
                        link: "/06-configuration-and-security",
                    },
                    {
                        text: "07 - 网络配置与管理",
                        link: "/07-network-configuration-and-management",
                    },
                    {
                        text: "08 - 进程管理与日志排查",
                        link: "/08-process-management-and-log-troubleshooting",
                    },
                    {
                        text: "09 - 磁盘与存储管理",
                        link: "/09-disk-and-storage-management",
                    },
                ],
            },

            {
                text: "搭建自己的Linux开发环境",
                collapsed: true,
                base: "/build-linux-development-enviroment/",
                items: [{ text: "Overview", link: "/" }],
            },
        ],
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        displayDetails: "显示详情",
                        resetButtonTitle: "清除查询条件",
                        backButtonTitle: "返回",
                        noResultsText: "无法找到相关结果",
                        footer: {
                            selectText: "选择",
                            selectKeyAriaLabel: "输入",
                            navigateText: "切换",
                            navigateUpKeyAriaLabel: "上",
                            navigateDownKeyAriaLabel: "下",
                            closeText: "关闭",
                            closeKeyAriaLabel: "esc",
                        },
                    },
                },
            },
        },
        outline: {
            label: "页面导航",
        },
        lastUpdated: {
            text: "最后更新于",
        },
        editLink: {
            text: "在 GitHub 上编辑此页面",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        editLink: false,
        lastUpdated: false,
    },
});
