import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { IProduct, IProductDetails, ISlugProductDetails } from '@/types/product.interface';
import ProductDetails from '@/components/screens/productDetails/ProductDetails';
import { ProductService } from '@/services/productService';

/**
 * ProductDetailsPage Component
 *
 * This page renders the product details and its related products by utilizing the `ProductDetails` component.
 * It fetches product data using the `getStaticProps` function for static generation of the page at build time.
 * Additionally, the `getStaticPaths` function is defined to handle dynamic paths for product slugs.
 *
 * The data fetched includes:
 * - **Product**: Detailed information about a specific product based on the slug.
 * - **Related Products**: Other products from the same category.
 */
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