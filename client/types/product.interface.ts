import {Dispatch, SetStateAction} from 'react';

import { IReview } from './reviews.interface';


export interface ISlugProductDetails {
    product: IProduct;
    products: IProduct[];
}

export interface IProductVariations {
    product: IProduct;
    selItemSize: string;
    setSelectedSize: (size: string, index: number) => void;
}

export interface IProductDetails {
    product: IProduct;
    products: IProduct[];
}

export interface IProductImage {
    product: ISelectedProduct;
    currentImageIndex: number;
}

export interface IProductCard {
    product: IProduct;

}

export interface IProductNavigation {
    productId: number;
    products: IProduct[]

}

export interface IProductInformation {
    product: IProduct;
    currentImageIndex: number;
    setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}

export interface IProductBreadcrumbs {
    product: IProduct;
}

export interface IProduct {
    id: number;
    slug: string;
    name: string;
    description: string;
    ingredients: string;
    price: number[];
    size: string[];
    reviews: IReview[];
    images: string[];
    categoryId: number;
}

export interface ISelectedProduct {
    id: number;
    slug: string;
    name: string;
    description: string;
    ingredients: string;
    price: number;
    size: string[];
    reviews: IReview[];
    images: string[];
    categoryId: number;
}