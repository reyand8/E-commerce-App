import {axiosBase} from '@/api/api';
import {ICategory} from '@/types/category.interface';


const CATEGORIES: string = '/categories';

/**
 * Service for interacting with category-related API endpoints.
 *
 * The `CategoryService` provides the following method:
 *
 * - `getCategories`: Fetches the list of categories from the backend API and returns the data as an array of `ICategory` objects.
 */
export const CategoryService = {
    async getCategories(): Promise<ICategory[]> {
        const { data } = await axiosBase.get<ICategory[]>(CATEGORIES);
        return data;
    },
};