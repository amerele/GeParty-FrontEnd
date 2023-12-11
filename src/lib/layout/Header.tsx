import { Box, Flex } from '@chakra-ui/react';

import SidebarWithHeader from '../components/NavBar';

import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box w="100%" display="flex" justifyContent="space-between">
         Geparty
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;