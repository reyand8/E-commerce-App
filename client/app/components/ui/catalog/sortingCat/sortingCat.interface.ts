import {Dispatch, SetStateAction} from 'react';

export interface ICat {
	id: number;
	text: string;
}

export type ICatArray = ICat[];

export interface ICatSorting {
	sortData: ICatArray;
	setSortCat: Dispatch<SetStateAction<ICat>>;
}