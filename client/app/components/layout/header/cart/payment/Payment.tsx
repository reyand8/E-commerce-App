import { FC, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import {loadStripe, Stripe} from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Spinner } from '@chakra-ui/react';

import styles from './Payment.module.scss';
import {useCart} from '@/app/hooks/useCart';
import {useActions} from '@/app/hooks/useActions';


const PUBLIC_KEY: string =
	'KEY'

const Payment: FC = () => {
	const { cart, total } = useCart();
	const { resetCart } = useActions();
	const [ isProcessing, setIsProcessing ] = useState<boolean>(false);
	const [ paymentStatus, setPaymentStatus ] = useState<string>('');

	const stripe: Stripe | null = useStripe();
	const elements = useElements();

	const isSuccess: boolean = paymentStatus === 'succeeded';

	useEffect((): void => {
		if (total === 0) return;
		if (!isSuccess) return;
		resetCart();
	}, [isSuccess]);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (total === 0) return;
		if (!stripe || !elements) return;

		const cardElement = elements.getElement(CardElement);
		setIsProcessing(true);

		try {
			const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/payment`, {
				cart,
			});

			const { client_secret: clientSecret } = res.data;

			const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: cardElement!,
				}
			});

			if (!paymentIntent) {
				setPaymentStatus('Payment failed');
			} else {
				setPaymentStatus(paymentIntent.status);
			}

		} catch (error) {
			console.error(error);
			setPaymentStatus('Payment failed');
		}

		setIsProcessing(false);
	};

	return (
		<div className={styles.payment}>
			<form onSubmit={handleSubmit} id='payment-form'>
				<div className={styles.wrapper}>
				<label htmlFor='card-element' className={styles.label}>Order payment</label>
				<CardElement id='card-element' data-gramm="false" className={styles.card}/>
				{ !isProcessing ?
						(
						<button
							className={styles['pay-button']}
							disabled={total === 0}
							style={total === 0 ?
								{backgroundColor: 'lightGray'} : {backgroundColor: '#01573f'}}
						>
							{ isSuccess ? 'Done' : 'Pay' }
						</button>
					) :
						(
							<button
								className={styles['pay-button']}
								disabled
								style={{backgroundColor: '#dae7e3', paddingTop: '2px'}}>
								<Spinner />
							</button>
						)
				}
				{ isProcessing && <div> Processing... </div>}
				{ !isProcessing && paymentStatus &&
					<div className={styles['payment-status']}>
						Payment was <span style={ isSuccess ? {  color: 'green' } : { color: 'red' }}>
							{ isSuccess ? 'success' : paymentStatus }
						</span>
					</div>
				}
				</div>
			</form>
		</div>
	);
};

const PaymentGateway = () => {
	const [paymentPromise] = useState(() => loadStripe(PUBLIC_KEY))

	return (
		<Elements stripe={paymentPromise}>
			<Payment />
		</Elements>
	);
};

export default PaymentGateway;