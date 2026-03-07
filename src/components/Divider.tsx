import { Box } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

const Divider = () => {
  const color = useColorModeValue("black", "white");
  return (
    <Box my={2} w="100%" h="2px" bgColor={color} />
  )
}

export default Divider;