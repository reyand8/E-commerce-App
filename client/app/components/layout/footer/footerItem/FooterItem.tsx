import Link from 'next/link';
import { FC } from 'react';

import {IFooterMenuItem} from '@/components/layout/footer/footerItem/footerItem.interface';


const FooterItem: FC<IFooterMenuItem> = ({ item }) => {
    return (
        <li>
            <Link href={item.link}>{item.name}</Link>
        </li>
    );
};

export default FooterItem;