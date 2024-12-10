import { FC } from 'react';
import {Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/menu';
import {Button} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { ISorting, ISortingItem } from '@/app/components/ui/catalog/sorting/sorting.interface';
import { sortingData } from '@/app/components/ui/catalog/sorting/sorting.data';


export const Sorting: FC<ISorting> = ({ setSortType, sortType }) => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{ sortingData.find((sort: ISortingItem): boolean => sort.value === sortType)?.label }
			</MenuButton>
			<MenuList>
				{ sortingData.map((sort: ISortingItem) =>
				<MenuItem key={sort.value}
					onClick={() => setSortType(sort.value)}>
					{ sort.label }
				</MenuItem>
				)}
			</MenuList>
		</Menu>
	);
};
