import { FC } from 'react';
import Image from 'next/image';

import styles from './ContactInfo.module.scss';
import facebook from '../../../../public/images/facebook.png'
import instagram from '../../../../public/images/instagram.png'
import twitter from '../../../../public/images/twitter.png'


export const ContactInfo: FC = () => {
        return (
            <div className={styles.info}>
                <div>
                    <span>Our Address:</span>
                    <p>Gran Vía, 41, Centro, 28013 Madrid</p>
                </div>
                <div>
                    <span>Our Phone:</span>
                    <p>+34 666 333 222</p>
                </div>
                <div className={styles.links}>
                    <a href="https://www.instagram.com/">
                        <Image style={{maxWidth: '55px'}} src={instagram} alt={'instagram'}/>
                    </a>
                    <a href="https://www.facebook.com/">
                        <Image style={{maxWidth: '54px'}} src={facebook} alt={'facebook'}/>
                    </a>
                    <a href="https://www.x.com/">
                        <Image style={{maxWidth: '54px'}} src={twitter} alt={'twitter'}/>
                    </a>
                </div>
            </div>
        );
};