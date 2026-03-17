import { Button } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode';
import {
  FiSun, 
  FiMoon
 } from 'react-icons/fi';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      variant="ghost"
      size="sm"
      fontSize="16px"
      fontWeight="500"
      px={2}
      py={1}
      minW="auto"
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      _hover={{ bg: 'bg.muted' }}
    >
      {colorMode === 'light' ? <FiSun /> : <FiMoon />}
    </Button>
  );
};

export default ThemeToggle;
