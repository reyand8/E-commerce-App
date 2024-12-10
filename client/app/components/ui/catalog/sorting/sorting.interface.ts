import {Dispatch, SetStateAction} from 'react';

export enum EnumSorting {
	NEWEST = 'newest',
	OLDEST = 'oldest',
	LOW_TO_HIGH_PRICE = 'low-to-high',
	HIGH_TO_LOW_PRICE = 'high-to-low',
}

export interface ISortingItem {
	label: 'Newest' | 'Oldest' | 'Price: low to high' | 'Price: high to low';
	value: EnumSorting;
}

export interface ISorting {
	sortType: EnumSorting;
	setSortType: Dispatch<SetStateAction<EnumSorting>>;
}