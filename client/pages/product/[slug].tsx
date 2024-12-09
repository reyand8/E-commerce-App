import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { IProduct, IProductDetails, ISlugProductDetails } from '@/types/product.interface';
import ProductDetails from '@/app/components/screens/productDetails/ProductDetails';
import { ProductService } from '@/services/productService';


const ProductDetailsPage: NextPage<IProductDetails> = ({ product, products }) => {
    return <ProductDetails products={products} product={product} />
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps<ISlugProductDetails> = async ({ params }) => {
    const slug: string | undefined = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

    if (!slug) {
        return { notFound: true };
    }

    try {
        const product: IProduct = await ProductService
            .bySlug(slug).then((res) => res.data);

        const products: IProduct[] = await ProductService
            .getRelatives(product.categoryId).then((res) => res.data);

        return {
            props: {
                product,
                products,
            },
        };
    } catch (error) {
        return { notFound: true };
    }
};

export default ProductDetailsPage;