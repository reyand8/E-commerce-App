import Link from 'next/link';
import { FC } from 'react';

import {IMenuItem} from '@/components/layout/header/menu/menuItem/menuItem.interface';


const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.name}</Link>
		</li>
	);
};

export default MenuItem;
