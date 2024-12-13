import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {IProduct} from '@/types/product.interface';
import styles from '../../Search.module.scss';


export interface ISearchItem {
    product: IProduct;
    key: number;
}

const SearchItem: FC<ISearchItem> = ({product, key}) => {
    const { name, images, slug } = product;

    return (
        <Link href={`/product/${slug}`}>
            <div className={styles.item} key={key}>
                <div className={styles.title}>
                    <Image src={images[0]} width={100} height={100} alt={'item'}/>
                </div>
                <div>
                    {name}
                </div>
            </div>
        </Link>
    );
};

export default SearchItem;