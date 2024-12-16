import { FC, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import {debounce} from 'lodash';
import { useQuery } from '@tanstack/react-query';

import styles from './Search.module.scss';
import { ProductService } from '@/services/productService';
import {IProduct} from '@/types/product.interface';
import SearchResult from '@/components/layout/header/search/searchResult/SearchResult';


const Search: FC = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleSearchChange = debounce((value: string): void => {
		setSearchValue(value);
	}, 100);

	const { data: searchResult, isLoading } = useQuery<IProduct[]>({
		queryKey: ['products', searchValue],
		queryFn: () => ProductService.bySearchString(searchValue),
		enabled: !!searchValue,
	});

	return (
		<div className={styles.search}>
			<div>
				<InputGroup>
					<InputRightElement
						pointerEvents="none"
						children={<SearchIcon color='gray.600' />}
					/>
					<Input
						variant='flushed'
						type='search'
						placeholder='Search...'
						onChange={e => handleSearchChange(e.target.value)}
						value={searchValue}
						className={styles.input}
						_focusVisible={{
							borderColor: '#008D64'
						}}
					/>
				</InputGroup>
				{searchValue &&
					<SearchResult searchValue={searchValue} searchResult={searchResult} isLoading={isLoading} />
				}
			</div>
		</div>
	);
};

export default Search;