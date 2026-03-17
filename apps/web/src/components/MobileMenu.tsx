import {
  Flex,
  VStack,
  IconButton,
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
  Box,
} from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Link as RouterLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import KetangalanLogo from './logos/KetangalanLogo';

const MobileMenu = ({ isOpen, onClose, navItems, isActive }: any) => {
  // Use a semi-transparent background so the blur is visible
  // Light: white with 80% opacity | Dark: black with 80% opacity
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)");
  const textColor = useColorModeValue("black", "white");

  return (
    <DrawerRoot 
      open={isOpen} 
      onOpenChange={(e) => !e.open && onClose()} 
      size="full"
      placement="top"
    >
      {/* Apply blur to the backdrop that sits behind the content */}
      <DrawerBackdrop 
        backdropFilter="auto" 
        backdropBlur="5px" 
        bgColor="transparent" 
      /> 
      
      <DrawerContent 
        bg={bgColor} // Semi-transparent to let the blur effect shine through
        backdropFilter="auto" 
        backdropBlur="10px" // Redundant but ensures the content area is blurred too
        zIndex={1000}
        position="fixed"
        top="0px" 
        left="0px"
        m={0} 
        p={0}
        borderRadius={0}
      >
        {/* Header Area */}
        <Flex justify="space-between" align="center" px={8} h="80px">
          <KetangalanLogo width="80px" />
          <IconButton variant="ghost" onClick={onClose} color={textColor}>
            <FaTimes size="28px" />
          </IconButton>
        </Flex>

        {/* Links Area */}
        <DrawerBody 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center"
          height="calc(100vh - 80px)"
        >
          <VStack gap={8}>
            {navItems.map((item: any) => (
              <RouterLink key={item.path} to={item.path} onClick={onClose} style={{ textDecoration: 'none' }}>
                <Box
                  fontSize="30px"
                  fontWeight="700"
                  color={isActive(item.path) ? "var(--chakra-colors-brand-default)" : textColor}
                  _hover={{ transform: "scale(1.2)" }}
                  transition="all 0.2s"
                >
                  {item.label}
                </Box>
              </RouterLink>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileMenu;