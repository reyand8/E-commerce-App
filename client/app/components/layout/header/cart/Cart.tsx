import { FC, useRef, useState } from 'react';
import Image from 'next/image';
import {
	Drawer, DrawerBody, DrawerCloseButton,
	DrawerContent, DrawerFooter, DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';

import styles from './Cart.module.scss';
import {editCurrencyFormat} from '@/app/utils/editCurrencyFormat';
import {useCart} from '@/app/hooks/useCart';
import {CartItem} from '@/components/layout/header/cart/cartItem/CartItem';
import {ModalWindow} from '@/components/layout/modal/ModalWindow';
import cartIcon from '../../../../../public/images/cart.png'


const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isShowModal, setIsShowModal] = useState<boolean>(false);
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart();

	const handleClick = (): void => {
		setIsOpen(!isOpen);
	};

	const showModalWindow = (): void => {
		setIsShowModal(!isShowModal);
	};

	return (
		<div className={styles['wrapper-cart']}>
			<button className={styles.basket} onClick={handleClick} ref={btnRef}>
				<span className={cart.length >= 10 ? styles.badgeMoreTen : styles.badge}>{cart.length}</span>
				<span className={styles.title}> MY BASKET </span>
				<Image className={styles.icon} src={cartIcon} alt={'Cart'}/>
			</button>
			<Drawer
				size='sm'
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader fontSize={32} textAlign='center'>
						My basket
					</DrawerHeader>
					<DrawerBody>
						<div className={styles.cart}>
							{
								cart.length ?
									cart.map((item: any) => (
										<CartItem item={item} key={item.id} />
									)) :
									<div>Basket is empty!</div>
							}
						</div>
					</DrawerBody>
					<DrawerFooter
						justifyContent='space-between'
						borderTopColor='light-green'
						borderTopWidth={1}>
						<div className={styles.footer}>
							<div>Total:</div>
							<div>{ editCurrencyFormat(total) }</div>
						</div>
						<Button
							onClick={ showModalWindow }
							colorScheme='whatsapp'
							hidden={total === 0}>
							Checkout
						</Button>
						{ isShowModal &&
							<ModalWindow
								isOpen={ isShowModal }
								onClose={ showModalWindow }
								title={ 'Payment' } />
						}
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default Cart;