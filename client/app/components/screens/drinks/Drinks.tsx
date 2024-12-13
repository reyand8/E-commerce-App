import {FC, useEffect, useState} from 'react';
import {EnumSorting} from '@/app/components/ui/catalog/sorting/sorting.interface';
import {useQuery} from '@tanstack/react-query';

import {ICategory} from '@/types/category.interface';
import {CategoryService} from '@/services/categoryService';
import {IProduct} from '@/types/product.interface';
import {ProductService} from '@/services/productService';
import Layout from '@/app/components/layout/Layout';
import {Heading} from '@/app/components/ui/heading/Heading';
import Loader from '@/app/components/ui/loader/Loader';
import {Catalog} from '@/app/components/ui/catalog/Catalog';


const Drinks: FC<{page: string}> = ({page}) => {
    const sortType: EnumSorting = EnumSorting.NEWEST;
    const [ drinksCat, setDrinksCat ] = useState<number[]>([]);

    const { data: categories, isLoading: isLoadingCategories } = useQuery<ICategory[]>({
        queryKey: ['categories'],
        queryFn: () => CategoryService.getCategories(),
    });

    const filterCategories = (names: string[], categories: ICategory[]) =>
        categories.filter((category: ICategory) => names.includes(category.text.toLowerCase()))
            .map((category: ICategory) => category.id);

    useEffect((): void => {
        if (categories) {
            setDrinksCat(filterCategories([page], categories));
        }
    }, [categories]);

    const { data: allDrinks = [], isLoading: isLoadingDrinks } = useQuery<IProduct[]>({
        queryKey: ['products', sortType, drinksCat],
        queryFn: () => ProductService.getProducts(sortType, drinksCat),
        enabled: drinksCat.length > 0,
    });

    const isLoading: boolean = isLoadingCategories || isLoadingDrinks;

    return (
        <>
            <Layout title={page} description='Select tea'>
                <Heading className='text-center'>
                    Discover the perfect brew for your moment
                </Heading>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Catalog products={allDrinks} cat={'Drinks'} />
                </>
                )}
            </Layout>
        </>
    );
};

export default Drinks;