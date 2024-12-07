import { FC } from 'react';
import { Button, HStack, Input } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';

import styles from '../../Cart.module.scss';
import {ICartItem} from '@/types/cartItem.interface';
import {useActions} from '@/app/hooks/useActions';


export const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions();

	const handleDecrease = (): void => {
		if (item.quantity > 1) {
			changeQuantity({ id: item.id, type: 'decrease' });
		}
	};

	const handleIncrease = (): void => {
		changeQuantity({ id: item.id, type: 'increase' });
	};

	return (
		<div className={styles.options}>
			<HStack>
				<Button
					onClick={handleDecrease}>
					<MinusIcon boxSize={4} />
				</Button>
				<Input
					value={ item.quantity }
					width={54}
					focusBorderColor='green.450'
					readOnly
					_hover={{ cursor: 'default' }}
				/>
				<Button
					onClick={handleIncrease}>
					<AddIcon boxSize={4} />
				</Button>
			</HStack>
			<Button
				className={styles['delete-button']}
				color='#F22C3D'
				marginLeft={118}
				onClick={() => removeFromCart({ id: item.id }) }>
				<DeleteIcon />
			</Button>
		</div>
	);
};
