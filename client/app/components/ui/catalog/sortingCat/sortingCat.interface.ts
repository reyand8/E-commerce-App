import {Dispatch, SetStateAction} from 'react';

export interface ICat {
	id: number;
	text: string;
}

export interface ICatSorting {
	sortData: ICat[];
	setSortCat: Dispatch<SetStateAction<ICat>>;
}