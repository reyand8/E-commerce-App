import { BadRequestException, Injectable } from '@nestjs/common';
import Stripe from 'stripe';

import { Cart } from './dto/payment.interface';


/**
 * Service for processing payments using Stripe.
 * The `PaymentService` is responsible for creating a payment intent with Stripe based on the cart data.
 */
@Injectable()
export class PaymentService {
	private stripe;
	constructor() {
		this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
			apiVersion: '2024-11-20.acacia',
		});
	}

	async createPayment(cart: Cart) {
		try {
			const totalPrice: number = cart.reduce(
				(acc, item) =>
					acc + item.product.price * item.quantity, 0
			);
			return this.stripe.paymentIntents.create({
				amount: +totalPrice.toFixed(2) * 100,
				currency: 'euro',
				payment_method_types: ['card'],
			});
		} catch (error) {
			throw new BadRequestException('message', error.message);
		}
	}
}