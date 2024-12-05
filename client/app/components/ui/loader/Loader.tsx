import React from 'react';
import { Spinner } from '@chakra-ui/react';

import {COLORS} from '@/app/config/color.config';


const Loader = () => {
	return (
		<Spinner
			thickness="0.8s"
			emptyColor='gray.200'
			borderWidth="4px"
			color={COLORS.green}
			size='xl'
			display='block'
			margin='0 auto'
			marginTop={20}
		/>
	);
};

export default Loader;
