import { ESideBar } from '@/shared/enums/sideBar.enum';
import { EIcon } from '@/shared/enums/icon.enum';
import { ERoutes } from '../enums/routes';

export const sideBarList = {
	[ESideBar.Home]: {
		title: 'Home',
		icon: EIcon.Home,
		href: ERoutes.Home,
	},
	[ESideBar.Services]: {
		title: 'Services',
		icon: EIcon.Services,
		href: ERoutes.Services,
	},
	[ESideBar.CV]: {
		title: 'Education',
		icon: EIcon.CV,
		href: ERoutes.CV,
	},
	[ESideBar.Portfolio]: {
		title: 'Portfolio',
		icon: EIcon.Portfolio,
		href: ERoutes.Portfolio,
	},
	[ESideBar.Blogs]: {
		title: 'Blogs',
		icon: EIcon.Blogs,
		href: ERoutes.Blogs,
	},
	[ESideBar.Contacts]: {
		title: 'Contacts',
		icon: EIcon.Contacts,
		href: ERoutes.Contacts,
	},
};
