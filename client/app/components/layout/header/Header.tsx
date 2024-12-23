import { FC } from 'react';
import { useDisclosure } from '@chakra-ui/icons'
import { Box, Drawer, DrawerContent } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import Cart from './cart/Cart';
import Menu from './menu/Menu';
import Search from './search/Search';
import styles from './Header.module.scss'
import {MobileNav} from '@/components/layout/sidebar/mobileNav/MobileNav';
import {SidebarContent} from '@/components/layout/sidebar/SidebarContent';


export const Header: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<header>
			<div className={styles.header_desktop}>
				<Menu/>
				<Search/>
				<Cart/>
			</div>
			<Box className={styles.header_mobile}>
				<Link href='/'>
					<Image src='/images/logo.png' alt='shop' width={90} height={90} />
				</Link>
				<Drawer
					isOpen={isOpen}
					placement="right"
					onClose={onClose}
					returnFocusOnClose={false}
					onOverlayClick={onClose}
					>
					<DrawerContent>
						<SidebarContent onClose={onClose} />
					</DrawerContent>
				</Drawer>
				<MobileNav display={{ base: 'flex', lg: 'none' }} onOpen={onOpen} />
			</Box>
		</header>
	);
};