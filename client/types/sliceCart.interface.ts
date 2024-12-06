import {ICartItem} from '@/types/cartItem.interface';

export type TypeDrinksSize = '240 ml' | '350 ml' |'470 ml' | '590 ml';

export type TypeFoodSize = string;

export interface ICartInitialState {
    items: ICartItem[];
}

export interface IAddCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityCardPayload extends Pick<ICartItem, 'id'> {
    type: 'increase' | 'decrease';
}