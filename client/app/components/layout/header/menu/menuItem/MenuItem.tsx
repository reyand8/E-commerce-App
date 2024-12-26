import Link from 'next/link';
import { FC } from 'react';

import {IMenuItem} from '@/components/layout/header/menu/menuItem/menuItem.interface';


const MenuItem: FC<IMenuItem> = ({ key, item }) => {
	return (
		<li key={key}>
			<Link href={item.link}>{item.name}</Link>
		</li>
	);
};

export default MenuItem;