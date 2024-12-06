import {IProduct} from '@/types/product.interface';


export interface ICarouselItem {
    product: IProduct;
    index: number;
    key?: number;
    qty: number;
    cat: string;
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'index'> {
    isActive: boolean;
    onSelectedSlide: () => void;
    cat: string;
}

export interface ICarouselVariations {
    selectedSize: string;
    setSelectedSize: any;
    variant?: 'small' | 'medium';
    size: string[]
}