import {AxiosResponse} from 'axios';

import {EnumSorting} from '@/components/ui/catalog/sorting/sorting.interface';
import { IProduct } from '@/types/product.interface';
import {axiosBase} from '@/api/api';


const PRODUCTS: string = '/products';

/**
 * Service for interacting with product-related API endpoints.
 *
 * - `getProducts`: Fetches a list of products, optionally sorted by a specific type and filtered by category IDs.
 * - `bySearchString`: Searches for products by a given search string.
 * - `byId`: Retrieves a specific product by its ID.
 * - `bySlug`: Retrieves a product by its slug (URL-friendly name).
 * - `getRelatives`: Fetches related products for a given category ID.
 */
export const ProductService = {
    async getProducts(type?: EnumSorting, categoryIds?: number[]): Promise<IProduct[]> {
        const params: any = {
            sortType: type,
        };

        if (categoryIds && categoryIds.length > 0) {
            params.categoryIds = categoryIds.join(',');
        }

        const { data } = await axiosBase.get<IProduct[]>(PRODUCTS, {
            params,
        });

        return data;
    },
    async bySearchString(searchString: string): Promise<IProduct[]> {
        const { data } = await axiosBase.get<IProduct[]>(`${PRODUCTS}/search`, {
            params: { searchString }
        });
        return data;
    },
    async byId(id: number): Promise<AxiosResponse<IProduct>> {
        return axiosBase.get<IProduct>(`${PRODUCTS}/${id}`);
    },
    async bySlug(slug: string): Promise<AxiosResponse<IProduct>> {
        return axiosBase.get<IProduct>(`${PRODUCTS}/slug/${slug}`);
    },
    async getRelatives(catId: number): Promise<AxiosResponse<IProduct[]>> {
        return axiosBase.get<IProduct[]>(`${PRODUCTS}/relatives/${catId}`);
    },
};