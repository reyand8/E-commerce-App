import { Body, Controller, Post } from '@nestjs/common';

import { PaymentService } from './payment.service';
import { Cart } from './dto/payment.interface';


/**
 * Controller for handling payment-related API requests.
 *
 * The `PaymentController` provides the following route:
 * - `POST /payment`: Initiates a checkout process by processing the cart data.
 */
@Controller('payment')
export class PaymentController {
	constructor(private paymentService: PaymentService) {
	}

	@Post()
	async checkout(@Body() dto: { cart: Cart }) {
		return this.paymentService.createPayment(dto.cart);
	}
}