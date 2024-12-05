import { IProduct } from '@/types/product.interface';
import {axiosBase} from '@/api/api';
import {ICategory} from '@/types/category.interface';


const CATEGORIES: string = '/categories';

export const CategoryService = {
    async getCategories(): Promise<ICategory[]> {
        const { data } = await axiosBase.get<ICategory[]>(CATEGORIES);
        return data;
    },
};