import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { menu } from './menu.data';
import styles from './Menu.module.scss';
import MenuItem from '@/app/components/layout/header/menu/menuItem/MenuItem';
import {IMenuLink} from '@/app/components/layout/header/menu/menuItem/menuItem.interface';


const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image src='/images/logo.png' alt='shop' width={100} height={100} />
			</Link>
			<nav>
				<ul>
					{menu.map((item: IMenuLink) =>
						<MenuItem key={item.link} item={item} />
					)}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
