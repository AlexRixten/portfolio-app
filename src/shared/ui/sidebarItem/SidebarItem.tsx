import React from 'react';
import { Icon } from '@/shared/ui/icon/Icon';
import { EIcon } from '@/shared/enums/icon.enum';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
	title: string;
	icon: EIcon;
	href: string;
}

export const SidebarItem = ({ title, icon, href }: IProps) => {
	const pathname = usePathname();
	const isActive = pathname?.startsWith(href) ? 'active-link' : '';

	return (
		<li className="sideBar-item">
			<Link href={href} className={isActive}>
				<h6 className="subtitle h6 sideBar-item_tooltip">{title}</h6>
				<Icon size={25} name={icon} />
			</Link>
		</li>
	);
};
