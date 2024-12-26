import {FC, useState} from 'react';
import {Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/menu';
import {Button} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import styles from './SortingCat.module.scss';
import {ICat, ICatSorting} from '@/components/ui/catalog/sortingCat/sortingCat.interface';


export const SortingCat: FC<ICatSorting> = ({ setSortCat, sortData }) => {
	const [ catLabel, setCatLabel ] = useState('Select Category');

	const onSelectCatClick = (sort): void => {
		setSortCat({id: sort.id, text: sort.text})
		setCatLabel(sort.text)
	}

	return (
		<div className={styles.sort}>
			<Menu>
				<MenuButton as={Button} bg="#018c63" color="white" rightIcon={<ChevronDownIcon color="white"/>}>
					{ catLabel }
				</MenuButton>
				<MenuList>
					{ sortData.map((sort: ICat) =>
						<MenuItem key={sort.id}
								  onClick={() => onSelectCatClick(sort)}>
							{ sort.text }
						</MenuItem>
					)}
				</MenuList>
			</Menu>
		</div>
	);
};