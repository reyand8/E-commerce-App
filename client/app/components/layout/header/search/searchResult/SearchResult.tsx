import { FC } from 'react';
import {Box} from '@chakra-ui/react';

import {IProduct} from '@/types/product.interface';
import Loader from '@/components/ui/loader/Loader';
import SearchItem from '@/components/layout/header/search/searchResult/searchItem/SearchItem';
import styles from '../Search.module.scss';

export interface ISearchResult {
    searchValue: string;
    searchResult:  IProduct[] | undefined;
    isLoading: boolean;
}

const SearchResult: FC<ISearchResult> = ({searchValue, searchResult, isLoading}) => {
    return (
        <Box className={styles.search_box}>
    	    {isLoading ? (
    		<Loader />
    	    ) : (
    		searchResult?.length ? (
    			searchResult.map((product: IProduct) => (
    				<SearchItem product={product} key={product.id} />
    			))
    		) : (
    			searchValue && <span>No results found</span>
    		)
    	    )}
        </Box>
    );
};

export default SearchResult;