// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeNova(/* options */), ],
			title: 'InkNoteWell',
			description: 'Notes with Ink',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ivoink/docs', },
				{ icon: 'document', label: 'Blog', href: 'https://ivoinkwell.xyz', },
			],
			// components: {
			// 	SocialIcons: './src/components/SocialIcons.astro',
			// },
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: '/favicon-16x16.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: '/favicon-32x32.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '48x48',
						href: '/favicon-48x48.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/apple-touch-icon.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '152x152',
						href: '/apple-touch-icon-152x152.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '167x167',
						href: '/apple-touch-icon-167x167.png',
					},
				},
				{ tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#ffffff' } },
				{
					tag: 'meta',
					attrs: { name: 'msapplication-config', content: '/browserconfig.xml' },
				},
				{ tag: 'script', attrs: { src: '/open-external-links.js', defer: true } },
			],
			sidebar: [
				{
					label: 'Linux',
					collapsed: true,
					items: [
						{ label: '总览', link: '/linux-system/' },
						{ label: '01 - Linux 安装与远程登录', link: '/linux-system/01-linux-installation-and-remote-login/' },
						{ label: '02 - 软件与软件源', link: '/linux-system/02-software-and-software-sources/' },
						{ label: '03 - 用户类型和用户权限', link: '/linux-system/03-user-types-and-user-permissions/' },
						{ label: '04 - 文件编辑与操作', link: '/linux-system/04-file-editing-and-operation/' },
						{ label: '05 - 系统与服务', link: '/linux-system/05-system-and-services/' },
						{ label: '06 - Linux 系统配置与安全', link: '/linux-system/06-configuration-and-security/' },
						{ label: '07 - 网络配置与管理', link: '/linux-system/07-network-configuration-and-management/' },
						{ label: '08 - 进程管理与日志排查', link: '/linux-system/08-process-management-and-log-troubleshooting/' },
						{ label: '09 - 磁盘与存储管理', link: '/linux-system/09-disk-and-storage-management/' },
					],
				},
				{
					label: '搭建自己的 Linux 开发环境',
					collapsed: true,
					items: [
						{ label: '总览', link: '/build-linux-development-enviroment/' },
						{ label: '01 - 安装 Debian 13', link: '/build-linux-development-enviroment/01-install-debian-13/' },
						{ label: '02 - 基础组件与安装', link: '/build-linux-development-enviroment/02-basic-components-and-installation/' },
						{ label: '03 - 配置你自己的 i3-wm', link: '/build-linux-development-enviroment/03-configure-your-i3-wm/' },
						{ label: '04 - i3 工具补全与配置', link: '/build-linux-development-enviroment/04-i3-wm-tools-completion-and-configurations/' },
						{ label: '05 - 应用软件', link: '/build-linux-development-enviroment/05-application-software-recommendation/' },
					],
				},
				{
					label: '网络设备部署与公网访问',
					collapsed: true,
					items: [
						{ label: '总览', link: '/network-device-deployment-and-public-network-access/' },
						{ label: '01 - 安装部署 PVE 虚拟化平台', link: '/network-device-deployment-and-public-network-access/01-install-and-deploy-the-pve-virtualization-platform/' },
						{ label: '02 - KVM 虚拟机与 LXC 容器', link: '/network-device-deployment-and-public-network-access/02-kvm-virtual-machines-and-lxc-containers/' },
						{ label: '03 - 搭建 OpenVPN 服务器', link: '/network-device-deployment-and-public-network-access/03-set-up-an-openvpn-server/' },
						{ label: '04 - frp - 一个无需公网 IP 的内网穿透方式', link: '/network-device-deployment-and-public-network-access/04-frp-a-method-for-intranet-penetration-that-does-not-require-a-public-ip/' },
						{ label: '05 - Tailscale 平替 OpenVPN', link: '/network-device-deployment-and-public-network-access/05-tailscale-replaces-openvpn/' },
						{ label: '06 - 使用 Cloudflare Warp 与 Zero Trust 搭建团队 VPN', link: '/network-device-deployment-and-public-network-access/06-building-a-team-vpn-using-cloudflare-warp-and-zero-trust/' },	
					],
				},
				{
					label: '网络安全与数据安全参赛笔记',
					collapsed: true,
					items: [
						{ label: '6.15 数据安全刷题笔记', link: '/cybersecurity-and-data-security/data-security-6-15-note/' },
					],
				},
			],
		}),
	],
});
