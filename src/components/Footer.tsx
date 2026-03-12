import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode';
import FacebookLogo from '@/components/logos/FacebookLogo';
import GithubLogo from '@/components/logos/GithubLogo';
import InstagramLogo from '@/components/logos/InstagramLogo';
import ThreadsLogo from '@/components/logos/ThreadsLogo';
import { LuMail } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Match the muted text color used in your navbar for a cohesive look
  const textColor = useColorModeValue("gray.600", "gray.400");
  const iconHoverColor = "var(--chakra-colors-brand-default)";

  const socialLinks = [
    { icon: <GithubLogo width="20px" />, href: "https://github.com/mirusausiliq" },
    { icon: <FacebookLogo width="20px" />, href: "https://facebook.com/ketangalan" },
    { icon: <InstagramLogo width="20px" />, href: "https://instagram.com/ketangalan" },
    { icon: <ThreadsLogo width="20px" />, href: "https://threads.net/ketangalan" },
    { icon: <LuMail width="20px" />, href: "mailto:mirusausiliq@gmail.com" }
  ];

  return (
    <Box
      as="footer"
      w="full"
      py={4}
      mt="auto" // Ensures it stays at the bottom in the Flex layout
    >
      <Container maxW="720px">
        <Stack gap={2} align="center">

          {/* Social Links */}
          <HStack gap={4}>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                _hover={{ color: iconHoverColor, transform: 'scale(1.1)' }}
                transition="all 0.2s"
                color={textColor}
              >
                {social.icon}
              </Link>
            ))}
          </HStack>

          {/* Copyright Text */}
          <Text fontSize="sm" color={textColor} textAlign="center" fontWeight="500">
            © 2025 - {currentYear} Siliqx Labs & Society for Basay Ketangalan Studies. All rights reserved.
          </Text>

        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
