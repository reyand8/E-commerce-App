import { FC } from 'react';

import { menu } from '../menu.data';
import styles from './MenuMobile.module.scss';
import MenuItem from '@/components/layout/header/menu/menuItem/MenuItem';
import {IMenuLink} from '@/components/layout/header/menu/menuItem/menuItem.interface';


const MenuMobile: FC = () => {
	return (
		<div className={styles.menu}>
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

export default MenuMobile;
