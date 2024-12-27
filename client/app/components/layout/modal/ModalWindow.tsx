import { FC } from 'react';
import {
	Modal, ModalBody, ModalCloseButton, ModalContent,
	ModalFooter, ModalHeader, ModalOverlay
} from '@chakra-ui/modal';
import {Button, HStack} from '@chakra-ui/react';

import styles from './ModalWindow.module.scss';
import PaymentGateway from '@/components/layout/header/cart/payment/Payment';


type Props = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit?: (event: any) => any;
	title: string;
}

export const ModalWindow: FC<Props> = ({isOpen, onClose, onSubmit, title}) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent maxW='600px' maxH='400'>
					<ModalHeader fontSize='26px' textAlign='center' color='#01573f'>{ title }</ModalHeader>
					<ModalCloseButton />
					<ModalBody >
							<HStack maxW='480px' margin='0 auto'>
								<PaymentGateway />
							</HStack>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='#de3637' onClick={onClose} className={styles.closeBtn}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
