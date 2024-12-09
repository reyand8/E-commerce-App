import {AxiosResponse} from 'axios';

import {EnumSorting} from '@/app/components/ui/catalog/sorting/sorting.interface';
import { IProduct } from '@/types/product.interface';
import {axiosBase} from '@/api/api';


const PRODUCTS: string = '/products';

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
    async bySearchTerm(searchTerm: string): Promise<AxiosResponse<IProduct[]>> {
        return axiosBase.get<IProduct[]>(`${PRODUCTS}/search`, {
            params: {
                searchTerm
            }
        });
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