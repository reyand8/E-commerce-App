import { FC } from 'react';

import Cart from './cart/Cart';
import Menu from './menu/Menu';
import Search from './search/Search';
import styles from './Header.module.scss'


export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Search />
			<Cart />
		</header>
	);
};
