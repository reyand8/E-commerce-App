import { FC } from 'react';

import { footer } from './footer.data';
import styles from './Footer.module.scss';
import {IFooterMenuLink} from '@/components/layout/footer/footerItem/footerItem.interface';
import FooterItem from '@/components/layout/footer/footerItem/FooterItem';


export const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div>
                <p className={styles.footer_title}>© 2024 E-Commerce App. All rights reserved.</p>
            </div>
            <div>
                <ul className={styles.footer_menu}>
                    {footer.map((item: IFooterMenuLink) =>
                        <FooterItem key={item.link} item={item}/>
                    )}
                </ul>
            </div>
        </div>

    );
};

export default Footer;