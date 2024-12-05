import {FC, useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';

import Layout from '@/app/components/layout/Layout';
import Loader from '@/app/components/ui/loader/Loader';
import {Catalog} from '@/app/components/ui/catalog/Catalog';
import {Heading} from '@/app/components/ui/heading/Heading';
import {EnumSorting} from '@/app/components/ui/catalog/sorting/sorting.interface';
import {CategoryService} from '@/services/categoryService';
import {ProductService} from '@/services/productService';
import {IProduct} from '@/types/product.interface';
import {ICategory} from '@/types/category.interface';



const Home: FC = () => {
    const sortType: EnumSorting = EnumSorting.NEWEST;
    const [ drinksCat, setDrinksCat ] = useState<number[]>([]);
    const [ foodCat, setFoodCat ] = useState<number[]>([]);
    const [ dessertsCat, setDessertsCat ] = useState<number[]>([]);

    const { data: categories, isLoading: isLoadingCategories } = useQuery<ICategory[]>({
        queryKey: ['categories'],
        queryFn: () => CategoryService.getCategories(),
    });

    const filterCategories = (names: string[], categories: ICategory[]) =>
        categories.filter((category: ICategory) => names.includes(category.text.toLowerCase()))
            .map((category: ICategory) => category.id);

    useEffect((): void => {
        if (categories) {
            setDrinksCat(filterCategories(['tea', 'coffee'], categories));
            setFoodCat(filterCategories(['salad', 'burger'], categories));
            setDessertsCat(filterCategories(['dessert'], categories));
        }
    }, [categories]);

    const { data: allDrinks = [], isLoading: isLoadingDrinks } = useQuery<IProduct[]>({
        queryKey: ['products', sortType, drinksCat],
        queryFn: () => ProductService.getProducts(sortType, drinksCat),
        enabled: drinksCat.length > 0,
    });

    const { data: allFood = [], isLoading: isLoadingFood } = useQuery<IProduct[]>({
        queryKey: ['products', sortType, foodCat],
        queryFn: () => ProductService.getProducts(sortType, foodCat),
        enabled: foodCat.length > 0,
    });

    const { data: allDesserts = [], isLoading: isLoadingDesserts } = useQuery<IProduct[]>({
        queryKey: ['products', sortType, dessertsCat],
        queryFn: () => ProductService.getProducts(sortType, dessertsCat),
        enabled: dessertsCat.length > 0,
    });

    const isLoading: boolean = isLoadingCategories || isLoadingDrinks || isLoadingFood || isLoadingDesserts;

    return (
        <>
            <Layout title='Home' description='Select and buy'>
                <Heading className='text-center'>
                    Enjoy the best days of the year
                </Heading>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Catalog products={allDrinks} cat={'Drinks'} />
                        <Catalog products={allDesserts} cat={'Desserts'} />
                        <Catalog products={allFood} cat={'All food'} />
                    </>
                )}
            </Layout>
        </>
    );
};

export default Home;