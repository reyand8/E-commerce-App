import { GetStaticProps, NextPage } from 'next';

import {ProductService} from '@/services/productService';
import {IProduct, IProductsPage} from '@/types/product.interface';
import Home from '../app/components/screens/home/Home';


const HomePage: NextPage<IProductsPage> = ({ products }) => {
    return <Home products={products}/>;
};

export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
    const products: IProduct[] = await ProductService.getProducts();
    return {
        props: {
            products,
        },
    };
};

export default HomePage;