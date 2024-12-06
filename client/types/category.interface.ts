import {IProduct} from '@/types/product.interface';


export interface ICategory {
    id: number;
    text: string;
    products: IProduct[]
}