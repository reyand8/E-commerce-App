export class CreateProductDto {
	slug: string;
	name: string;
	description: string;
	ingredients: string;
	categoryId: number;
	price: number[];
	size: string[];
	images: string[];
}