import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import KetangalanLogo from './logos/KetangalanLogo';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

// --- Sub-component to keep the main Navbar minimal ---
const NavLink = ({ item, isActive, activeColor }: any) => (
  <RouterLink to={item.path} style={{ textDecoration: 'none' }}>
    <Box
      px={2}
      py={1}
      fontSize="14px"
      fontWeight={isActive ? '600' : '500'}
      color={isActive ? activeColor : 'inherit'}
      position="relative"
      transition="all 0.2s"
      _hover={{ color: activeColor }}
    >
      {item.label}
      {isActive && (
        <Box
          position="absolute"
          bottom="-2px"
          left="2"
          right="2"
          h="2px"
          bg={activeColor}
          borderRadius="full"
        />
      )}
    </Box>
  </RouterLink>
);

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const borderColor = useColorModeValue("black", "white");
  const activeColor = "var(--chakra-colors-brand-default)";

  const navItems = [
    { label: '首頁 Home', path: '/' },
    { label: '關於 About', path: '/about' },
    { label: '最新消息 News', path: '/news' },
    { label: '資源 Sources', path: '/sources' },
    { label: '辭典 Dict', path: '/dictionary'}
  ];

  return (
    <>
      <Box
        as="nav"
        position="sticky" // Changed from sticky to absolute
        top={2}
        zIndex={100}
        w="100%"
        maxW="720px"
      >
        <Container
          h="50px"
          bg="rgba(255, 255, 255, 0.01)"
          backdropFilter="blur(12px)"
          border="2px solid"
          borderColor={borderColor}
          borderRadius="20px"
          px={4}
        >
          <Flex justify="space-between" align="center" h="full">

            {/* 1. Left Section: Logo */}
            <Flex flex={1}>
              <RouterLink to="/">
                <KetangalanLogo width="65px" />
              </RouterLink>
            </Flex>

            {/* 2. Center Section: Navigation */}
            <HStack
              display={{ base: 'none', md: 'flex' }}
              gap={2}
              justify="center"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  item={item}
                  isActive={location.pathname === item.path}
                  activeColor={activeColor}
                />
              ))}
            </HStack>

            {/* 3. Right Section: Controls */}
            <Flex flex={1} justify="flex-end" align="center" gap={1}>
              <Box display={{ base: 'block', md: 'none' }}>
                <IconButton
                  variant="ghost"
                  aria-label="Open Menu"
                  onClick={onOpen}
                  size="sm"
                >
                  <FaBars />
                </IconButton>
              </Box>
              <ThemeToggle />
            </Flex>

          </Flex>
        </Container>
      </Box>

      <MobileMenu
        isOpen={open}
        onClose={onClose}
        navItems={navItems}
        isActive={(path: string) => location.pathname === path}
      />
    </>
  );
};

export default Navbar;