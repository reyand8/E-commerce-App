import {Box} from '@chakra-ui/react';
import {BoxProps, CloseButton, Flex, useColorModeValue} from '@chakra-ui/icons';

import Cart from '@/components/layout/header/cart/Cart';
import Search from '@/components/layout/header/search/Search';
import MenuMobile from '@/components/layout/header/menu/menuMobile/MenuMobile';

interface SidebarProps extends BoxProps {
    onClose: () => void
}


export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            w={{ base: 310 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center"
                  mx="4" justifyContent="space-between">
                <CloseButton display={{ base: 'flex', lg: 'none' }} color="#01573f" onClick={onClose} />
                <Cart />
            </Flex>
            <Search />
            <MenuMobile />
        </Box>
    )
}