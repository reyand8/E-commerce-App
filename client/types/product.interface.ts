import { IReview } from './reviews.interface';

export interface IProductsPage {
    products: IProduct[];
}

export interface IProductDetails {
    product: IProduct;
}

export interface IProductsPage {
    products: IProduct[];
}

export interface IProduct {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number[];
    size: string[];
    reviews: IReview[];
    images: string[];
}

export interface ISelectedProduct {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    size: string[];
    reviews: IReview[];
    images: string[];
}