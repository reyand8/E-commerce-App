import  { FC } from 'react';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { IProductDetails } from '@/types/product.interface';


const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
	return (
		<Breadcrumb display='flex'
			justifyContent='end'
			marginTop={9}
			color='#3b3a3a'>
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} href='/'>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<BreadcrumbLink
					_hover={{ textDecoration: 'none' }}
					cursor='default'
					color='#666666'>
					{ product.name }
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default Breadcrumbs;