import { ISelectedProduct } from '@/types/product.interface';

export interface ICartItem {
    id: number;
    product: ISelectedProduct;
    size: string;
    quantity: number;
}