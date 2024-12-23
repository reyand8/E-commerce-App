import {Flex, FlexProps, IconButton} from '@chakra-ui/icons';
import {FiMenu} from 'react-icons/fi';

interface MobileProps extends FlexProps {
    onOpen: () => void
}


export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            height="20"
            alignItems="center"
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                bg="#73AF90C1"
                color="white"
                aria-label="open menu"
                icon={<FiMenu />}
            />
        </Flex>
    )
}