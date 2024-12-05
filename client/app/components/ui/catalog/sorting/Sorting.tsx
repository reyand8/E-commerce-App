import { Dispatch, FC, SetStateAction } from 'react';
import {Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/menu';
import { ChevronDownIcon } from '@chakra-ui/icons';

import {EnumSorting, ISortingItem} from "@/app/components/ui/catalog/sorting/sorting.interface";
import {sortingData} from "@/app/components/ui/catalog/sorting/sorting.data";
import {Button} from "@chakra-ui/react";


interface ISorting {
	sortType: EnumSorting;
	setSortType: Dispatch<SetStateAction<EnumSorting>>;
}

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
