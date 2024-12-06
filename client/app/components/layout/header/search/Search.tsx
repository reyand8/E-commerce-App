import { FC, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import styles from './Search.module.scss';


const Search: FC = () => {
	const [searchValue, setSearchValue] = useState('');

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
						onChange={e => setSearchValue(e.target.value)}
						value={searchValue}
						className={styles.input}
						_focusVisible={{
							borderColor: '#008D64'
						}}
					/>
				</InputGroup>
			</div>
		</div>
	);
};

export default Search;