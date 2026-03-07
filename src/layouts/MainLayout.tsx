import type { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  // Use the same height you defined in your Navbar
  return (
    <Flex
      flexDirection="column"
      minH="100vh"
      bg="bg.default"
      alignItems="center"
      mx={2}
      px={2}
    >
      <Header />
      <Box
        as="main"
        flex={1}
        w="full"
        maxW="720px"
        // This pulls the content to the top of the screen
        mt={2}
        pt={4}
        px={0}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;