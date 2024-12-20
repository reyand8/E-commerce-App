import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

import styles from './Heading.module.scss';


export const Heading: FC<PropsWithChildren<{ className?: string }>> =
	({ children, className }) => {
	return (
		<h1 className={cn(styles.heading, className)}>
			{children}
		</h1>
	);
};
