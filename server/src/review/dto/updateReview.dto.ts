import { PartialType } from '@nestjs/mapped-types';

import { CreateReviewDto } from './createReview.dto';


export class UpdateReviewDto extends PartialType(CreateReviewDto) {
	text?: string;
	rating?: number;
	productId?: number;
}