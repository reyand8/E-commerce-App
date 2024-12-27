import {FC, useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';

import {ICategory} from '@/types/category.interface';
import {EnumSorting} from '@/app/components/ui/catalog/sorting/sorting.interface';
import {CategoryService} from '@/services/categoryService';
import {IProduct} from '@/types/product.interface';
import {ProductService} from '@/services/productService';
import Layout from '@/app/components/layout/Layout';
import {Heading} from '@/app/components/ui/heading/Heading';
import Loader from '@/app/components/ui/loader/Loader';
import {Catalog} from '@/app/components/ui/catalog/Catalog';
import {SortingCat} from '@/components/ui/catalog/sortingCat/SortingCat';
import {ICat} from '@/components/ui/catalog/sortingCat/sortingCat.interface';


const Menu: FC<{page: string}> = ({page}) => {
    const sortType: EnumSorting = EnumSorting.NEWEST;
    const [sortCat, setSortCat] = useState<ICat | undefined>(undefined);
    const [ allCat, setAllCat ] = useState<number[]>([]);
    const [ allFilteredMenu, setAllFilteredMenu ] = useState<IProduct[]>([]);

    const { data: categories = [], isLoading: isLoadingCategories } = useQuery<ICategory[]>({
        queryKey: ['categories'],
        queryFn: () => CategoryService.getCategories(),
    });

    const filterCategories = (categories: ICategory[]) =>
        categories.map((category: ICategory) => category.id);

    const filterMenu = (menu: IProduct[]) =>
        menu.filter((menu: IProduct) => menu.categoryId === sortCat?.id);

    useEffect((): void => {
        if (categories) {
            setAllCat(filterCategories(categories));
        }
    }, [categories]);

    const { data: allMenu = [], isLoading: isLoadingMenu } = useQuery<IProduct[]>({
        queryKey: ['products', sortType, allCat],
        queryFn: () => ProductService.getProducts(sortType, allCat),
        enabled: allCat.length > 0,
    });

    useEffect((): void => {
        if (sortCat) {
            setAllFilteredMenu(filterMenu(allMenu));
        } else {
            setAllFilteredMenu(allMenu)
        }
    }, [sortCat, allMenu]);

    const isLoading: boolean = isLoadingCategories || isLoadingMenu;

    return (
        <>
            <Layout title={page} description='Select menu'>
                <Heading className='text-center'>
                    Explore our menu and discover the perfect choice for your moment.
                </Heading>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <SortingCat sortData={categories} setSortCat={setSortCat}/>
                        <Catalog products={allFilteredMenu} cat={'All food'} />
                    </>
                )}
            </Layout>
        </>
    );
};

export default Menu;